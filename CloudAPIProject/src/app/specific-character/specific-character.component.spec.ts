import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCharacterComponent } from './specific-character.component';

describe('SpecificCharacterComponent', () => {
  let component: SpecificCharacterComponent;
  let fixture: ComponentFixture<SpecificCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
