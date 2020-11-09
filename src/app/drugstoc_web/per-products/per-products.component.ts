import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-per-products',
  templateUrl: './per-products.component.html',
  styleUrls: []
})
export class PerProductsComponent implements OnInit {

  public data: any = [];
  public page = 0;
  
  title: string = ''

  optionsData2: AnimationOptions = {
    path: '/assets/images/small/data2.json'
  };
  cartItem: any;

  constructor(private product: ProductService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.params.id;
    this.product.lis_per_company(this.title).subscribe(resp => {
      console.log(resp);
      this.data = resp;
    })
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
