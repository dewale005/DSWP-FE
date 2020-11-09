import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-invoice',
  templateUrl: './my-invoice.component.html',
  styleUrls: []
})
export class MyInvoiceComponent implements OnInit {

  public invoice: any = [];

  public userId;

  constructor(private product: ProductService, private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.userData;
    this.product.getMyInvoice(this.userId).subscribe(resp => {
      console.log(resp);
      this.invoice = resp;
    })
  }

}
