import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [NgIf, Component],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {

}
