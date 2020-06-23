using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.ApiModels
{
    public class AuthenticationModel : User
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public List<string> Roles { get; set; }
        public string Token { get; set; }
    }
}
