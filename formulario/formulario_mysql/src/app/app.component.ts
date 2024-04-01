import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { BotonComponent } from './boton/boton.component';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TextoComponent,
    NumeroComponent,
    BotonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formulario!: FormGroup;
  texto: any;
  numero: any;
  resultado!: string;
  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }
  crearFormulario() {
    this.formulario = this.formBuilder.group({
      texto: [Validators.required, Validators.nullValidator],
      numero: [Validators.required, Validators.nullValidator],
    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      // Si el formulario es válido, realiza alguna acción
      //this.resultado = 'Formulario válido. Enviando datos...';
      this.resultado = this.formulario.value;
    } else {
      // Si el formulario no es válido, muestra un mensaje de error o realiza alguna acción
      this.resultado = 'Error...';
    }
  }
  title = 'formulario_mysql';
}
