import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacecarComponent } from './racecar.component';

describe('RacecarComponent', () => {
  let component: RacecarComponent;
  let fixture: ComponentFixture<RacecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
