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
      nombre: this.usuarioForm.value.nombre,
      correo: this.usuarioForm.value.correo,
    };

    this.usuarioService.guardarUsuario(usuario).subscribe((respuesta) => {
      if (respuesta.mensaje) {
        alert(respuesta.mensaje);
        this.usuarioForm.reset(); // Limpiar el formulario
      } else {
        alert(respuesta.error);
      }
    });
  }
}
