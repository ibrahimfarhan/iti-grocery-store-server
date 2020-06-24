using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Store;
using GroceryStore.Web.ApiModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        public UnitOfWork UnitOfWork;
        public CategoriesController(UnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            try
            {
                var categories = await UnitOfWork.CategoryManager.GetAllBindAsync();

                if (categories == null) return Ok();

                return Ok(categories.Select(c => new CategoryModel { 
                    Id = c.Id,
                    Name = c.Name
                }));
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("add")]
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
        public async Task<IActionResult> AddCategory([FromBody] Category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var cat = await UnitOfWork.CategoryManager.AddAsync(category);
                    if (cat == null) return Ok();

                    var categoryModel = new CategoryModel
                    {
                        Id = cat.Id,
                        Name = cat.Name
                    };

                    return Ok(categoryModel);
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
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
        public async Task<IActionResult> EditCategory([FromBody] CategoryModel categoryModel)
        {

            bool result;
            var category = new Category { 
                Id = categoryModel.Id,
                Name = categoryModel.Name
            };

            if (ModelState.IsValid)
            {
                try
                {
                    result = await UnitOfWork.CategoryManager.UpdateAsync(category);
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
        [Authorize(AuthenticationSchemes = "Bearer", Roles = "Admin")]
        public async Task<IActionResult> DeleteCategory(CategoryModel categoryModel)
        {
            bool result;
            var category = new Category
            {
                Id = categoryModel.Id,
                Name = categoryModel.Name
            };
            try
            {
                result = await UnitOfWork.CategoryManager.RemoveAsync(category);
                if (!result)
                {
                    return NotFound();
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
