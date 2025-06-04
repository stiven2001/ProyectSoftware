import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendarConsultCancelarComponent } from './agendar-consult-cancelar.component';
import { AgendarComponent } from './components/Agendar/agendar.component';
import { CancelarComponent } from './components/cancelar/cancelar.component';
import { ConsultarComponent } from './components/consultar/consultar.component';


const routes: Routes = [
  {
    path: '',
    component: AgendarConsultCancelarComponent,
    children: [
      {
        path: 'cita',
        component: AgendarComponent
      },
      {
        path: 'cancelar',
        component: CancelarComponent
      },
      {
        path: 'consultar',
        component: ConsultarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendarConsultCancelarRoutingModule { }
