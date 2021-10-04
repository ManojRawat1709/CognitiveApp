using GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence.Entities.Dao;
using Microsoft.EntityFrameworkCore;

namespace GBC.Int.Lib.Core.Disability.CognitiveManager.Persistence
{
    public class CognitiveContext : DbContext
    {
        public CognitiveContext(DbContextOptions<CognitiveContext> options) : base(options)
        { }

        public virtual DbSet<CognitiveDatastoreEntity> CognitiveDatastoreT { get; set; }
        public virtual DbSet<CognitiveFieldsEntity> CognitiveFieldsT { get; set; }
        public virtual DbSet<CognitivePlatformEntity> CognitivePlatformT { get; set; }
        public virtual DbSet<CognitiveEntity> CognitiveT { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:DefaultSchema", "ML\\User_Disability_Solar_Dev");
            modelBuilder.Entity<CognitiveDatastoreEntity>(entity =>
            {
                entity.HasKey(e => e.DatastoreId)
                    .HasName("PK__Cognitiv__5B7BF61948242FB0");

                entity.ToTable("Cognitive_Datastore_t", "dbo");

                entity.HasIndex(e => e.MethodName)
                    .HasName("UQ__Cognitiv__218CFB17DF9E7954")
                    .IsUnique();

                entity.Property(e => e.CognitiveServiceId)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.CreatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.DatabaseName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.LastUpdatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.MethodName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ServerName)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.CognitiveService)
                    .WithMany(p => p.CognitiveDatastoreT)
                    .HasForeignKey(d => d.CognitiveServiceId)
                    .HasConstraintName("FK__Cognitive__Cogni__66B53B20");
            });

            modelBuilder.Entity<CognitiveFieldsEntity>(entity =>
            {
                entity.HasKey(e => e.FieldId)
                    .HasName("PK__Cognitiv__C8B6FF079371A599");

                entity.ToTable("Cognitive_Fields_t", "dbo");

                entity.Property(e => e.CreatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.CreatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Direction)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.FieldAssociationId)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FieldName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.LastUpdatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CognitivePlatformEntity>(entity =>
            {
                entity.HasKey(e => e.PlatformId)
                    .HasName("PK__Cognitiv__F559F6FAD3A514E6");

                entity.ToTable("Cognitive_Platform_t", "dbo");

                entity.Property(e => e.CreatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.CreatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.PlatformName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CognitiveEntity>(entity =>
            {
                entity.HasKey(e => e.CognitiveServiceId)
                    .HasName("PK__Cognitiv__A14FDA0BAE8A9127");

                entity.ToTable("Cognitive_t", "dbo");

                entity.Property(e => e.CognitiveServiceId)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ContentType)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.CreatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.LastUpdatedTimeStamp).HasColumnType("datetime");

                entity.Property(e => e.LastUpdatedUserId)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.Platform)
                    .WithMany(p => p.CognitiveT)
                    .HasForeignKey(d => d.PlatformId)
                    .HasConstraintName("FK__Cognitive__Platf__53A266AC");
            });
        }
    }
}
