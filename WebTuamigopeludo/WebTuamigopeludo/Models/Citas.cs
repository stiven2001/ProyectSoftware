namespace WebTuamigopeludo.Models
{
    public class Citas
    {
        public int IdCita { get; set; }
        public  required string TipoDocumento { get; set; }
        public required string Documento { get; set; }
        public required string Nombre { get; set; }
        public required string Apellidos { get; set; }
        public required string Telefono { get; set; }
        public required string Correo { get; set; }
        public required string NombreMascota { get; set; }
        public int Edad { get; set; }
        public required string Especie { get; set; }
        public required string Raza { get; set; }
        public required string Servicio { get; set; }
        public required DateTime Fecha { get; set; }
        public  int Estado { get; set; }





    }
}
