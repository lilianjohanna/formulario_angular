import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-numero',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './numero.component.html',
  styleUrl: './numero.component.css'
})
export class NumeroComponent {
  formulario!: FormGroup;
  numero!: number;
}
