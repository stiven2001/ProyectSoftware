import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

   formCita: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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

}
