import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formulario_mysql';
  formData: any;
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
