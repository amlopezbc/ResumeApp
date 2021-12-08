import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProfileEditorComponent } from './contact-profile-editor.component';

describe('ContactProfileEditorComponent', () => {
  let component: ContactProfileEditorComponent;
  let fixture: ComponentFixture<ContactProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactProfileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
