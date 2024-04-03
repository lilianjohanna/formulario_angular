import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formulario_mysql';
  constructor(private dataService: DataService) {}

  onSubmit(formData: any) {
    this.dataService.sendData(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
