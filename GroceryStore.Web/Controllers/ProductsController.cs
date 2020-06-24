using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Store;
using GroceryStore.Web.ApiModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.EntityFrameworkCore;

namespace GroceryStore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public UnitOfWork UnitOfWork;
        public ProductsController(UnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                var products = await UnitOfWork.ProductManager.GetAllBindAsync();

                if (products == null)
                {
                    return Ok();
                }

                return Ok(products.Select(p => new ProductModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    Price = p.Price,
                    Discount = p.Discount,
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category.Name,
                    ImgUrl = p.Images.Select(i => i.Url).ToList()
                }));
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetProductById(int? id)
        {
            if (id == null) return BadRequest();
            try
            {
                var product = await UnitOfWork.ProductManager.GetByIdAsync(id);
                if(product == null)
                {
                    return Ok();
                }
                ProductModel returnedProduct= new ProductModel
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                    Discount = product.Discount,
                    CategoryId = product.CategoryId,
                    CategoryName = product.Category.Name,
                    ImgUrl = product.Images.Select(i => i.Url).ToList()
                };
                return Ok(returnedProduct);
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        [Route("{categoryName}")]
        public async Task<IActionResult> GetProductsByCategoryName(string categoryName)
        {
            if (categoryName == null) return BadRequest();
            try
            {
                var products = await UnitOfWork.ProductManager.GetByCategoryNameAsync(categoryName);
                if (products == null)
                {
                    return Ok();
                }

                return Ok(products.Select(p => new ProductModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    Price = p.Price,
                    Discount = p.Discount,
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category.Name,
                    ImgUrl = p.Images.Select(i => i.Url).ToList()
                }));
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("add")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddProduct([FromBody]ProductModel product)
        {
            var images = product.ImgUrl.Select(i => new Image { Url = i }).ToList();
            Product newProduct = new Product
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Discount = product.Discount,
                CategoryId = product.CategoryId,
                Images = images
            };

            if (ModelState.IsValid)
            {
                try
                {
                    var addedProduct = await UnitOfWork.ProductManager.AddAsync(newProduct);
                    if (addedProduct == null)
                    {
                        return BadRequest();
                    }

                    return Ok(addedProduct);
                }
                catch (Exception)
                {
                    return StatusCode((int)HttpStatusCode.InternalServerError);
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("edit")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> EditProduct([FromBody]ProductModel product)
        {
            bool result;
            var images = product.ImgUrl.Select(i => new Image { Url = i }).ToList();
            Product editedProduct = new Product
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Discount = product.Discount,
                CategoryId = product.CategoryId,
                Images = images
            };

            if (ModelState.IsValid)
            {
                try
                {
                    result = await UnitOfWork.ProductManager.UpdateAsync(editedProduct);
                    if (!result)
                    {
                        return BadRequest();
                    }

                    return Ok();
                }
                catch (Exception)
                {
                    return StatusCode((int)HttpStatusCode.InternalServerError);
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("delete")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeleteProduct(ProductModel product)
        {
            bool result;
            var images = product.ImgUrl.Select(i => new Image { Url = i }).ToList();
            Product deletedProduct = new Product
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Discount = product.Discount,
                CategoryId = product.CategoryId,
                Images = images
            };

            try
            {
                result = await UnitOfWork.ProductManager.RemoveAsync(deletedProduct);
                if (!result)
                {
                    return BadRequest();
                }
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
