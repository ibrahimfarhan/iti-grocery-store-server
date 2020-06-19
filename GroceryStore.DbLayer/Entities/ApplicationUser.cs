using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GroceryStore.DbLayer.Entities
{
    public class ApplicationUser : IdentityUser
    {
        [StringLength(20, MinimumLength = 1, ErrorMessage = "First name can be 1 to 20 characters.")]
        public string FirstName { get; set; }

        [StringLength(20, MinimumLength = 1, ErrorMessage = "Last name can be 1 to 20 characters.")]
        public string LastName { get; set; }

        [StringLength(255, ErrorMessage = "Address cannot exceed 255 characters.")]
        public string Address { get; set; }

        [MaxLength(8000, ErrorMessage = "Image URL cannot exceed 8000 characters.")]
        public string ImgUrl { get; set; }

        public IEnumerable<Order> Orders { get; set; }
        public IEnumerable<CartProduct> CartProducts { get; set; }
    }
}
