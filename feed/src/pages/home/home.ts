import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DegreePage } from '../degree/degree'
import { ShopingPage } from '../shoping/shoping';
import { ProfilePage } from '../profile/profile';
import { ExtraPage } from '../extra/extra';
import { ForumPage } from '../forum/forum';
import { FeedbackPage } from '../feedback/feedback';
import { FeedsPage } from '../viewfeed/viewfeed'
import { Storage } from '@ionic/storage';

declare var google: any;

@Component({
	selector: 'home',
	templateUrl: 'home.html'
})

export class HomePage {

	isHidden:Boolean

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController, private storage: Storage) {
		
		this.isHidden = false
		
		this.storage.get('userType').then(
			(userType) => {
				if(userType==100){
					this.isHidden = false
				}else{
					this.isHidden = true
				}
			}
		);
	}

	onClickCourseList() {
		this.navCtrl.push(DegreePage, {
		});
	}

	onClickShoping() {
		this.navCtrl.push(ForumPage, {
		});
	}

	onClickProfile() {
		this.navCtrl.push(ProfilePage, {
		});
	}

	onClickExtra() {
		this.navCtrl.push(FeedbackPage, {
		});
	}


	onClickFeedsPage() {
		this.navCtrl.push(FeedsPage, {
		});
	}

	

}