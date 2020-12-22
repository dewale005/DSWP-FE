import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  ngform: FormGroup;

  isProcessing: boolean = false;

  constructor(public fb: FormBuilder, private auth: AuthService, private toastr: ToastrService, private router: Router) {
    this.ngform = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.isProcessing = true;
    this.auth.login(this.ngform.value).subscribe(resp => {
      console.log(resp)
      localStorage.setItem('user', resp['user'])
      localStorage.setItem('token', resp['token'])
      this.isProcessing = false;
      this.router.navigate(['/']);
    }, err => {
      this.toastr.error(err.error.message)
      this.isProcessing = false;
      console.log(err)
    });
  }

}
