import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerComponentComponent } from './footballer-component.component';

describe('FootballerComponentComponent', () => {
  let component: FootballerComponentComponent;
  let fixture: ComponentFixture<FootballerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
