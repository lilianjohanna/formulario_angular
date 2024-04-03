import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  sendData(data: any) {
    return this.http.post('http://csw.myscriptcase.com/conexion.php', data);
  }
}
