using Microsoft.EntityFrameworkCore.Migrations;

namespace PSR.Infrastructure.Migrations
{
    public partial class npm_config_name : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RefreshTokenTTL",
                schema: "dbo",
                table: "RefreshToken",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RefreshTokenTTL",
                schema: "dbo",
                table: "RefreshToken");
        }
    }
}
