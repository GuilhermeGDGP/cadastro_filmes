import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextAreaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextAreaComponent
  ]
})
export class CamposModule { }
