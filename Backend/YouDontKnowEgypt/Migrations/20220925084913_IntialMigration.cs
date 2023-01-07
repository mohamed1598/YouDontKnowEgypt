using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace YouDontKnowEgypt.Migrations
{
    public partial class IntialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Governorate",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    description = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Governorate", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    isAdmin = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Hotels",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    governorate_id = table.Column<int>(type: "int", nullable: true),
                    name = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    description = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels", x => x.id);
                    table.ForeignKey(
                        name: "FK__Hotels__governor__21B6055D",
                        column: x => x.governorate_id,
                        principalTable: "Governorate",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    user_id = table.Column<int>(type: "int", nullable: true),
                    Locatoin_id = table.Column<int>(type: "int", nullable: true),
                    comment = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.id);
                    table.ForeignKey(
                        name: "FK_Comments_Users",
                        column: x => x.user_id,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Location",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    description = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    create_date = table.Column<DateTime>(type: "date", nullable: true),
                    update_date = table.Column<DateTime>(type: "date", nullable: true),
                    approved = table.Column<bool>(type: "bit", nullable: true),
                    user_id = table.Column<int>(type: "int", nullable: true),
                    category_id = table.Column<int>(type: "int", nullable: true),
                    governorate_id = table.Column<int>(type: "int", nullable: true),
                    count = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.id);
                    table.ForeignKey(
                        name: "FK__Location__catego__1BFD2C07",
                        column: x => x.category_id,
                        principalTable: "Category",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK__Location__govern__1CF15040",
                        column: x => x.governorate_id,
                        principalTable: "Governorate",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK__Location__user_i__1DE57479",
                        column: x => x.user_id,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "Hotels_image",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    hotel_id = table.Column<int>(type: "int", nullable: true),
                    image_path = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotels_image", x => x.id);
                    table.ForeignKey(
                        name: "FK__Hotels_im__hotel__24927208",
                        column: x => x.hotel_id,
                        principalTable: "Hotels",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "Location_image",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    location_id = table.Column<int>(type: "int", nullable: true),
                    image_path = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location_image", x => x.id);
                    table.ForeignKey(
                        name: "FK__Location___locat__398D8EEE",
                        column: x => x.location_id,
                        principalTable: "Location",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comments_user_id",
                table: "Comments",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_Hotels_governorate_id",
                table: "Hotels",
                column: "governorate_id");

            migrationBuilder.CreateIndex(
                name: "IX_Hotels_image_hotel_id",
                table: "Hotels_image",
                column: "hotel_id");

            migrationBuilder.CreateIndex(
                name: "IX_Location_category_id",
                table: "Location",
                column: "category_id");

            migrationBuilder.CreateIndex(
                name: "IX_Location_governorate_id",
                table: "Location",
                column: "governorate_id");

            migrationBuilder.CreateIndex(
                name: "IX_Location_user_id",
                table: "Location",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_Location_image_location_id",
                table: "Location_image",
                column: "location_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Hotels_image");

            migrationBuilder.DropTable(
                name: "Location_image");

            migrationBuilder.DropTable(
                name: "Hotels");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "Governorate");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
