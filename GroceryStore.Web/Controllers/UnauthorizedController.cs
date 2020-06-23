using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnauthorizedController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return StatusCode((int)HttpStatusCode.Unauthorized);
        }
    }
}