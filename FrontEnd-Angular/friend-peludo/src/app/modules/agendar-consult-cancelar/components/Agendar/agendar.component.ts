import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  servicios = [
    { label: 'Vacunación', value: 'vacunacion' },
    { label: 'Consulta general', value: 'consulta' },
    { label: 'Desparasitación', value: 'desparasitacion' },
    { label: 'Urgencias', value: 'urgencias' },
  ];

  constructor(private fb: FormBuilder) {
    this.formCita = this.fb.group({
      tipoDocumento: [''],
      documento: [''],
      nombres: [''],
      nombreMascota: [''],
      edadMascota: [''],
      telefono: [''],
      correo: [''],
      fecha: [''],
      hora: [''],
      servicio: ['']
    });
  }

}
