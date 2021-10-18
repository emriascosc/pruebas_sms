import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GestionarCalificacionesComponent } from './funci_Evelyn_Riascos/gestionar-calificaciones/gestionar-calificaciones.component';
import { GestionMatriculaComponent } from        './gestion-matricula/gestion-matricula.component';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { GestionMatriculaActualizarComponent } from './gestion-matricula-actualizar/gestion-matricula-actualizar.component';
import { GestionMatriculasConsultarComponent } from './gestion-matriculas-consultar/gestion-matriculas-consultar.component';
import { GestionMatriculasEliminarComponent } from './gestion-matriculas-eliminar/gestion-matriculas-eliminar.component';
import { GestionarCalificacionesActualizarComponent } from './gestionar-calificaciones-actualizar/gestionar-calificaciones-actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionMatriculaComponent,
    GestionarCalificacionesComponent,
    EncabezadoComponent,
    GestionMatriculaActualizarComponent,
    GestionMatriculasConsultarComponent,
    GestionMatriculasEliminarComponent,
    GestionarCalificacionesActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
