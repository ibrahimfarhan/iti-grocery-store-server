using GroceryStore.DbLayer.Entities;
using GroceryStore.Store;
using GroceryStore.Web.Constants;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.ContextsSeed
{
    // The seed Class to add the default data
    public class ApplicationDbContextSeed
    {
        public static async Task SeedEssentialsAsync(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            UnitOfWork unitOfWork
            )
        {
            // Seed Roles
            if (roleManager.Roles == null)
            {
                await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.Admin.ToString()));

                await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.User.ToString()));

            }


            // Seed Default User
            var defaultUser = new ApplicationUser
            {
                UserName = Authorization.default_userName,
                Email = Authorization.default_email,
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };

            // Seed Default Products

            var products = new List<Product>()
            {
                new Product { Name= "Apples", Description= "Lorem ipsum dolor sit amet", Price = 200, CategoryId = 1 },
                new Product { Name= "Bananas", Description= "Lorem ipsum dolor sit amet", Price = 100, CategoryId = 1 },
                new Product { Name= "Orange", Description= "Lorem ipsum dolor sit amet", Price = 50, CategoryId = 1 },
                new Product { Name= "Chicken", Description= "Lorem ipsum dolor sit amet", Price = 500, CategoryId = 2 },
                new Product { Name= "Bacon", Description= "Lorem ipsum dolor sit amet", Price = 400, CategoryId = 2 },
                new Product { Name= "Ham", Description= "Lorem ipsum dolor sit amet", Price = 500, CategoryId = 2 },
            };
            var categories = new List<Category>()
            {
                new Category { Name = "Fruits"},
                new Category { Name = "Meats"},
            };

            if (userManager.Users == null || userManager.Users.Count() == 0)
            {
                await userManager.CreateAsync(defaultUser, Authorization.default_password);
                await userManager.AddToRoleAsync(defaultUser, Authorization.default_role.ToString());

            }

            if (unitOfWork.ProductManager.GetAllBind() == null || unitOfWork.ProductManager.GetAllBind().Count() == 0)
            {
                foreach (var Product in products)
                {
                    await unitOfWork.ProductManager.AddAsync(Product);
                }
            }
            if (unitOfWork.CategoryManager.GetAllBind() == null || unitOfWork.CategoryManager.GetAllBind().Count() == 0)
            {
                foreach (var Category in categories)
                {
                    await unitOfWork.CategoryManager.AddAsync(Category);
                }
            }
        }
    }
}
