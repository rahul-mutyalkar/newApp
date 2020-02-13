import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit() {
    console.log(this.forgotPassword);
  }
}
