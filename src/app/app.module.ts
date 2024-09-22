import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Necesario para realizar peticiones HTTP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { AppComponent } from './app.component';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';  // Componente ListaReservas
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';  // Componente NuevaReserva
import { SeleccionUsuarioComponent } from './components/seleccion-usuario/seleccion-usuario.component'; // Componente SeleccionUsuario

// Módulos de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  // Para la tabla de reservas
import { MatCardModule } from '@angular/material/card';    // Para las tarjetas de presentación

// Definición de rutas
const routes: Routes = [
  { path: 'reservas', component: ListaReservasComponent },  // Ruta para la lista de reservas
  { path: 'nueva-reserva', component: NuevaReservaComponent },  // Ruta para crear una nueva reserva
  { path: 'seleccion-usuario', component: SeleccionUsuarioComponent }, // Ruta para seleccionar el usuario
  { path: '', redirectTo: '/reservas', pathMatch: 'full' }  // Ruta predeterminada que redirige a lista de reservas
];

@NgModule({
  declarations: [
    AppComponent,
    ListaReservasComponent,  // Declaración del componente ListaReservas
    NuevaReservaComponent,  // Declaración del componente NuevaReserva
    SeleccionUsuarioComponent  // Declaración del componente SeleccionUsuario
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  // Asegúrate de que el HttpClientModule esté presente
    BrowserAnimationsModule,  // Necesario para las animaciones de Angular Material
    MatInputModule,  // Módulo para los inputs de Angular Material
    MatDatepickerModule,  // Módulo para el Datepicker
    MatNativeDateModule,  // Necesario para el Datepicker
    MatFormFieldModule,  // Para los contenedores de los inputs
    MatSelectModule,  // Módulo para los menús desplegables
    MatIconModule,  // Para los iconos de Angular Material
    MatButtonModule,  // Para los botones estilizados
    MatToolbarModule,  // Para la barra de herramientas superior
    MatTableModule,  // Para la tabla de la lista de reservas
    MatCardModule,  // Para los estilos de las tarjetas de presentación
    RouterModule.forRoot(routes),  // Configuración de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
