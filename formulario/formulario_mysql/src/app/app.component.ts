import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumeroComponent } from './numero/numero.component';
import { TextoComponent } from './texto/texto.component';
import { BotonComponent } from './boton/boton.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NumeroComponent,TextoComponent,BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  formulario!: FormGroup;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      texto: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
