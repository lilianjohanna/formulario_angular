import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { BotonComponent } from './boton/boton.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextoComponent,NumeroComponent,BotonComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  formulario!: FormGroup;
  constructor()
  {
    this.formulario = new FormGroup({
      texto: new FormControl('', [Validators.required, Validators.nullValidator]),
      numero: new FormControl('', [Validators.required, Validators.minLength(8), Validators.nullValidator]),
    });
  }
  ngOnInit(): void {    
  }
  enviarFormulario(): void {
    if (this.formulario.valid) {
      alert('Formulario enviado');
      //console.log('Formulario enviado:', this.formulario.value);
    } else {
      alert('Formulario no válido');
      //console.log('Formulario no válido');
    }
  }
  title = 'formulario_mysql';
}
