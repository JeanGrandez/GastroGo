import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  restaurantes: any[] = [];
  nuevaReserva = {
    usuario_id: null as number | null,  // El ID del usuario será almacenado aquí
    restaurante_id: null as number | null,  // ID del restaurante seleccionado
    fecha: '',  // La fecha seleccionada para la reserva
    personas: 0,  // Número de personas para la reserva
    estado: 'pendiente'  // Estado inicial de la reserva
  };

  constructor(
    private restauranteService: RestauranteService,
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      // Si no hay un usuario en el almacenamiento local, redirigir al formulario de selección de usuario
      this.router.navigate(['/usuario']);
      return;
    }

    // Asignar el ID del usuario al objeto nuevaReserva
    this.nuevaReserva.usuario_id = parseInt(usuario_id, 10);  // Convertir el usuario_id en número

    // Cargar la lista de restaurantes
    this.restauranteService.getRestaurantes().subscribe((data) => {
      this.restaurantes = data;
    });
  }

  hacerReserva(): void {
    if (this.nuevaReserva.restaurante_id && this.nuevaReserva.fecha && this.nuevaReserva.personas > 0) {
      // Convertir la fecha a un formato válido (YYYY-MM-DD)
      const fechaValida = new Date(this.nuevaReserva.fecha);

      if (isNaN(fechaValida.getTime())) {
        alert('Fecha inválida. Por favor, ingresa una fecha válida.');
        return;
      }

      // Cambiar la estructura de los datos enviados
      const reservaData = {
        usuario: {
          id: this.nuevaReserva.usuario_id
        },
        restaurante: {
          id: this.nuevaReserva.restaurante_id
        },
        fecha_reserva: fechaValida.toISOString().split('T')[0],  // Formato YYYY-MM-DD
        cantidad_personas: this.nuevaReserva.personas,
        estado: this.nuevaReserva.estado
      };

      // Llamar al servicio para crear la reserva
      this.reservaService.createReserva(reservaData).subscribe(
        () => {
          alert('Reserva creada con éxito');
          this.router.navigate(['/reservas']);
        },
        (error) => {
          console.error('Error al crear la reserva:', error);
          alert('Ocurrió un error al crear la reserva');
        }
      );
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
