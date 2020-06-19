using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GroceryStore.DbLayer.Entities
{
    [Table("OrderItem")]
    public class OrderItem
    {
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        
        [ForeignKey("Order")]
        public int OrderId { get; set; }

        [Required]
        public decimal Quantity { get; set; }

        [Required]
        public decimal Price { get; set; }

        public Product Product { get; set; }
        public Order Order { get; set; }
    }
}
