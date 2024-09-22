import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';  // Asegúrate de importar Router


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {
  reservas: any[] = [];
  usuario: string = '';

  constructor(private reservaService: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario') || '';  // Asegúrate de que nunca sea null
    if (!this.usuario) {
      this.router.navigate(['/usuario']);
      return;
    }

    this.loadReservas();
  }

  loadReservas(): void {
    this.reservaService.getReservas().subscribe(data => {
      this.reservas = data;
    });
  }


  confirmarReserva(id: number): void {
    const reservaConfirmada = { estado: 'confirmada' };
    this.reservaService.updateReserva(id, reservaConfirmada).subscribe(() => {
      this.loadReservas();
    });
  }

  cancelarReserva(id: number): void {
    this.reservaService.deleteReserva(id).subscribe(() => {
      this.loadReservas();
    });
  }
}
