import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TextoComponent,NumeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgModule,
    NgIf,
    FormGroup,
    BrowserModule
  ]
})
export class AppModule { }
