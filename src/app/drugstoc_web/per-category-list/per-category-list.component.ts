import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-per-category-list',
  templateUrl: './per-category-list.component.html',
})
export class PerCategoryListComponent implements OnInit {

  constructor(private list: ProductService) { }

  data: any = []

  ngOnInit(){
    this.list.per_company().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }

}
