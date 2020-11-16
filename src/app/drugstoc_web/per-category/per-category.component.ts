import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-per-category',
  templateUrl: './per-category.component.html',
})
export class PerCategoryComponent implements OnInit {
  public loading: boolean = true;
  public page = 0;
  private category: string = 'all'
  public categories: any = [];
  public data: any = [];

  private newdata: any = [];
  cartItem: any;

  constructor(private product: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.product.getCategory().subscribe(res => {
      this.categories = res;
    })

    this.product.getAllProducts(this.page).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.data = resp;
    })

    this.cartItem = this.product.getCatItem();
  }

  changeCatgory(event) {
    this.page = 0;
    this.category = event;
    this.loading = true;
    this.product.getProductCategory(event, this.page).subscribe(res => {
      this.loading = false;
      this.data = res;
      console.log(res)
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

  onScroll() {
    this.page++
    console.log(this.page);
    if(this.category === 'all') {
      this.product.getAllProducts(this.page).subscribe(resp => {
        this.newdata = resp
        this.data = [...this.data, ...this.newdata]
      })
    } else {
      this.product.getProductCategory(this.category, this.page).subscribe(res => {
        this.newdata = res;
        this.data = [...this.data, ...this.newdata]
      })
    }
  }

}
