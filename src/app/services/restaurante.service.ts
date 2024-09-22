import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private apiUrl = 'http://48.211.168.235:8080/api/restaurantes';  // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) {}

  getRestaurantes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
