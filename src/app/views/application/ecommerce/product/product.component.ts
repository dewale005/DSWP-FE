import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  public loading: boolean = true;
  public page = 0;
  public categories: any = [];
  public data: any = [];
  
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getCategory().subscribe(res => {
      this.categories = res;
    })

    // this.product.getAllProducts().subscribe(resp => {
    //   console.log(resp);
    //   this.loading = false;
    //   this.data = resp;
    // })
  }

  changeCatgory($event) {
    this.loading = true;
    this.product.getProductCategory($event, 0).subscribe(res => {
      this.loading = false;
      this.data = res;
      console.log(res)
    })
    
  }

  onScroll() {
    alert('scrolled');
    console.log('scrolled');
  }

}
