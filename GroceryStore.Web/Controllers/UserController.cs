using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Web.ApiModels;
using GroceryStore.Web.Services;
using Microsoft.AspNetCore.Authorization;
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
            var result = await _userService.RegisterAsync(model);
            return StatusCode(result.StatusCode, result.Data);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(TokenRequestModel model)
        {
            var result = await _userService.LoginAsync(model);
            return StatusCode(result.StatusCode, result.Data);
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            try
            {
                var u = await _userService.GetUser(User);

                return Ok(u);
            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}