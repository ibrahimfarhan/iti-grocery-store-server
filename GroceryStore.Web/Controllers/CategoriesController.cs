using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Store;
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

                return Ok(categories.Select(c => new { c.Id, c.Name }));
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("add")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> AddCategory([FromBody] Category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var cat = await UnitOfWork.CategoryManager.AddAsync(category);
                    if (cat == null)
                    {
                        return NotFound();
                    }
                    return Ok(cat);
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
        public async Task<IActionResult> EditCategory([FromBody] Category category)
        {

            bool result;
            if (ModelState.IsValid)
            {
                try
                {
                    result = await UnitOfWork.CategoryManager.UpdateAsync(category);
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
        public async Task<IActionResult> DeleteCategory(Category category)
        {
            bool result;
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
                return BadRequest();
            }
        }


    }
}
