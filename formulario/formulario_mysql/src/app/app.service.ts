import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  guardarUsuario(usuario: any) {
    return this.http.post('http://localhost/guardar_usuario.php', usuario);
  }
}
