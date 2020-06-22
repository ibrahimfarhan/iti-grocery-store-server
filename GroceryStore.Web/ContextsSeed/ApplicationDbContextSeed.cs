using GroceryStore.DbLayer.Entities;
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
            RoleManager<IdentityRole> roleManager
            )
        {
            // Seed Roles
            await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.Admin.ToString()));

            await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.User.ToString()));

            // Seed Default User
            var defaultUser = new ApplicationUser
            {
                UserName = Authorization.default_userName,
                Email = Authorization.default_email,
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };

            if (userManager.Users.All( u => u.Id != defaultUser.Id))
            {
                await userManager.CreateAsync(defaultUser, Authorization.default_password);
                await userManager.AddToRoleAsync(defaultUser, Authorization.default_role.ToString());
            }
        }
    }
}
