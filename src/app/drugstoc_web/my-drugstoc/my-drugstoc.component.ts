import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-drugstoc',
  templateUrl: './my-drugstoc.component.html',
  styleUrls: []
})
export class MyDrugstocComponent implements OnInit {

  public userId;
  public data: any = [];
  public category: any = [];
  private listData: any = [];
  cartItem: any = [];

  constructor(private product: ProductService, private auth: AuthService, private toastr: ToastrService) { }

  public chart1 = {
    chart: {
      height: 308,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Products',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }],
    stroke: {
      width: [0, 4]
    },
    title: {
      show: false
    },
    legend: {
      show: false
    },
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    colors: ['#0084ff', '#00ca00' ],
    xaxis: {
      labels: {
        show: false,
      },
      type: 'datetime'
    },
    yaxis: [{
      labels: {
        show: false,
      }
    }, {
      labels: {
        show: false,
      }
    }],
  };

  ngOnInit() {
    this.userId = this.auth.userData;
    this.product.getMyDrugstoc(this.userId).subscribe(res => {
      console.log(res)
      this.data = res;
      this.listData = res;
    })

    this.product.getCategory().subscribe(res => {
      console.log(res)
      this.category = res;
    })
    this.cartItem = this.product.getCatItem();
  }

  getNumberInCategory(title) {
    let resp = this.data.filter(a => a.categ_id[1] === title);
    return resp.length;
  }
  
  getPercentage(title) {
    let resp = this.data.filter(a => a.categ_id[1] === title);

    let amd = (resp.length / this.data.length) * 100;
    return amd;
  }

  changeCatgory(value) {
    let resp = this.listData.filter(a => a.categ_id[1] === value);
    this.data = resp;
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
