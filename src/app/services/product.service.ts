import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { array, List } from '@amcharts/amcharts4/core';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private cartItem = [];

	public photo = 'assets/images/drugstoc.png';

	private BASE_URL = environment.apiEndpoint;

	constructor(private http: HttpClient) {}

	getCategory() {
		return this.http.get(`${this.BASE_URL}/category`);
	}

	getAllProducts(page) {
		return this.http.get(`${this.BASE_URL}/category-products?page=${page}`);
	}

	getProductCategory(id, page) {
		return this.http.get(`${this.BASE_URL}/category-products/${id}?page=${page}`);
	}

	getOneProduct(id) {
		return this.http.get(`${this.BASE_URL}/product/${id}`);
	}

	addToCart(item) {
		return this.cartItem.push(item);
	}

	getCart() {
		let id = localStorage.getItem('user')
	  	this.http.get(`${this.BASE_URL}/mycart/${id}`).subscribe(res => {
			  let arr: any = res;
			  this.cartItem = arr;
		  })
	}

	removeFromCart(id) {
		this.cartItem.splice(id, 1)
		console.log(this.cartItem, id);
	}

	emptyCart() {
		return (this.cartItem = []);
	}

	getCatItem() {
		return this.cartItem;
	}

	getMyOrders(id) {
		return this.http.get(`${this.BASE_URL}/my-orders/${id}`);
	}

	getMyInvoice(id) {
		return this.http.get(`${this.BASE_URL}/my-invoice/${id}`);
	}

	getMyDrugstoc(id) {
		return this.http.get(`${this.BASE_URL}/my-drugtoc/${id}`);
	}

	getProfile(id) {
		return this.http.get(`${this.BASE_URL}/profile/${id}`);
	}

	makeOrder(id, payload) {
		return this.http.post(`${this.BASE_URL}/create-order/${id}`, payload);
	}

	search() {
		return this.http.get(`${this.BASE_URL}/search`);
	}

	changePhoto(phoro) {
		return (this.photo = phoro);
	}

	search_result(query) {
		return this.http.post(`${this.BASE_URL}/search-result`, {query});
  }
  
  per_company() {
    return this.http.get(`${this.BASE_URL}/company-list`)
  }

  lis_per_company(query) {
    return this.http.post(`${this.BASE_URL}/per-company`, {query})
  }

  updateCat(data) {
	  let id = localStorage.getItem('user')
	  return this.http.post(`${this.BASE_URL}/mycart/${id}`, data)
  }
}
