using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryStore.Store.DbManagers
{
    public class CartProductManager : DbManager<CartProduct>
    {
        public CartProductManager(DbContext ctx) : base(ctx)
        {
        }

        public async Task<IEnumerable<CartProduct>> GetCartProductsByUserIdAsync(string id)
        {
            return await Set.Include(p => p.Product).Where(c => c.UserId == id).ToListAsync();
        }
    }
}
