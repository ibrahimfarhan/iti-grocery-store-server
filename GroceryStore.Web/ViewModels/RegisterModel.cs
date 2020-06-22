﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.ViewModels
{
    public class RegisterModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
      
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        public string Role { get; set; }
        public string PhoneNumber { get; set; }
        public string Address{ get; set; }
    }
}
