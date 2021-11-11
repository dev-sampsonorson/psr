using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PSR.Infrastructure.Migrations
{
    public partial class AddConfigurationForSkillCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skill_SkillCategory_CategoryId",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropForeignKey(
                name: "FK_Skill_SkillSubCategory_SubCategoryId",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropForeignKey(
                name: "FK_SkillSubCategory_SkillCategory_CategoryId",
                table: "SkillSubCategory");

            migrationBuilder.RenameTable(
                name: "SkillSubCategory",
                newName: "SkillSubCategory",
                newSchema: "dbo");

            migrationBuilder.RenameTable(
                name: "SkillCategory",
                newName: "SkillCategory",
                newSchema: "dbo");

            migrationBuilder.AlterColumn<Guid>(
                name: "CategoryId",
                schema: "dbo",
                table: "SkillSubCategory",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                schema: "dbo",
                table: "SkillSubCategory",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                schema: "dbo",
                table: "SkillCategory",
                type: "rowversion",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Skill_SkillCategory_CategoryId",
                schema: "dbo",
                table: "Skill",
                column: "CategoryId",
                principalSchema: "dbo",
                principalTable: "SkillCategory",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Skill_SkillSubCategory_SubCategoryId",
                schema: "dbo",
                table: "Skill",
                column: "SubCategoryId",
                principalSchema: "dbo",
                principalTable: "SkillSubCategory",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SkillSubCategory_SkillCategory_CategoryId",
                schema: "dbo",
                table: "SkillSubCategory",
                column: "CategoryId",
                principalSchema: "dbo",
                principalTable: "SkillCategory",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skill_SkillCategory_CategoryId",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropForeignKey(
                name: "FK_Skill_SkillSubCategory_SubCategoryId",
                schema: "dbo",
                table: "Skill");

            migrationBuilder.DropForeignKey(
                name: "FK_SkillSubCategory_SkillCategory_CategoryId",
                schema: "dbo",
                table: "SkillSubCategory");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                schema: "dbo",
                table: "SkillSubCategory");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                schema: "dbo",
                table: "SkillCategory");

            migrationBuilder.RenameTable(
                name: "SkillSubCategory",
                schema: "dbo",
                newName: "SkillSubCategory");

            migrationBuilder.RenameTable(
                name: "SkillCategory",
                schema: "dbo",
                newName: "SkillCategory");

            migrationBuilder.AlterColumn<Guid>(
                name: "CategoryId",
                table: "SkillSubCategory",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Skill_SkillCategory_CategoryId",
                schema: "dbo",
                table: "Skill",
                column: "CategoryId",
                principalTable: "SkillCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Skill_SkillSubCategory_SubCategoryId",
                schema: "dbo",
                table: "Skill",
                column: "SubCategoryId",
                principalTable: "SkillSubCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SkillSubCategory_SkillCategory_CategoryId",
                table: "SkillSubCategory",
                column: "CategoryId",
                principalTable: "SkillCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
