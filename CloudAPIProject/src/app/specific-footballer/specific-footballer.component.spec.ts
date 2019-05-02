import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificFootballerComponent } from './specific-footballer.component';

describe('SpecificFootballerComponent', () => {
  let component: SpecificFootballerComponent;
  let fixture: ComponentFixture<SpecificFootballerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificFootballerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificFootballerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
