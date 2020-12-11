import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  ngform: FormGroup;

  isProcessing: boolean = false;

  constructor(public fb: FormBuilder, private auth: AuthService) {
    this.ngform = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.isProcessing = true;
    this.auth.login(this.ngform.value)
    this.isProcessing = false;
  }

}
