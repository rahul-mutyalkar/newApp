import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Passwordmatch } from '../../shared/custom-validation';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toaster: ToastrService) { }

  ngOnInit() {
    this.createForm();
    this.getAllUsers();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confPassword: ['', Validators.required]
    },
      {
        validator: [Passwordmatch.matchPassword]
      });

    // this.registerForm.patchValue({ name: 'Hadish', email: 'hadish@gmail.com', password: '123456', confPassword: '123456' })
  }

  onSubmit() {
    console.log('onSubmit : ', this.registerForm);
    const { name, email, password } = this.registerForm.value;
    const user = { id: Math.random() * 10000, name: name, email: email, password: password };
    let userFound = null;
    this.userService.checkUser(email).pipe(finalize(() => {
      console.log('in pipe finalize');
      if (userFound == false) {
        this.saveUser(user);
      }
      else {
        this.toaster.error('user already exist !', 'Login Error', {
          timeOut: 1000
        });
      }
    })).subscribe((response: any) => {
      console.log('response : ', response);
      if (response.length > 0) {
        userFound = true;
      }
      else {
        userFound = false;
      }
    }, (error) => {
      userFound = false;
      console.log('error : ', error);
    })
  }

  saveUser(user) {
    user.enable2FAuth = { enable: false, status: 'incomplete' };
    this.userService.registerUser(user).subscribe((data) => {
      console.log('saveUser : ', data);
      this.toaster.success('user registered successfully!', 'Login Success', {
        timeOut: 1000
      });
      this.router.navigate(['auth/login']);

    }, (error) => {
      console.log('saveUser error : ', error)
    })
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      console.log('data : ', data)
    }, (error) => {
      console.log('error : ', error)
    });
  }

}
