import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PluginsService} from '../../../plugins.service';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  authSlideOptions: OwlOptions =  {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  authSlides = [
    {
      id: 1,
      image: 'assets/images/image1.png',
      // title: 'SIGN UP FOR FREE',
      // description: "Enroll your Pharmacy, Doctor's office, Clinic, Hopsital, or Nursing Home for free Zero Tolerance for counterfeits"
    },
    {
      id: 2,
      image: 'assets/images/image2.png',
      // title: 'CONNECT',
      // description: 'Only Licensed Health Professionals in Nigeria get Acess to Drugstoc'
    },
    {
      id: 3,
      image: 'assets/images/image3.png',
      // title: 'ORDER',
      // description: 'See libe Pricing, Order, and Track your pharmacy needs from thousands of drugs available on your customized Mobile App.'
    },
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;

    setTimeout(() => current.plugins.index(), 200);
  }

}
