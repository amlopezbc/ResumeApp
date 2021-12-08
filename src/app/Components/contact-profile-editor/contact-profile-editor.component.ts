import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-profile-editor',
  templateUrl: './contact-profile-editor.component.html',
  styleUrls: ['./contact-profile-editor.component.css']
})
export class ContactProfileEditorComponent implements OnInit {
  faUpload = faUpload;
  isFormValid: boolean;

  constructor() {
    this.isFormValid = true;
  }

  profileForm = new FormGroup(
    {
      fullName: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      eMail: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    }
  )

  get EMail(){
    return this.profileForm.get('eMail')
    }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    this.isFormValid = false;

    if (this.profileForm.controls["fullName"].value.length > 5 && this.profileForm.controls["eMail"].value.length > 5 && this.profileForm.controls["message"].value.length > 10) {

      alert("Message sent");
      this.isFormValid = true;
      this.profileForm.reset();
    }
    return this.isFormValid;
  }

  ngOnInit(): void {
  }
}