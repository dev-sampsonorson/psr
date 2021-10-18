using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PSR.Infrastructure.Migrations
{
    public partial class AddNewPropertiesToRefreshTokenModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReasonRevoked",
                schema: "dbo",
                table: "RefreshToken",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RevokedDate",
                schema: "dbo",
                table: "RefreshToken",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReasonRevoked",
                schema: "dbo",
                table: "RefreshToken");

            migrationBuilder.DropColumn(
                name: "RevokedDate",
                schema: "dbo",
                table: "RefreshToken");
        }
    }
}
