import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSobreComponent } from './info-sobre.component';

describe('SobreComponent', () => {
  let component: InfoSobreComponent;
  let fixture: ComponentFixture<InfoSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
