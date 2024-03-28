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
  texto!: string;
  numero!: number;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      texto: new FormControl('',Validators.required),
      numero: new FormControl('',Validators.required),
    });    
  }
  enviarFormulario(): void {
    if(this.texto=='' || this.numero==0) {
      alert(this.formulario.valid);
      //console.log('Formulario enviado:', this.formulario.value);
    } else {
      alert(this.formulario.valid);
      //console.log('Formulario no válido');
    }
  }
  title = 'formulario_mysql';
}
