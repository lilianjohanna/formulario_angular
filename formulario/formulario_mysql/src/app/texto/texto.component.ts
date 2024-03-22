import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [NgModule,NgIf,FormGroup],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {

}
