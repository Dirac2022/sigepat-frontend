import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VuelosComponent } from './component/vuelos/vuelos.component';
import { PaquetesComponent } from './component/paquetes/paquetes.component';
import { ReservasComponent } from './component/reservas/reservas.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'nosotros', component: NosotrosComponent},
];