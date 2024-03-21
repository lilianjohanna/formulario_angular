import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';


@NgModule({
  declarations: [NombreUsuarioComponent,DireccionUsuarioComponent,TelefonoUsuarioComponent,CorreoUsuarioComponent],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
