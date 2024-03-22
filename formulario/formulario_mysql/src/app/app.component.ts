import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { BotonComponent } from './boton/boton.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextoComponent,NumeroComponent,BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  formulario!: FormGroup;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      TextoComponent: new FormControl('', [Validators.required]),
      NumeroComponent: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  title = 'formulario_mysql';
}
