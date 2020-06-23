using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GroceryStore.Web.Constants
{
    public class Authorization
    {
        public enum Roles
        {
            Admin,
            User
        }
        public const string default_userName = "user";
        
        public const string default_email = "user@secureapi.com";

        public const string default_password = "P@ssw0rd";

        public const Roles default_role = Roles.Admin;

    }
}
