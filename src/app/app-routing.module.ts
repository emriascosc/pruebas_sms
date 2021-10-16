import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestionMatriculaComponent } from './gestion-matricula/gestion-matricula.component';
import { GestionMatriculasConsultarComponent } from './gestion-matriculas-consultar/gestion-matriculas-consultar.component';
import { GestionarCalificacionesComponent } from './funci_Evelyn_Riascos/gestionar-calificaciones/gestionar-calificaciones.component';
const routes: Routes = [
  {
    path: "gestion-matricula" , component: GestionMatriculaComponent,
  },
  {
    path: "gestion-consultas" , component: GestionMatriculasConsultarComponent,
  },
  {
    path: "gestion-consultas" , component: GestionMatriculasConsultarComponent,
  },
  {
    path: "gestionar-calificaciones" , component: GestionarCalificacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
