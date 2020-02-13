import { Component, OnInit } from '@angular/core';
import OTPAuth from 'otpauth'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

// import speakeasy from 'speakeasy';
// import QRCode from 'qrcode'

@Component({
  selector: 'app-two-step-auth',
  templateUrl: './two-step-auth.component.html',
  styleUrls: ['./two-step-auth.component.scss']
})
export class TwoStepAuthComponent implements OnInit {
  otpURI = null;
  barCodeURI = null;
  secretCode = null;
  passcode = null;
  activeUser = null
  constructor(private router: Router, private userService: UserService, private toaster: ToastrService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.activeUser = JSON.parse(user);
    }
  }

  submit2FAuth() {
    if (!this.passcode || this.passcode.length == 0) {
      this.toaster.error('Please add Passcode !', 'Error', {
        timeOut: 1000
      });

      return null;
    }
    this.userService.matchOTP(this.passcode).subscribe((response) => {
      console.log('matchOTP : ', response);
      if (response && response == true) {
        this.activeUser.enable2FAuth = { enable: true, status: 'complete' };
        this.updateuser();
        this.router.navigate(['app/two-factor-auth']);
      }
      else{
        this.toaster.error('Entered Passcode is incorrect !', 'Error', {
          timeOut: 1000
        });
      }


    }, (error) => {
      console.log('error : ', error);
    })
  }

  updateuser() {
    this.userService.updateUser(this.activeUser).subscribe((response) => {
      console.log('response : ', response);
      localStorage.setItem('user', JSON.stringify(response));
    }, (error) => {
      console.log('response : ', error);
    });
  }
}
