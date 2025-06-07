import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesagendarService } from '../../services/servicesagendar.service';
import { Cita } from '../consultar/models/responseConsult';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {

  formCita: FormGroup;
  citas: Cita[] = [];
  mensaje: string = '';
   mostrarDetalleCita: boolean = false;

   mostrarPopup: boolean = false;
  mensajePopup: string = '';

  
    constructor(private fb: FormBuilder, private router: Router, private agendarService: ServicesagendarService, private messageService: MessageService) {
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
      const tipoDocumento = this.formCita.get('tipoDocumento').value;
      const documento = this.formCita.get('documento').value;

      if (!tipoDocumento || !documento) {
        this.mensaje = 'Debe ingresar tipo y número de documento.';
        this.citas = [];
        return;
      }

      this.agendarService.ConsultaCancelarCita(tipoDocumento, documento)
        .subscribe({
          next: (data) => {
            this.citas = data;
             this.mostrarDetalleCita = true;
            this.mensaje = data.length === 0 ? 'No se encontraron citas.' : '';
          },
           error: (err) => {
            this.mensajePopup = 'No se encontraron citas para ese documento..';
            this.mostrarPopup = true;
          }
        });
}


cancelarCita(idCita: number): void {
  this.agendarService.CancelarCita(idCita).subscribe({
    next: (resp) => {
      this.citas = this.citas.filter(c => c.idCita !== idCita);

      this.mensajePopup = 'Tu cita fue cancelada exitosamente';
      this.mostrarPopup = true;
    },
    error: () => {
      this.mensajePopup = 'Ocurrió un error al cancelar la cita';
      this.mostrarPopup = true;
    }
  });
}


cerrarPopup(): void {
  this.mostrarPopup = false;
}


}
