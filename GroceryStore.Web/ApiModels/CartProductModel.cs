using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.Web.ApiModels
{
    public class CartProductModel
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }
        public decimal Discount { get; set; }
        public decimal Price { get; set; }
    }
}
