import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser = null;
  constructor(private http: HttpClient) { }

  isAuthenticated() {
    let user = localStorage.getItem('user');
    return user;
  }

  getAllUsers() {
    return this.http.get('http://localhost:3000/claims');

  }

  registerUser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }

  updateUser(user) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

  checkUser(email) {
    return this.http.get('http://localhost:3000/users?email=' + email);
  }

  addClaim(claim) {
    return this.http.post('http://localhost:3000/claims', claim);
  }
  getQRCode(username) {
    return this.http.get('http://localhost:55916/api/GetPair?userName=' + username);
  }

  matchOTP(passcode) {
    return this.http.get('http://localhost:55916/api/GetValidatePin?pin=' + passcode + '&secretCode=GEZDGNBVMNXWIZI');
  }
  loginImg() {
    const url = "http://localhost:59078/api/image/login";
    return this.http.get('https://www.authenticatorapi.com/pair.aspx?AppName=akumar&AppInfo=amit&SecretCode=123', { responseType: 'blob' });
  }
}
