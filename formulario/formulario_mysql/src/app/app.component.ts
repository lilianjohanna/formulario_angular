import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';
import { NumeroComponent } from './numero/numero.component';
import { BotonComponent } from './boton/boton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TextoComponent,NumeroComponent,BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
