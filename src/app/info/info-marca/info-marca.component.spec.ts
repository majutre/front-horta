import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMarcaComponent } from './info-marca.component';

describe('MarcaComponent', () => {
  let component: InfoMarcaComponent;
  let fixture: ComponentFixture<InfoMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
