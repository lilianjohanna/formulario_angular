import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';
import { EnviarComponent } from './enviar/enviar.component';


@NgModule({
  declarations: [NombreUsuarioComponent,DireccionUsuarioComponent,TelefonoUsuarioComponent,CorreoUsuarioComponent,EnviarComponent],
  imports: [
    CommonModule,
    NgIf
  ]
})
export class AppModule { }
