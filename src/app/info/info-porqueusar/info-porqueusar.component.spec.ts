import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPorqueusarComponent } from './info-porqueusar.component';

describe('PorqueusarComponent', () => {
  let component: InfoPorqueusarComponent;
  let fixture: ComponentFixture<InfoPorqueusarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPorqueusarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPorqueusarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
