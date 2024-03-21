import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreUsuarioComponent } from './nombre-usuario/nombre-usuario.component';
import { DireccionUsuarioComponent } from './direccion-usuario/direccion-usuario.component';
import { TelefonoUsuarioComponent } from './telefono-usuario/telefono-usuario.component';
import { CorreoUsuarioComponent } from './correo-usuario/correo-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private NombreUsuarioComponent: NombreUsuarioComponent, private DireccionUsuarioComponent: DireccionUsuarioComponent, private TelefonoUsuarioComponent: TelefonoUsuarioComponent, private CorreoUsuarioComponent: CorreoUsuarioComponent) { }  
  ngOnInit() {
    // Aquí puedes utilizar el componente de ejemplo
    NombreUsuarioComponent;
    DireccionUsuarioComponent;
    TelefonoUsuarioComponent;
    CorreoUsuarioComponent;
  }
}
