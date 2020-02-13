import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log(this.loginForm);
    const { email, password } = this.loginForm.value;
    this.userService.checkUser(email).subscribe((response: any) => {
      console.log('login response : ', response);
      if (response.length == 0) {
        this.toaster.error('user does not exist !', 'Login Error');
      }
      else {
        const user = response[0];
        if (user.password == password) {
          localStorage.setItem('user', JSON.stringify(user));
          // this.router.navigate(['app/dashboard']);
          if (user && user.enable2FAuth && user.enable2FAuth.status == 'complete') {
            this.router.navigate(['auth/two-step-auth']);

          }
          else {
            this.router.navigate(['app/dashboard']);
          }
          // two-step-auth
        }
        else {
          this.toaster.error('email and password does not match', 'User not Authenticated');
        }
      }
    }, (error) => {
      console.log('login error : ', error);
    })
  }

  checkForm() {
    console.log(this.loginForm);
  }
  // Number((Math.random()*10000).toFixed(0))


}
