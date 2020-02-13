import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { qrCode } from './qrcode';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss']
})
export class TwoFactorAuthComponent implements OnInit {
  barCodeURI;
  otpURI;
  activeUser = null;
  passcode = null;

  constructor(
    private userService: UserService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.getUser();
    this.initITPAuth()
  }

  initITPAuth() {
    // this.otpURI = "otpauth://totp/gebbsiartest:" + this.activeUser.email + "?secret=XXXEZDGNBVMNXWIZI&issuer=gebbsiartest";
    // this.barCodeURI = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' + this.otpURI;
    // if (this.activeUser.enable2FAuth && this.activeUser.enable2FAuth.enable == true) {
    //   this.getQRCode(this.activeUser.email);
    // }
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.activeUser = JSON.parse(user);
    }
  }

  enable2FAuth() {

    this.getQRCode(this.activeUser.email);

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
      }
      else {
        this.toaster.error('Entered Passcode is incorrect !', 'Error', {
          timeOut: 1000
        });
      }
    }, (error) => {
      console.log('error : ', error);
    })
  }

  remove2FAuth() {
    this.activeUser.enable2FAuth = { enable: false, status: 'incomplete' };
    this.userService.updateUser(this.activeUser).subscribe((response) => {
      console.log('response : ', response);
      localStorage.setItem('user', JSON.stringify(response));
    }, (error) => {
      console.log('response : ', error);
    });
  }

  getQRCode(username) {
    this.userService.getQRCode(username).subscribe((response: any) => {
      console.log('response : ', response);
      this.barCodeURI = response.Html;
      this.activeUser.enable2FAuth = { enable: true, status: 'incomplete' };
      // this.updateuser();
    }, (error) => {
      console.log('error : ', error)
    });
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
