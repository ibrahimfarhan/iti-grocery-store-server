using GroceryStore.DbLayer.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GroceryStore.DbLayer
{
    public class ApplicationDbContext :  IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
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
