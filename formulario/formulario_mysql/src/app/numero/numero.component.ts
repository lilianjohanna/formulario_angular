import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-numero',
  standalone: true,
  imports: [NgIf, Component],
  templateUrl: './numero.component.html',
  styleUrl: './numero.component.css'
})
export class NumeroComponent {

}
