import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: []
})
export class MyOrdersComponent implements OnInit {

  private user_id;
  cartItem: any;
  data2: any = []
  loading: boolean = true;

  constructor(private order: ProductService, private auth: AuthService, private toastr: ToastrService) {
    this.data2.length = 21; 
   }

  public orders: any = [];

  public my_ordet
  usersData: any;
  statusClass = '';
  public getStatus($msg) {
    console.log($msg);
    $msg = $msg.toLowerCase();
    // tslint:disable-next-line:triple-equals
    if ($msg == 'cancelled') {
      this.statusClass = 'danger';
      // tslint:disable-next-line:triple-equals
    } else if ($msg == 'draft') {
      this.statusClass = 'warning';

      // tslint:disable-next-line:triple-equals
    } else if ($msg == 'sale') {
      this.statusClass = 'primary';
    } else {
      this.statusClass = 'success';
    }
    return  this.statusClass;
  }

  public getOrderStatus($msg) {
    $msg = $msg.toLowerCase();
    // tslint:disable-next-line:triple-equals
    if ($msg == 'draft') {
      return 'Being Processed';
      // tslint:disable-next-line:triple-equals
    } else if ($msg == 'canceled') {
      return 'cancled';

      // tslint:disable-next-line:triple-equals
    }else if ($msg == 'sale') {
      return 'Being packed';
    } else {
      return 'Dispatched';
    }
  }

  ngOnInit() {
    this.user_id = this.auth.userData;
    this.order.getMyOrders(this.user_id).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.orders = resp;
    })
    this.cartItem = this.order.getCatItem();
  }

  public check_already_in_cart(id) {
		if (this.cartItem.length === 0) {
			return false;
		} else {
			for (let i = 0; i < this.cartItem.length; i++) {
				if (id === this.cartItem[i].id) {
					return true;
				}
			}
			return false;
		}
  }
  
  addToCat(item) {
		item.quantity = 1;
    this.order.addToCart(item);
		this.toastr.info('Item has been added to cart', 'Added to Cart', {
			positionClass: 'toast-bottom-left'
		});
	}

}
