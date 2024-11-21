import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegistrarPersonaComponent } from './component/registrar-persona/registrar-persona.component';
import { VuelosComponent } from './component/vuelos/vuelos.component';
import { PaquetesComponent } from './component/paquetes/paquetes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'registrar-persona', component: RegistrarPersonaComponent },
];