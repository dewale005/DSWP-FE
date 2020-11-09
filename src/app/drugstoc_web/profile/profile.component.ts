import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private profile: ProductService, public fb: FormBuilder) {
    this.ngform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
    this.profile.getProfile(7977).subscribe(resp => {
      console.log(resp[0])
    })

    this.image = this.profile.photo;
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: FileReaderEvent) => {
        this.image = event.target.result;
        this.profile.changePhoto(event.target.result)
        console.log(this.image);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
