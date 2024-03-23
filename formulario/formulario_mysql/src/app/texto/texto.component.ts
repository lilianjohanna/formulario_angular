import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {
  formulario!: FormGroup;
}
