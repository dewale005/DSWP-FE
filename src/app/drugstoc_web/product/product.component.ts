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
  public page = 0;
  
  constructor(private product: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.product.getAllProducts(this.page).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.data = resp;
    })
  }

  addToCat(item) {
		item.quantity = 1;
    this.product.addToCart(item);
		this.toastr.info('Item has been added to cart', 'Added to Cart', {
			positionClass: 'toast-bottom-left'
		});
	}

}
