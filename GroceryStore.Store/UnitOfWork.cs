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
        public SignInManager<ApplicationUser> SignInManager { get; set; }
        public UserManager<ApplicationUser> UserManager { get; set; }
        public ProductManager ProductManager { get; set; }
        public CategoryManager CategoryManager { get; set; }
        public OrderManager OrderManager { get; set; }
        public ImageManager ImageManager { get; set; }
        public CartProductManager CartProductManager { get; set; }
        public OrderItemManager OrderItemManager { get; set; }

        public UnitOfWork(ApplicationDbContext ctx, 
            SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            ProductManager = new ProductManager(ctx);
            CategoryManager = new CategoryManager(ctx);
            OrderManager = new OrderManager(ctx);
            ImageManager = new ImageManager(ctx);
            CartProductManager = new CartProductManager(ctx);
            OrderItemManager = new OrderItemManager(ctx);
        }
    }
}
