import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesagendarService } from '../../services/servicesagendar.service';
import { Cita } from './models/responseConsult';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

   formCita: FormGroup;
  citas: Cita[] = [];
  mensaje: string = '';
  mostrarDetalleCita: boolean = false;

   mostrarPopup: boolean = false;
  mensajePopup: string = '';

  constructor(private fb: FormBuilder, private router: Router, private agendarService: ServicesagendarService) {
     this.formCita = this.fb.group({
    tipoDocumento: [null, Validators.required],
    documento: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      });
    }
  

  ngOnInit() {
  }

  tiposDocumento = [
    { label: 'Cédula de ciudadanía', value: 'CC' },
    { label: 'Cédula de extranjería', value: 'CE' },
    { label: 'Tarjeta de identidad', value: 'TI' },
  ];

  volver(){
    this.router.navigate(['/'])
  }
  
    consultar(): void {
  const tipo = this.formCita.get('tipoDocumento').value;
  const documento = this.formCita.get('documento').value;

  if (!tipo || !documento) {
    this.mensajePopup = 'Por favor completa todos los campos.';
    this.mostrarPopup = true;
    return;
  }

  this.agendarService.consultarCita(tipo, documento).subscribe({
    next: (respuesta) => {
      if (respuesta && respuesta.length > 0) {
        this.citas = respuesta;
        this.mostrarDetalleCita = true;
      } else {
        this.mensajePopup = 'No se encontraron citas para ese documento.';
        this.mostrarPopup = true;
      }
    },
    error: (err) => {
      this.mensajePopup = 'No se encontraron citas para ese documento..';
      this.mostrarPopup = true;
    }
  });
}

cerrarPopup(): void {
  this.mostrarPopup = false;
}


}
