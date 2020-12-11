import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: []
})
export class SearchComponent implements OnInit{
	constructor(
		public apiService: ApiService,
		private product: ProductService, private toastr: ToastrService, private route: ActivatedRoute	) {
			this.data3.length = 21;
		}

	data2: any = [];
	public data3: any = [];

	loading: boolean = true;

	image: any;
	query: any;
	newquery: any;

	usersData: any;

  page: number = 0;
  public cartItem = [];

	private newdata: any = [];

	ngOnInit() {
	const { data } = this.route.snapshot.params;
	this.query === this.route.snapshot.params.data;
	this.get_search(data);
	// setInterval(() => {
	// 	this.newquery === this.route.snapshot.params;
	// 	console.log(this.query === this.newquery, this.newquery, this.query);
	// 	// this.newquery === this.route.snapshot.params.data
	// },1000)


	// console.log(this.query === this.route.snapshot.params);
	setInterval(() => {
		console.log(this.route.snapshot.params.data);
		console.log(this.query === this.route.snapshot.params.data);
	}, 200)

	// if(this.query === this.route.snapshot.params.data) {
	// 	return;
	// } else {
		
	// }
	// 	this.product.getAllProducts(this.page).subscribe((resp) => {
	// 		let arr: any = []
	// 		arr = resp;
	// 		let res = arr.filter(n => n.name.toLowerCase().includes(data.toLowerCase()) || n.x_studio_field_xH9Vy.toLowerCase().includes(data.toLowerCase())) 
	// 		this.loading = false;
    //   console.log(res);
      
    // });
    this.cartItem = this.product.getCatItem();
  }

  get_search(data) {
	this.loading = true;
		this.product.search_result(data).subscribe(res => {
			this.data2 = res;
			this.loading = false;
		})
  }

//   ngOnChanges(changes: SimpleChanges): void {
// 	  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
// 	  //Add '${implements OnChanges}' to the class.
// 	  console.log(SimpleChanges)
//   }
  
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

	// onScroll() {
    // const { data } = this.route.snapshot.params;
	// 	this.page++;
	// 	this.loading = true;
	// 	this.product.getAllProducts(this.page).subscribe((resp) => {
	// //   let res = resp.filter(n => n.name.toLowerCase().includes(data.toLowerCase())) 
	// // 		console.log(res, data);
	// // 		this.newdata = res;
	// // 		this.loading = false;
	// // 		this.data2 = [ ...this.data2, ...this.newdata ];
	// 	});
	// }
}
