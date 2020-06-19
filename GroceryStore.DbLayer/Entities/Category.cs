using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GroceryStore.DbLayer.Entities
{
    [Table("Category")]
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 1, ErrorMessage = "Category name can be 1 to 20 characters")]
        public string Name { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
