import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaDetalhesComponent } from './planta-detalhes.component';

describe('PlantaDetalhesComponent', () => {
  let component: PlantaDetalhesComponent;
  let fixture: ComponentFixture<PlantaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
