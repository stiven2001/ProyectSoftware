import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

/* Compartimientos de librerias */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule
    
  ],
  exports: [
    FormsModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
