using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace GroceryStore.DbLayer.Enums
{
    public enum OrderStatus
    {
        Submitted = 0,
        Delivered = 1
    }
}
