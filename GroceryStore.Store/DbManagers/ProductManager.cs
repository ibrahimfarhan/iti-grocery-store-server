using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class ProductManager : DbManager<Product>
    {
        public ProductManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
