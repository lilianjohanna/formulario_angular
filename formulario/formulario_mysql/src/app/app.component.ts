import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';
import { EnviarComponent } from './enviar/enviar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NombreUsuarioComponent,DireccionUsuarioComponent,TelefonoUsuarioComponent,CorreoUsuarioComponent,EnviarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
  formData = {
    NombreUsuarioComponent: '',
    DireccionUsuarioComponent: '',
    TelefonoUsuarioComponent: '',
    CorreoUsuarioComponent: ''
  };
  submitForm() {
    if (this.formData.NombreUsuarioComponent && this.formData.DireccionUsuarioComponent && this.formData.TelefonoUsuarioComponent && this.formData.CorreoUsuarioComponent) {
      console.log('Formulario enviado correctamente:', this.formData);
      // Aquí puedes enviar los datos a tu servidor o realizar cualquier acción necesaria
    } else {
      console.error('No se pueden dejar campos en blanco');
    }
  }
}