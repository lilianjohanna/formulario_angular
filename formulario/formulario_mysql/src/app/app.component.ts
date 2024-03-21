import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NombreUsuarioComponent,DireccionUsuarioComponent,TelefonoUsuarioComponent,CorreoUsuarioComponent],
  /*template: `<form>
  <app-nombre-usuario></app-nombre-usuario>
  <app-direccion-usuario></app-direccion-usuario>
  <app-telefono-usuario></app-telefono-usuario>
  <app-correo-usuario></app-correo-usuario>
  </form>`,*/
  //template: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
