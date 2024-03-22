import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumeroComponent } from './numero/numero.component';
import { TextoComponent } from './texto/texto.component';
import { BotonComponent } from './boton/boton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NumeroComponent,TextoComponent,BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
