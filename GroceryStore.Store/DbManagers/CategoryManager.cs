using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class CategoryManager : DbManager<Category>
    {
        public CategoryManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
