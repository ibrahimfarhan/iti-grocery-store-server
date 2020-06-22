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
            if (alloders != null)
            {
                return Ok(alloders);
            }
            return StatusCode(500, "server error add");
           
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("{id:int}")]
        public async Task< IActionResult> OredId(int id)
        {
            
            var orderbyid =await unitOfWork.OrderManager.GetByIdAsync(id);
            if (orderbyid != null)
            {
                return Ok(orderbyid);
            }
            return StatusCode(500, "server error get order ");

        }
        [HttpGet]
        public IActionResult orders()
        { 
            //get all orders of current user
           var id= User.FindFirstValue(ClaimTypes.NameIdentifier);
            var orders = unitOfWork.OrderManager.GetAll().Where(i => i.UserId == id);
            if (orders != null)
            {
                return Ok(orders);
            }
            return StatusCode(500, "server error get orders ");
           

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
            var removeorder = await unitOfWork.OrderManager.RemoveAsync(order);
            if (removeorder)
            {
                return Ok();
            }
            return StatusCode(500, "server error Delete");
            
           
        }

    }
}
