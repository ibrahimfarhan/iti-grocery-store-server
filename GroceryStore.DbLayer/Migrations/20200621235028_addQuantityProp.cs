using Microsoft.EntityFrameworkCore.Migrations;

namespace GroceryStore.DbLayer.Migrations
{
    public partial class addQuantityProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Quantity",
                table: "CartProduct",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "CartProduct");
        }
    }
}
