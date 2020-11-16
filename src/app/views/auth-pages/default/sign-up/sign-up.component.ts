import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jQuery from 'jquery';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  ngform: FormGroup;


  constructor(public fb: FormBuilder, private router: Router) {
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
    console.log(this.ngform.valid)
    let message =  'Please check your email for further instructions on activating your account.\nFor more information, call us on 0803 687 9999 or send an email to customercare@drugstoc.com.'
    if(this.ngform.valid) {
      Swal.fire({
				icon: 'success',
				title: message,
				showConfirmButton: true,
			});
			this.router.navigate([ '/' ]);
    } else {
      Swal.fire({
				icon: 'error',
				title: "Wrong Registeration details please check and start again",
				showConfirmButton: true,
			});
    }
  }

}
