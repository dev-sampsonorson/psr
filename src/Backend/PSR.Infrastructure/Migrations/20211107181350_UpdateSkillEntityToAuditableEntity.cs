using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PSR.Infrastructure.Migrations
{
    public partial class UpdateSkillEntityToAuditableEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                schema: "dbo",
                table: "Skill",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "InsertDate",
                schema: "dbo",
                table: "Skill",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "InsertUserId",
                schema: "dbo",
                table: "Skill",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                schema: "dbo",
                table: "Skill",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "UpdateUserId",
                schema: "dbo",
                table: "Skill",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropColumn(
                name: "InsertDate",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropColumn(
                name: "InsertUserId",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropColumn(
                name: "UpdateUserId",
                schema: "dbo",
                table: "Skill");
        }
    }
}
