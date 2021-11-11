import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAboutMeComponent } from './resume-about-me.component';

describe('ResumeAboutMeComponent', () => {
  let component: ResumeAboutMeComponent;
  let fixture: ComponentFixture<ResumeAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
