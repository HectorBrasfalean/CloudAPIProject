import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFootballersComponent } from './settings-footballers.component';

describe('SettingsFootballersComponent', () => {
  let component: SettingsFootballersComponent;
  let fixture: ComponentFixture<SettingsFootballersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFootballersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFootballersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
