using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class CartProductManager : DbManager<CartProduct>
    {
        public CartProductManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
