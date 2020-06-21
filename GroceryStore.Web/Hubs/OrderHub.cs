using GroceryStore.DbLayer.Entities;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.Web.Hubs
{
    public class OrderHub : Hub
    {
        public Task AddOrderToAdminPanel(Order order)
        {
            return Clients.All.SendAsync("OrderReceived", order);
        }
    }
}
