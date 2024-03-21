import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nombre-usuario',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './nombre-usuario/nombre-usuario.component.html',
  styleUrl: './nombre-usuario/nombre-usuario.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
