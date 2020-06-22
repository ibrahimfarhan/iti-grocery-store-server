using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GroceryStore.DbLayer.Entities
{
    [Table("CartProduct")]
    public class CartProduct
    {
        [ForeignKey("Product")]
        public int ProductId { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public decimal Quantity { get; set; }

        [Required]
        public decimal Quantity { get; set; }

        public Product Product { get; set; }
        public ApplicationUser User { get; set; }
    }
}
