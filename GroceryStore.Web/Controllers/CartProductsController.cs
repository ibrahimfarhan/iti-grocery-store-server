using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.DbLayer.Helpers;
using GroceryStore.Store;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Authorize]
    [Route("api/cart-products")]
    [ApiController]
    public class CartProductsController : ControllerBase
    {
        public UnitOfWork UnitOfWork;
        public CartProductsController(UnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetCartProducts()
        {
            var userId = this.User.GetUserId();
            try
            {
                var products = await UnitOfWork.CartProductManager.GetCartProducts();
                var filterProductsByUserId = products.Where(p => p.UserId == userId);
                if(filterProductsByUserId == null)
                {
                    return NotFound();
                }
                
                return Ok(filterProductsByUserId);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpPost]
        [Route("add/{id}")]
        public async Task<IActionResult> AddCartProduct(int id)
        {
            bool isAuthenticated = User.Identity.IsAuthenticated;
            if (isAuthenticated)
            {
                try
                {
                    var userId = this.User.GetUserId();
                    var prod = await UnitOfWork.ProductManager.GetByIdAsync(id);
                    if(prod == null)
                    {
                        return NotFound();
                    }
                    var cartProduct = new CartProduct 
                    { 
                        Product = prod ,
                        UserId = userId,
                        ProductId = id
                    };
                    return Ok(await UnitOfWork.CartProductManager.AddAsync(cartProduct));
                }
                catch(Exception)
                {
                    return BadRequest();
                }
            }
            return Unauthorized();
            //return new ForbidResult();
            //return StatusCode((int)System.Net.HttpStatusCode.Unauthorized, "My error message");
            //return StatusCode(401, "My error message");
        }


        [HttpPost]
        [Route("edit")]
        public async Task<IActionResult> EditCartProduct(CartProduct cartproduct)
        {
            var userId = this.User.GetUserId();
            bool result;
            if (ModelState.IsValid)
            {
                try
                {
                    cartproduct.UserId = userId;
                    result = await UnitOfWork.CartProductManager.UpdateAsync(cartproduct);
                    if(!result || userId != cartproduct.UserId)
                    {
                        return NotFound();
                    }
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();

        }

        [HttpPost]
        [Route("delete")]
        public async Task<IActionResult> DeleteCartProduct(CartProduct cartProduct)
        {
            bool result;
            var userId = this.User.GetUserId();
            try
            {
                result = await UnitOfWork.CartProductManager.RemoveAsync(cartProduct);
                if(!result || cartProduct.UserId != userId)
                {
                    return NotFound();
                }
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
