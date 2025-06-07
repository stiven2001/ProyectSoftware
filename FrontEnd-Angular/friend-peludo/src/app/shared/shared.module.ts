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
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';


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
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule
    
    
  ],
  exports: [
    FormsModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule
    ]
})
export class SharedModule { }
