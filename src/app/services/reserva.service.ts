import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = 'http://48.211.168.235:8080/api/reservas';  // Asegúrate de usar el endpoint correcto

  constructor(private http: HttpClient) { }

  // Obtener todas las reservas
  getReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }


  // Crear una nueva reserva
  createReserva(reservaData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, reservaData, { headers });
  }

  // Obtener una reserva por ID
  getReservaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Actualizar una reserva
  updateReserva(id: number, reserva: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(`${this.apiUrl}/${id}`, reserva, { headers });
  }

  // Eliminar una reserva por ID
  deleteReserva(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
