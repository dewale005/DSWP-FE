import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: []
})
export class SearchComponent implements OnInit {
	constructor(
		public apiService: ApiService,
		private product: ProductService, private toastr: ToastrService, private route: ActivatedRoute	) {}

	data2: any = [];

	loading: boolean = false;

	image: any;

	usersData: any;

  page: number = 0;
  public cartItem = [];

	private newdata: any = [];

	ngOnInit() {
	const { data } = this.route.snapshot.params;
	this.product.search_result(data).subscribe(res => {
		this.data2 = res;
	})
		this.product.getAllProducts(this.page).subscribe((resp) => {
			let arr: any = []
			arr = resp;
      this.loading = false;
      let res = arr.filter(n => n.name.toLowerCase().includes(data.toLowerCase()) || n.x_studio_field_xH9Vy.toLowerCase().includes(data.toLowerCase())) 
      console.log(res);
      
    });
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

	onScroll() {
    const { data } = this.route.snapshot.params;
		this.page++;
		this.loading = true;
		this.product.getAllProducts(this.page).subscribe((resp) => {
	//   let res = resp.filter(n => n.name.toLowerCase().includes(data.toLowerCase())) 
	// 		console.log(res, data);
	// 		this.newdata = res;
	// 		this.loading = false;
	// 		this.data2 = [ ...this.data2, ...this.newdata ];
		});
	}
}
