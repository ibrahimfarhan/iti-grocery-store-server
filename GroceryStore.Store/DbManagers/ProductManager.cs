using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.Store.DbManagers
{
    public class ProductManager : DbManager<Product>
    {
        public ProductManager(DbContext ctx) : base(ctx)
        {
        }

        public async Task<IEnumerable<Product>> GetByCategoryNameAsync(string categoryName)
        {

            return await Set.Where(p => p.Category.Name == categoryName).ToListAsync();
        }
    }
}
