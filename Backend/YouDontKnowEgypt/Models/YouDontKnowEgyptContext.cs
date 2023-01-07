using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace YouDontKnowEgypt.Models
{
    public partial class YouDontKnowEgyptContext : DbContext
    {
        public YouDontKnowEgyptContext()
        {
        }

        public YouDontKnowEgyptContext(DbContextOptions<YouDontKnowEgyptContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Governorate> Governorates { get; set; }
        public virtual DbSet<Hotel> Hotels { get; set; }
        public virtual DbSet<HotelsImage> HotelsImages { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<LocationImage> LocationImages { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-BPA20V3\\SQLEXPRESS;Database=YouDontKnowEgypt;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Arabic_CI_AS");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Comment1).HasColumnName("comment");

                entity.Property(e => e.LocatoinId).HasColumnName("Locatoin_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Comments_Users");
            });

            modelBuilder.Entity<Governorate>(entity =>
            {
                entity.ToTable("Governorate");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.GovernorateId).HasColumnName("governorate_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.HasOne(d => d.Governorate)
                    .WithMany(p => p.Hotels)
                    .HasForeignKey(d => d.GovernorateId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Hotels__governor__21B6055D");
            });

            modelBuilder.Entity<HotelsImage>(entity =>
            {
                entity.ToTable("Hotels_image");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.HotelId).HasColumnName("hotel_id");

                entity.Property(e => e.ImagePath)
                    .IsUnicode(false)
                    .HasColumnName("image_path");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.HotelsImages)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Hotels_im__hotel__24927208");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("Location");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Approved).HasColumnName("approved");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.Count).HasColumnName("count");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("date")
                    .HasColumnName("create_date");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.GovernorateId).HasColumnName("governorate_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("date")
                    .HasColumnName("update_date");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Locations)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Location__catego__1BFD2C07");

                entity.HasOne(d => d.Governorate)
                    .WithMany(p => p.Locations)
                    .HasForeignKey(d => d.GovernorateId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Location__govern__1CF15040");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Locations)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK__Location__user_i__1DE57479");
            });

            modelBuilder.Entity<LocationImage>(entity =>
            {
                entity.ToTable("Location_image");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ImagePath)
                    .IsUnicode(false)
                    .HasColumnName("image_path");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.LocationImages)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Location___locat__398D8EEE");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IsAdmin).HasColumnName("isAdmin");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
