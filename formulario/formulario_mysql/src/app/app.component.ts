import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nombre-usuario',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app/nombre-usuario/nombre-usuario.component.html',
  styleUrl: './app/nombre-usuario/nombre-usuario.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
