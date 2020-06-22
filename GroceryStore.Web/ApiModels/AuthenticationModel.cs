using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.ApiModels
{
    public class AuthenticationModel : User
    {
        public List<string> Roles { get; set; }
        public string Token { get; set; }
    }
}
