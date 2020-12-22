import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-itemdetail',
	templateUrl: './itemdetail.component.html',
	encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit {
  public quantity = 1;
  
  public dataItem = [];

	public data = {
		// title: '',
		// description: '',
		// prices: '',
		// quantity: '',
		// composition: '',
		// image: ''
		// id: ''
	};

	images = [
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' },
		{ src: 'https://dummyimage.com/600x385/000/fff' }
	];
	items = [
		{
			title: 'consectetur adipiscing elit',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '4',
			regular_price: '99.00',
			offer_price: '50.00',
			type: ''
		},
		{
			title: 'Sed dictum orci vel',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '5',
			regular_price: '199.00',
			offer_price: '15.00',
			type: 'New'
		},
		{
			title: 'neque venenatis',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '4',
			regular_price: '1000.00',
			offer_price: '500.00',
			type: ''
		},
		{
			title: 'Etiam interdum nisi et',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '4',
			regular_price: '100.00',
			offer_price: '50.00',
			type: ''
		},
		{
			title: 'Proin at diam sit amet',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '5',
			regular_price: '150.00',
			offer_price: '50.00',
			type: 'New'
		},
		{
			title: 'augue rhoncus ornare',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '4',
			regular_price: '599.00',
			offer_price: '99.00',
			type: ''
		},
		{
			title: 'Nulla venenatis mi sed',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '3',
			regular_price: '199.00',
			offer_price: '50.00',
			type: ''
		},
		{
			title: 'Etiam interdum nisi et',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '4',
			regular_price: '100.00',
			offer_price: '50.00',
			type: ''
		},
		{
			title: 'dignissim orci quis',
			subtitle: 'Proin sed risus mattis',
			image: 'https://dummyimage.com/384x250/000/fff',
			rating: '5',
			regular_price: '150.00',
			offer_price: '50.00',
			type: 'New'
		}
	];

	slideConfig = {
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '15',
					slidesToShow: 1
				}
			}
		],
		nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
		prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>'
	};

	sliderConfig1 = {
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '15',
					slidesToShow: 1
				}
			}
		],
		nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
		prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>'
	};

	constructor(
		private route: ActivatedRoute,
		private product: ProductService,
		private sanitizer: DomSanitizer,
		private toastr: ToastrService
	) {}

	ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.dataItem = this.product.getCatItem();
		this.product.getOneProduct(id).subscribe((resp) => {
			this.data = resp[0];
			console.log(resp);
		});
	}

	addToCat(item) {
		item.quantity = this.quantity;
		this.product.addToCart(item);
		this.toastr.info('Item has been added to cart', 'Added to Cart', );
  }
  
  public check_already_in_cart(id) {
		if (this.dataItem.length === 0) {
			return false;
		} else {
			for (let i = 0; i < this.dataItem.length; i++) {
				if (id === this.dataItem[i].id) {
					return true;
				}
			}
			return false;
		}
	}

	increaseQty() {
		this.quantity++;
	}

	decreaseQty() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	}
}
