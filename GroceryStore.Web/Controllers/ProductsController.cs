using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Store;
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

                return Ok(products.Select(p => new 
                { 
                    p.Id, p.Name, p.Price, Images = p.Images.Select(i => i.Url),
                    p.MeasurementUnit, p.Discount, CategoryName = p.Category.Name
                }));
            }
            catch (Exception)
            {
                return BadRequest();
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
                    return NotFound();
                }
                return Ok(product);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{categoryName}")]
        public async Task<IActionResult> GetProductByCategoryName(string categoryName)
        {
            if (categoryName == null) return BadRequest();
            try
            {
                var product = await UnitOfWork.ProductManager.GetByCategoryNameAsync(categoryName);
                if(product == null)
                {
                    return NotFound();
                }
                return Ok(product);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("add")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddProduct([FromBody]Product product)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var prod = await UnitOfWork.ProductManager.AddAsync(product);
                    if (prod == null)
                    {
                        return NotFound();
                    }
                    return Ok(prod);
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("edit")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> EditProduct([FromBody]Product product)
        {
            bool result;
            if (ModelState.IsValid)
            {
                try
                {
                    result = await UnitOfWork.ProductManager.UpdateAsync(product);
                    return Ok();
                }
                catch (Exception ex)
                {
                    if (ex.GetType().FullName ==
                             "Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException")
                    {
                        return NotFound();
                    }

                    return BadRequest();
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("delete")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeleteProduct(Product product)
        {
            bool result;
            try
            {
                result = await UnitOfWork.ProductManager.RemoveAsync(product);
                if (!result)
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
