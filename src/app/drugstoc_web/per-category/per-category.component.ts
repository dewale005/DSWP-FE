import { Component, OnInit } from '@angular/core';
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

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getCategory().subscribe(res => {
      this.categories = res;
    })

    this.product.getAllProducts(this.page).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.data = resp;
    })
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
