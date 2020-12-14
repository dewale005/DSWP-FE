import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import jQuery from 'jquery';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav-bar1',
  templateUrl: './nav-bar1.component.html',
  styleUrls: []
})
export class NavBar1Component implements OnInit{

  photo: string 
  countTicket = 0;
  keyword = 'name';
  public searchList: any = [];
  public userData;
  public userName: string = '';

  constructor(private store: Store<any>, private user: ProductService, private auth: AuthService, private router: Router,) {
    this.photo = this.user.photo
   }

  ngOnInit() {
    this.userData =this.auth.userData;
    this.user.search().subscribe(res => {
      this.searchList = res;
      console.log(res);
    })
    this.user.getProfile(this.userData).subscribe(res => {
      this.userName = res['name'];
    })
    this.photo = this.user.photo
    this.user.getCart();
    setInterval(() => {
      this.countTicket = this.user.getCatItem().length
    }, 200)
    // this.store.subscribe(state => (this.countTicket = state.ticketBooking.ticketCount));
  }


  hello($event) {
    console.log($event);
  }



  clickPaymentShow(countTicketBooking) {
      if (countTicketBooking > 0) {
        jQuery('.iq-sidebar-right-menu').addClass('film-side');
      }
  }

  selectEvent(item) {
    this.router.navigate([`/products/itemdetail/${item.id}`])
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    console.log(item)
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  search($event) {
    setTimeout(() => {
      window.location.reload();
    }, 100)
    // console.log($event.target.value)
    this.router.navigate([`/search/${$event.target.value}`])
  }
  
  onFocused(e){
    // do something when input is focused
  }

  logout() {
    this.auth.logoutUser();
  }

}
