import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  public loading: boolean = true;
  public data: any = [];
  public data2: any = [];
  public page = 0;
  cartItem: any[];
  
  constructor(private product: ProductService, private toastr: ToastrService) { 
    this.data2.length = 21;
  }

  ngOnInit(): void {
    this.product.getAllProducts(this.page).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.data = resp;
    })
    this.cartItem = this.product.getCatItem();
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
    this.product.addToCart(item);
		this.toastr.info('Item has been added to cart', 'Added to Cart', {
			positionClass: 'toast-bottom-left'
		});
	}

}
