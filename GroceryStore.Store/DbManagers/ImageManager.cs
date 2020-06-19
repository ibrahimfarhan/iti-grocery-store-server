using GroceryStore.DbLayer.Entities;
using ITI.DbManager;
using Microsoft.EntityFrameworkCore;
using System;

namespace GroceryStore.Store.DbManagers
{
    public class ImageManager : DbManager<Image>
    {
        public ImageManager(DbContext ctx) : base(ctx)
        {
        }
    }
}
