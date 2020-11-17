import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  login(payload) {
    this.http.post(`${this.BASE_URL}/login`, payload).subscribe(resp => {
      localStorage.setItem('user', resp['user'])
      localStorage.setItem('token', resp['token'])
      this.router.navigate(['/']);
    }, err => {
      this.toastr.error(err.error.message)
      console.log()
    });
  }

  register(payload) {
    return this.http.post(`${this.BASE_URL}/register`, payload)
  }

  public get userData() {
    return localStorage.getItem('user')
  }

  authenticated() {
    if(localStorage.getItem('token') !== null) {
      return true
    } else {
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.reload();
  }

}
