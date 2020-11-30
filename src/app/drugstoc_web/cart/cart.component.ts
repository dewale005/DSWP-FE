import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import jQuery from 'jquery';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit, OnDestroy {
	public userId;
	public dispatch = {
		name: '',
		address: '',
		phone: ''
	};
	public cartData = [];
	public Total: any;
	public quantity: string;

	constructor(private product: ProductService, private auth: AuthService, private router: Router) {}

	ngOnInit() {
		this.userId = this.auth.userData;
		this.product.getProfile(this.userId).subscribe(res => {
			// console.log(res);
			this.dispatch.name = res['name'];
			this.dispatch.address = res['contact_address'];
			this.dispatch.phone = res['phone'];
			// console.log(this.dispatch, res)
		})
		this.cartData = this.product.getCatItem();
		console.log(this.cartData);
		this.product.updateCat(this.cartData).subscribe(res => {
			console.log(res)
		})
	}

	ngOnDestroy() {
		this.product.updateCat(this.cartData).subscribe(res => {
			console.log(res)
		})
	}

	placeOrder() {
		jQuery('#cart').removeClass('show');
		jQuery('#address').addClass('show');
		jQuery('#step1').removeClass('active');
		jQuery('#step1').addClass('done');
		jQuery('#step2').addClass('active');
	}

	decreaseQty(item) {
		if(item.quantity > 0) {
			item.quantity-= 1
		} 
		// this.cartData[id].quantity = number;
	}

	increaseQty(item) {
		item.quantity+= 1
		console.log(item)
		// this.product.editItemAQuantity()
	}

	removeItem(id) {
		// console.log(id)
		this.product.removeFromCart(id)
		this.cartData = this.product.getCatItem();
	}

	// jQuery('#place-order').click(function(){
	// });
	deliverAddress() {
		// jQuery('#deliver-address').click(function(){
		// });
		jQuery('#address').removeClass('show');
		jQuery('#payment').addClass('show');
		jQuery('#step2').removeClass('active');
		jQuery('#step2').addClass('done');
		jQuery('#step3').addClass('active');
	}

	paymentSuccess($event) {
		console.log($event)
		this.make_order();
	}

	paymentFailure() {
		
	}

	public getTotal() {
		let total = 0;
		for (let i = 0; i < this.cartData.length; i++) {
			total += this.cartData[i].list_price * this.cartData[i].quantity;
		}
		this.Total = total;
		return total;
	}

	make_order() {
		const data = this.cartData;
		let items = [];
		for (let i = 0; i < data.length; i++) {
			let obj = {
				name: data[i].name,
				product_id: data[i].id,
				product_uom: 1,
				product_uom_qty: data[i].quantity,
				price_unit: data[i].website_price,
				amount_total: data[i].website_price
			};
			items.push(obj);
		}
		console.log(items);
		this.product.makeOrder(this.userId, items).subscribe((resp) => {
      this.product.emptyCart();
			Swal.fire({
				icon: 'success',
				title: 'Your Order Has been submitted successfully',
				showConfirmButton: false,
			});
			this.router.navigate([ '/' ]);
			console.log(resp);
		});
	}
}
