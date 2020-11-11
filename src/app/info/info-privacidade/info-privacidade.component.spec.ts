import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrivacidadeComponent } from './info-privacidade.component';

describe('PrivacidadeComponent', () => {
  let component: InfoPrivacidadeComponent;
  let fixture: ComponentFixture<InfoPrivacidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPrivacidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
