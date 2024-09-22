import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';  // Importar el servicio de usuario

@Component({
  selector: 'app-seleccion-usuario',
  templateUrl: './seleccion-usuario.component.html',
  styleUrls: ['./seleccion-usuario.component.css']
})
export class SeleccionUsuarioComponent implements OnInit {
  usuarios: any[] = [];
  usuario_id: number | null = null;  // Permitir que sea null al principio
  // Usaremos el ID del usuario

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    // Cargar los usuarios desde el backend
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  ingresar(): void {
    if (this.usuario_id) {
      // Almacenar el usuario_id en localStorage
      localStorage.setItem('usuario_id', this.usuario_id.toString());
      // Redirigir a la página de reservas
      this.router.navigate(['/reservas']);
    } else {
      alert('Por favor, selecciona un usuario');
    }
  }
}
