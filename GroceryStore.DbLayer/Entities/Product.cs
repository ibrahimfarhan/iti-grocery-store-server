using GroceryStore.DbLayer.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GroceryStore.DbLayer.Entities
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 1, ErrorMessage = "Product name can be 1 to 20 characters")]
        public string Name { get; set; }

        [StringLength(8000, ErrorMessage = "Product description cannot exceed 8000 characters")]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalQuantity { get; set; }
        public MeasurementUnit MeasurementUnit { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public Category Category { get; set; }
        public IEnumerable<OrderItem> OrderItems{ get; set; }
        public IEnumerable<Image> Images { get; set; }
        public IEnumerable<CartProduct> CartProducts { get; set; }
    }
}
