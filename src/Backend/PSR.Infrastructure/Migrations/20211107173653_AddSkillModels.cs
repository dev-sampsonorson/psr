using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PSR.Infrastructure.Migrations
{
    public partial class AddSkillModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SkillCategory",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SkillSubCategory",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillSubCategory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SkillSubCategory_SkillCategory_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "SkillCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Skill",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SubCategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skill", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Skill_SkillCategory_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "SkillCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Skill_SkillSubCategory_SubCategoryId",
                        column: x => x.SubCategoryId,
                        principalTable: "SkillSubCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Skill_CategoryId",
                schema: "dbo",
                table: "Skill",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Skill_SubCategoryId",
                schema: "dbo",
                table: "Skill",
                column: "SubCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_SkillSubCategory_CategoryId",
                table: "SkillSubCategory",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Skill",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "SkillSubCategory");

            migrationBuilder.DropTable(
                name: "SkillCategory");
        }
    }
}
