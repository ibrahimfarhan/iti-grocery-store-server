using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.Web.ApiModels
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }
        public object Data { get; set; }
    }
}
