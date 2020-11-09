import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAlarmesComponent } from './usuario-alarmes.component';

describe('UsuarioAlarmesComponent', () => {
  let component: UsuarioAlarmesComponent;
  let fixture: ComponentFixture<UsuarioAlarmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAlarmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAlarmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
