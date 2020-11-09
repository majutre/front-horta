import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOqueehComponent } from './info-oqueeh.component';

describe('OqueehComponent', () => {
  let component: InfoOqueehComponent;
  let fixture: ComponentFixture<InfoOqueehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOqueehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOqueehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
