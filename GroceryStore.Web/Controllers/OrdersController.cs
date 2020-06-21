using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GroceryStore.DbLayer.Entities;
using GroceryStore.DbLayer.Enums;
using GroceryStore.Store;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GroceryStore.Web.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        public UnitOfWork unitOfWork;
        public OrdersController(UnitOfWork _unitOfWork)
        {
            unitOfWork = _unitOfWork;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public  async Task<IActionResult> AllOrders()
        {
          var alloders = await unitOfWork.OrderManager.GetAllBindAsync();
            return Ok(alloders);
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("{id:int}")]
        public async Task< IActionResult> OredId(int id)
        {
            
            var orderbyid =await unitOfWork.OrderManager.GetByIdAsync(id);
           
           return Ok(orderbyid);
        }
        [HttpGet("id:string")]
        public IActionResult orders()
        {
           var id= User.FindFirstValue(ClaimTypes.NameIdentifier);
           return Ok(unitOfWork.OrderManager.GetAll().Where(i => i.UserId == id));
        }
        [HttpPut]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> EditStatus(int id)
        {
            var editorder = unitOfWork.OrderManager.GetById(id);
            if (editorder.Status == OrderStatus.Submitted)
            {
                editorder.Status = OrderStatus.Delivered;
            }
            else
                editorder.Status = OrderStatus.Submitted;
           return Ok( await unitOfWork.OrderManager.UpdateAsync(editorder));
        }
       
        [HttpPost]
        public async Task<IActionResult> Crate([FromBody] Order order )
        {
            order.User.Id = (new Guid()).ToString();
            var neworder = await unitOfWork.OrderManager.AddAsync(order) ;
            if (neworder !=null)
            {
                return Ok();
            }
            return StatusCode(500, "server error add");
        }
        [HttpDelete]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Deleteorder(int  id)
        {
            Order order = unitOfWork.OrderManager.GetById(id);
           var removeorder=await unitOfWork.OrderManager.RemoveAsync(order);
            return Ok(removeorder);
        }

    }
}
