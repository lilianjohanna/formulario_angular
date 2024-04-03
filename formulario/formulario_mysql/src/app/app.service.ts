import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  sendData(data: any) {
    return this.http.post(
      'http://localhost/conexionangular/conexion.php',
      data,
    );
  }
}
