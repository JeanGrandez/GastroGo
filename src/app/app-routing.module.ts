import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';
import {SeleccionUsuarioComponent} from "./components/seleccion-usuario/seleccion-usuario.component";

const routes: Routes = [
  { path: 'reservas', component: ListaReservasComponent },
  { path: 'nueva-reserva', component: NuevaReservaComponent },
  { path: 'usuario', component: SeleccionUsuarioComponent },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
  { path: '**', redirectTo: '/reservas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
