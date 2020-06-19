using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class OrderManager : DbManager<Order>
    {
        public OrderManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
