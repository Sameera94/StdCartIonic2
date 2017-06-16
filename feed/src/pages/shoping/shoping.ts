import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController, NavParams } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursePage } from '../course/course';
import { ToastController } from 'ionic-angular';

@Component({
	template: `
    <ion-list class="popover-page">
      <ion-row>
        <ion-col>
		<ion-item>
          <h1>My Cart</h1>
		  </ion-item>
        </ion-col>
      </ion-row>
	  <ion-item>Total Items : <span item-right>{{ cartItems.length }}</span></ion-item>
	  <ion-item>Total Amount : <span item-right>Rs. {{ totalAmont| number : '1.2-2'}}</span></ion-item>
	  <ion-item *ngFor="let item of cartItems">
      + &nbsp; {{ item.name }}
		<ion-icon name="ios-remove-circle-outline" item-right (click)="onClickRemove(item.id)"></ion-icon>
      </ion-item>
    </ion-list>
	<button ion-button full clear>
		<ion-icon name="cart"></ion-icon>
		&nbsp;View Cart
	  </button>
  `
})
export class CartPopoverPage {
	cartItems: any
	totalAmont: GLfloat

	constructor(private navParams: NavParams, private courseService: CourseService, private storage: Storage) {
		this.cartItems = []
		this.getAllCartItems()
		this.totalAmont = 0
	}

	ngOnInit() {
		if (this.navParams.data) {
			// this.cartItems = this.navParams.data.cartItems;
			// this.count = this.navParams.data.count;
		}
	}

	onClickRemove(item) {

		this.courseService.removeItemFromCart(item).subscribe(response => {
			console.log(response);
			this.getAllCartItems()
			this.updateTotalAmount()
		});
	}

	getAllCartItems() {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.getAllItemsInCart(userId).subscribe(response => {
					this.cartItems = response
					this.updateTotalAmount()
				});
			}
		);
	}

	updateTotalAmount() {
		this.totalAmont = 0
		this.cartItems.filter((item) => {
			this.totalAmont = this.totalAmont + item.price;
		})
	}
}


@Component({
	selector: 'shoping',
	templateUrl: 'shoping.html'
})
export class ShopingPage {
	items: any;
	updatedItems: any;
	//itemCount: GLint

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage, private popoverCtrl: PopoverController, public toastCtrl: ToastController) {
	}

	ngOnInit() {
	}

	ionViewDidEnter() {
		this.getAllItems();
		//this.updateItemCount();
	}

	getAllItems() {
		this.courseService.getAllItems().subscribe(response => {
			this.items = response;
			this.updatedItems = this.items;
		});
	}

	onClickItem(item) {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.insertItemToCart(userId, item.id, 1).subscribe(response => {
					this.showItemAddedToast()
				});
			}
		);
	}

	onCategoryChange(selected) {

		if (selected == "all") {
			this.updatedItems = this.items;
		} else {
			this.updatedItems = this.items.filter((item) => {
				if (item.category == selected) {
					return item;
				}
			})
		}
	}

	onPriceChange(selected) {
		if (selected == "lowtohigh") {
			this.updatedItems.sort((a: any, b: any) => {
				if (a.price < b.price) {
					return -1;
				} else if (a.price > b.price) {
					return 1;
				} else {
					return 0;
				}
			});
		} else {
			this.updatedItems.sort((a: any, b: any) => {
				if (a.price < b.price) {
					return 1;
				} else if (a.price > b.price) {
					return -1;
				} else {
					return 0;
				}
			});
		}
	}

	presentPopover(ev) {
		let popover = this.popoverCtrl.create(CartPopoverPage, {
		});
		popover.present({
			ev: ev
		});
	}

	showItemAddedToast() {
		let toast = this.toastCtrl.create({
			message: 'New item Added!',
			duration: 2000,
			position: 'bottom'
		});

		toast.present(toast);
	}

	// updateItemCount() {
	// 	this.storage.get('userId').then(
	// 		(userId) => {
	// 			this.courseService.getAllItemsInCart(userId).subscribe(response => {
	// 				this.itemCount = response.length
	// 			});
	// 		}
	// 	);
	// }

	searchItems(ev) {
		// Reset items back to all of the items
		this.updatedItems = this.items;

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.updatedItems = this.updatedItems.filter((item) => {
				return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}
