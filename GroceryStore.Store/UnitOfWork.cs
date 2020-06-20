using GroceryStore.DbLayer;
using GroceryStore.DbLayer.Entities;
using GroceryStore.Store.DbManagers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GroceryStore.Store
{
    public class UnitOfWork
    {
        public ProductManager ProductManager { get; set; }
        public CategoryManager CategoryManager { get; set; }
        public OrderManager OrderManager { get; set; }
        public ImageManager ImageManager { get; set; }
        public CartProductManager CartProductManager { get; set; }
        public OrderItemManager OrderItemManager { get; set; }

        public UnitOfWork(ApplicationDbContext ctx)
        {
            ProductManager = new ProductManager(ctx);
            CategoryManager = new CategoryManager(ctx);
            OrderManager = new OrderManager(ctx);
            ImageManager = new ImageManager(ctx);
            CartProductManager = new CartProductManager(ctx);
            OrderItemManager = new OrderItemManager(ctx);
        }
    }
}
