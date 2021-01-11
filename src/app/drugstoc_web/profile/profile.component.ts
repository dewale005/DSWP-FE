import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

export interface FileReaderEventTarget extends EventTarget {
  result: string;
}

export interface FileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})

export class ProfileComponent implements OnInit {

  public ngform: FormGroup;
  public image: string = '';
  userId: string;
  username: string = '';
  address: string = '';
  phone: string = '';


  constructor(private profile: ProductService, public fb: FormBuilder, private auth: AuthService) {
    this.ngform = this.fb.group({
      name: new FormControl(this.username, [Validators.required]),
      address: new FormControl(this.address, [Validators.required]),
      phone: new FormControl(this.phone, [Validators.required]),
    });
   }

  ngOnInit() {
    this.userId = this.auth.userData;
    this.profile.getProfile(this.userId).subscribe(resp => {
      console.log(resp)
      this.username = resp['name'];
			this.address = resp['contact_address'];
			this.phone = resp['mobile'];
    })

    this.image = this.profile.photo;
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // reader.onload = (event: FileReaderEvent) => {
      //   this.image = event.target.result;
      //   this.profile.changePhoto(event.target.result)
      //   console.log(this.image);
      // };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmmit() {}

}
