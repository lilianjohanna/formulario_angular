import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumeroComponent } from './numero/numero.component';
import { TextoComponent } from './texto/texto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NumeroComponent,TextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
