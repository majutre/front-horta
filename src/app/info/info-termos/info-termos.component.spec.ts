import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTermosComponent } from './info-termos.component';

describe('InfoTermosComponent', () => {
  let component: InfoTermosComponent;
  let fixture: ComponentFixture<InfoTermosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTermosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
