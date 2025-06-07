export interface Cita {
  idCita?: number; // Opcional porque lo genera el backend
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
  fecha: Date;
}
