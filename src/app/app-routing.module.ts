import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';
import {SeleccionUsuarioComponent} from "./components/seleccion-usuario/seleccion-usuario.component";

const routes: Routes = [
  { path: 'usuario', component: SeleccionUsuarioComponent },
  { path: 'reservas', component: ListaReservasComponent },
  { path: 'nueva-reserva', component: NuevaReservaComponent },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
