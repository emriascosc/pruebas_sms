import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCalificacionesActualizarComponent } from './gestionar-calificaciones-actualizar.component';

describe('GestionarCalificacionesActualizarComponent', () => {
  let component: GestionarCalificacionesActualizarComponent;
  let fixture: ComponentFixture<GestionarCalificacionesActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarCalificacionesActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarCalificacionesActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
