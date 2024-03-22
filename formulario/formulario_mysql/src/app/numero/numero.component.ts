import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-numero',
  standalone: true,
  imports: [NgIf,FormGroup],
  templateUrl: './numero.component.html',
  styleUrl: './numero.component.css'
})
export class NumeroComponent {

}
