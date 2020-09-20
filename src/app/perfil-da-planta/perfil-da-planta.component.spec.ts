import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDaPlantaComponent } from './perfil-da-planta.component';

describe('PerfilDaPlantaComponent', () => {
  let component: PerfilDaPlantaComponent;
  let fixture: ComponentFixture<PerfilDaPlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDaPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
