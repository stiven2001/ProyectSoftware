import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendarConsultCancelarRoutingModule } from './agendar-consult-cancelar-routing.module';
import { AgendarConsultCancelarComponent } from './agendar-consult-cancelar.component';
import { CancelarComponent } from './components/cancelar/cancelar.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { AgendarComponent } from './components/Agendar/agendar.component';


@NgModule({
  declarations: [AgendarConsultCancelarComponent, AgendarComponent, CancelarComponent, ConsultarComponent],
  imports: [
    CommonModule,
    AgendarConsultCancelarRoutingModule
  ]
})
export class AgendarConsultCancelarModule { }
