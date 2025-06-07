import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServicesagendarService } from '../../services/servicesagendar.service';
import { Cita } from './models/postCitas';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  mostrarDetalleCita: boolean = false;
  citaAgendada: any = null;

  ngOnInit() {

     this.formCita = this.fb.group({
        tipoDocumento: [null, Validators.required],
        documento: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        nombreMascota: ['', Validators.required],
        edad: [null, [Validators.required, Validators.min(0)]],
        telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        correo: ['', [Validators.required, Validators.email]],
        fecha: [null, Validators.required],
        especie: ['', Validators.required],
        raza: ['', Validators.required],
        servicio: [null, Validators.required],
      });
  }

  formCita: FormGroup;

  tiposDocumento = [
    { label: 'Cédula de ciudadanía', value: 'CC' },
    { label: 'Cédula de extranjería', value: 'CE' },
    { label: 'Tarjeta de identidad', value: 'TI' },
  ];

  horasDisponibles = [
    { label: '08:00 Am', value: 'CC' },
    { label: '10:00 Am', value: 'CE' },
    { label: '12:00 PM', value: 'TI' },
  ]

  servicios = [
    { label: 'Vacunación', value: 'vacunacion' },
    { label: 'Consulta general', value: 'consulta' },
    { label: 'Desparasitación', value: 'desparasitacion' },
    { label: 'Urgencias', value: 'urgencias' },
  ];

  constructor(private fb: FormBuilder, private router: Router,
              private agendarService: ServicesagendarService
  ) {
       this.ngOnInit();

  }

  volver(){
    this.router.navigate(['/'])
  }

 // ✅ Agrega este método
    onSubmit(): void {
    if (this.formCita.invalid) {
      this.formCita.markAllAsTouched();
      return;
    }

    const cita = this.formCita.value;
    console.log('Datos a enviar:', cita);

    this.agendarService.agendarCita(cita).subscribe({
      next: (res) => {
        console.log('Cita agendada con éxito', res);
        this.citaAgendada = res;
         this.mostrarDetalleCita = true;
        // this.router.navigate(['/']); // Redirige a donde quieras después de agendar
      },
      error: (err) => {
        console.error('Error al agendar la cita:', err);
      }
    });
  }

  reiniciarFormulario() {
  this.formCita.reset();
  this.mostrarDetalleCita = false;
  this.citaAgendada = null;
}



  

}
