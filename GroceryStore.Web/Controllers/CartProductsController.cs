using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.DbLayer.Helpers;
using GroceryStore.Store;
using GroceryStore.Web.ApiModels;
using GroceryStore.Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/cart-products")]
    [ApiController]
    public class CartProductsController : ControllerBase
    {
        public UnitOfWork UnitOfWork;
        private IUserService _userService;
        public CartProductsController(UnitOfWork UnitOfWork, IUserService userService)
        {
            _userService = userService;
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetCartProducts()
        {
            var userId = await _userService.GetUserId(User);

            try
            {
                var products = await UnitOfWork.CartProductManager.GetCartProductsByUserIdAsync(userId);

                if (products == null)
                {
                    return Ok();
                }
                
                return Ok(products.Select(p => new CartProductModel
                {
                    ProductId = p.ProductId,
                    Name = p.Product.Name,
                    Quantity = p.Quantity,
                    Price = p.Product.Price,
                    Discount = p.Product.Discount
                }));
            }

            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddCartProduct([FromBody] int id)
        {
            try
            {
                var userId = await _userService.GetUserId(User);
                var prod = await UnitOfWork.ProductManager.GetByIdAsync(id);

                if (prod == null)
                {
                    return BadRequest();
                }

                var cartProduct = new CartProduct
                {
                    UserId = userId,
                    ProductId = id,
                    Quantity = 1
                };

                await UnitOfWork.CartProductManager.AddAsync(cartProduct);

                return Ok();
            }

            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("edit")]
        public async Task<IActionResult> EditCartProduct(CartProductModel product)
        {
            var userId = await _userService.GetUserId(User);
            bool result;

            CartProduct cartProduct = new CartProduct
            {
                UserId = userId,
                ProductId = product.ProductId,
                Quantity = product.Quantity
            };

            if (ModelState.IsValid)
            {
                try
                {
                    result = await UnitOfWork.CartProductManager.UpdateAsync(cartProduct);

                    if (!result)
                    {
                        return BadRequest();
                    }

                    return Ok();
                }

                catch 
                {
                    return StatusCode((int)HttpStatusCode.InternalServerError);
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("delete")]
        public async Task<IActionResult> DeleteCartProduct([FromBody] CartProductModel product)
        {
            bool result;
            var userId = await _userService.GetUserId(User);
            CartProduct cartProduct = new CartProduct
            {
                UserId = userId,
                ProductId = product.ProductId,
                Quantity = product.Quantity
            };

            try
            {
                result = await UnitOfWork.CartProductManager.RemoveAsync(cartProduct);
                if (!result)
                {
                    return BadRequest();
                }

                return Ok();
            }

            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
