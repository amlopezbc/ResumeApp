import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCirclesComponent } from './nav-circles.component';

describe('NavCirclesComponent', () => {
  let component: NavCirclesComponent;
  let fixture: ComponentFixture<NavCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCirclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
