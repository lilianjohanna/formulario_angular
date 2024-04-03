import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from './app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, HttpClient],
})
export class AppComponent {
  title = 'formulario_mysql';
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
    });
  }

  onSubmit() {
    const usuario = {
      campo1: this.usuarioForm.value.campo1,
      campo2: this.usuarioForm.value.campo2,
      campo3: this.usuarioForm.value.campo3,
    };

    this.usuarioService.guardarUsuario(usuario).subscribe((respuesta) => {
      if (respuesta) {
        alert('Bien');
        this.usuarioForm.reset(); // Limpiar el formulario
      } else {
        alert('Error');
      }
    });
  }
}
