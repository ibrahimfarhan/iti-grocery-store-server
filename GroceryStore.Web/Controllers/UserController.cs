using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Web.ApiModels;
using GroceryStore.Web.Services;
using GroceryStore.Web.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> RegisterAsync(RegisterModel model)
        {
            // To do implement error message for the retrieved registeration from the RegisterAsync method.
            // the result should be the registered user object  
            var result = await _userService.RegisterAsync(model);
            
            return StatusCode(result.StatusCode,result.Data);
        }
    }
}