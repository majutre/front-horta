import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlantasComponent } from './usuario-plantas.component';

describe('UsuarioPlantasComponent', () => {
  let component: UsuarioPlantasComponent;
  let fixture: ComponentFixture<UsuarioPlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
