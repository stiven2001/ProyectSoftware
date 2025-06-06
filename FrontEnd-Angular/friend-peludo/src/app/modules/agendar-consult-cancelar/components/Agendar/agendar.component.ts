import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  ngOnInit() {
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

  constructor(private fb: FormBuilder, private router: Router) {
   this.formCita = this.fb.group({
  tipoDocumento: [null, Validators.required],
  documento: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
  nombres: ['', Validators.required],
  nombreMascota: ['', Validators.required],
  edadMascota: [null, [Validators.required, Validators.min(0)]],
  telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  correo: ['', [Validators.required, Validators.email]],
  fecha: [null, Validators.required],
  hora: [null, Validators.required],
  servicio: [null, Validators.required],

    });
  }

  volver(){
    this.router.navigate(['/'])
  }
  

}
