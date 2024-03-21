import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';

const routes: Routes = [
  { path: './nombre-usuario', component: NombreUsuarioComponent },
  { path: './direccion-usuario', component: DireccionUsuarioComponent },
  { path: './telefono-usuario', component: TelefonoUsuarioComponent },
  { path: './correo-usuario', component: CorreoUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
