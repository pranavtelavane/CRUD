import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module'
import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
