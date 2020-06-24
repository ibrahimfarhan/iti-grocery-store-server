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

        public new async Task<IEnumerable<Product>> GetAllBindAsync()
        {
            return await Set.Include(p => p.Category).Include(p => p.Images).ToListAsync();
        }

        public new async Task<Product> GetByIdAsync(params object[] id)
        {
            return await Set.Include(p => p.Category).Where(p => p.Id == Convert.ToInt32(id)).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Product>> GetByCategoryNameAsync(string categoryName)
        {
            return await Set.Include(p => p.Category).Where(p => p.Category.Name == categoryName).ToListAsync();
        }
    }
}
