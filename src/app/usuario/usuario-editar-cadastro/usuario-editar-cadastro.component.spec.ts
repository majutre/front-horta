import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarCadastroComponent } from './usuario-editar-cadastro.component';

describe('UsuarioEditarCadastroComponent', () => {
  let component: UsuarioEditarCadastroComponent;
  let fixture: ComponentFixture<UsuarioEditarCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEditarCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
