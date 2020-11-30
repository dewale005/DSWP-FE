import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: []
})
export class HomeComponent implements OnInit {
	optionsData: AnimationOptions = {
		path: '/assets/images/small/data.json'
	};
	optionsData2: AnimationOptions = {
		path: '/assets/images/small/data.json'
	};

	constructor(
		public apiService: ApiService,
		private product: ProductService,
		private toastr: ToastrService,
		private auth: AuthService
	) {
		this.data.length = 21
		this.sumLoading.length = 3
	}

  public sales_v: any;
  
  @Output() cartValue = new EventEmitter()

	public data: any = [];
	loadingItem: boolean = true;
	loadCatergory: boolean = true;
	sumLoading = [];

	image: any;

	usersData: any;

	page: number = 0;

	public loading: boolean = false;

	public userId;

	public user = {
		name: 'loading....',
		phone: 'loading....',
		address: 'loading....'
  };
  
  sumaryItem = [];

  public invoice: any = [];
  private newdata: any = [];

	public cartItem = [];

	animationCreated(animationItem: AnimationItem): void {}

	ngOnInit() {
	this.userId = this.auth.userData;
	setInterval(() => {
		this.image = this.product.photo
	  }, 200)
    this.getSummary();
		this.product.getAllProducts(this.page).subscribe((resp) => {
			console.log(resp)
			this.loadingItem = false;
			// this.loading = false;
			this.data = resp;
			let dat = [];
			for (let i = 0; i < 3; i++) {
				dat.push(resp[i]);
			}
			this.sales_v = dat;
		});

		this.product.getProfile(this.userId).subscribe((resp) => {
			console.log(resp);
			this.user.name = resp['name'];
			this.user.address = resp['contact_address'];
			this.user.phone = resp['mobile'];
		});

		this.cartItem = this.product.getCatItem();
  }
  
  getSummary() {
	  let arr: any = []
    this.product.getMyDrugstoc(this.userId).subscribe(resp => {
		arr = resp;
      this.product.getCategory().subscribe(res => {
        let summary = [];
        for(let i = 0; i < res['length']; i++) {
		  let m = arr.filter(a => a.categ_id[1] === res[i].name)
          let data = {
            category: res[i].name,
            number: m.length,
            percentage: (m.length / resp['length'] ) * 100
          }
          summary.push(data);
        }
        summary.sort((a,b) => (a.number > b.number) ? -1 : ((b.number > a.number) ? 1 : 0));
		this.sumaryItem = summary.slice(0, 3);
		this.loadCatergory = false
      })     
    })
  }

	addToCat(item) {
		item.quantity = 1;
    this.product.addToCart(item);
    this.cartValue.emit(this.cartItem.length)
		this.toastr.info('Item has been added to cart', 'Added to Cart', {
			positionClass: 'toast-bottom-left'
		});
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

	onScroll() {
		this.page++;
		this.loading = true;
		this.product.getAllProducts(this.page).subscribe((res) => {
      this.newdata = res;
			this.loading = false;
			let unqie = [ ...this.data, ...this.newdata ];
			const categories = [...new Set(unqie.map(bill => bill.id))]
			console.log(categories);
			// let may = [...new Set(unqie)];
			this.data = unqie;
		});
	}
}

function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}