import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkslipsComponent } from './pinkslips.component';

describe('PinkslipsComponent', () => {
  let component: PinkslipsComponent;
  let fixture: ComponentFixture<PinkslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
