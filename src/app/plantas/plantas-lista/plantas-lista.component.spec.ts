import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasListaComponent } from './plantas-lista.component';

describe('PlantasListaComponent', () => {
  let component: PlantasListaComponent;
  let fixture: ComponentFixture<PlantasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
