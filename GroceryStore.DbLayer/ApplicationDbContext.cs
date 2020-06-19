using GroceryStore.DbLayer.Entities;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.DbLayer
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, 
            IOptions<OperationalStoreOptions> operationalStoreOptions) : 
            base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartProduct>().HasKey(c => new { c.ProductId, c.UserId });
            modelBuilder.Entity<OrderItem>().HasKey(o => new { o.ProductId, o.OrderId });

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<CartProduct> CartProducts { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
    }
}
