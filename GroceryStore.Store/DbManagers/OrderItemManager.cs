using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class OrderItemManager : DbManager<OrderItem>
    {
        public OrderItemManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
