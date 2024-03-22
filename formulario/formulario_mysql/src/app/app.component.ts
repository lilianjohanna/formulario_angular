import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserFormComponent,CountryDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario_mysql';
}
