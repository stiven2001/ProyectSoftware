export interface Cita {
  idCita: number;
  tipoDocumento: string;
  documento: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  correo: string;
  nombreMascota: string;
  edad: number;
  especie: string;
  raza: string;
  servicio: string;
  fecha: string; // O Date si conviertes el string a objeto Date
  estado: number;
}
