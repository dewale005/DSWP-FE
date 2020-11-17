import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jQuery from 'jquery';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  ngform: FormGroup;

  isProcessing: boolean = false;


  constructor(public fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.ngform = this.fb.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    if(this.ngform.valid) {
      this.isProcessing = true;
      this.auth.register(this.ngform.value).subscribe(resp => {
        console.log(resp)
          Swal.fire({
          icon: 'success',
          title: resp['message'],
          showConfirmButton: true,
        });
        this.isProcessing = false;
        this.router.navigate(['/']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: err.error.message,
          showConfirmButton: true,
        });
        this.isProcessing = false;
      });
    } else {
      Swal.fire({
				icon: 'error',
				title: "Wrong Registeration details please check and start again",
				showConfirmButton: true,
      });
      this.isProcessing = false;
    }
  }

}
