using Microsoft.EntityFrameworkCore;
using WebTuamigopeludo.Models;
namespace WebTuamigopeludo.Data
{
    public class AppDBContext:DbContext
    {
        public AppDBContext(DbContextOptions <AppDBContext> options) : base (options)

        {
            
        }
        public DbSet <Cupos> Cupos { get; set; }
        public DbSet<Servicios> Servicios
        { get; set; }
        public DbSet<Citas> Citas
        { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Cupos>(tb =>{
                tb.HasKey(Col => Col.IdCupo);

                tb.Property(Col => Col.IdCupo)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

                tb.Property(Col => Col.Fecha)
              .HasColumnType("datetime")
              .IsRequired();

                tb.Property(Col => Col.Estado)
                .IsRequired();

                tb.Property(Col => Col.IdServicio)
                .IsRequired();

            });

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Citas>(tb => {
                tb.HasKey(Col => Col.IdCita);

                tb.Property(Col => Col.IdCita)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

                tb.Property(Col => Col.TipoDocumento)
                .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Documento)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Nombre)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Apellidos)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Telefono)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Correo)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.NombreMascota)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Edad)
                .IsRequired();

                tb.Property(Col => Col.Especie)
               .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Raza)
               .HasMaxLength(50)
                .IsRequired();
               
                tb.Property(Col => Col.Servicio)
                .IsRequired();

                tb.Property(Col => Col.Fecha)
                .HasColumnType("datetime")
                .IsRequired();

                tb.Property(Col => Col.Estado)
                 .HasDefaultValue(1)
                .IsRequired();




            });

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Servicios>(tb => {
                tb.HasKey(Col => Col.IdServicio);

                tb.Property(Col => Col.IdServicio)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

                tb.Property(Col => Col.Nombre)
                .HasMaxLength(50)
                .IsRequired();

                tb.Property(Col => Col.Descripcion)
               .HasMaxLength(50)
                .IsRequired();
            });




        }








    }
}
