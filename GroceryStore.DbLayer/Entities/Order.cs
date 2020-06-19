using GroceryStore.DbLayer.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GroceryStore.DbLayer.Entities
{
    [Table("Order")]
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public OrderStatus Status { get; set; }

        [Required]
        public decimal TotalPrice { get; set; }

        [StringLength(255, ErrorMessage = "Address cannot exceed 255 characters.")]
        public string Address { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }
    }
}
