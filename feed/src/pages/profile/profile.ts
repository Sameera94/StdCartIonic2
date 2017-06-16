import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

declare var window;

@Component({
	selector: 'profile',
	templateUrl: 'profile.html'
})

export class ProfilePage {

	name: String
	email: String
	password: String
	bdate: String
	phone: String

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController, private storage: Storage) {
		this.name = ""
		this.email = ""
		this.password = ""
		this.bdate = "1994/11/16"
		this.phone = "071-0589523"

		this.getProfileData()
		
	}

	ionViewDidEnter() {
		this.getProfileData()
	}

	getProfileData() {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.getProfileData(userId).subscribe(response => {
					this.name = response[0].name;
					this.email = response[0].email;
					this.password = response[0].password;
				});
			}
		);
	}

	onClickUpdateProfile() {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.updateProfileData(userId,this.name,this.email).subscribe(response => {
					this.getProfileData()
					this.showAlert("Sucessfully Updated!")
				});
			}
		);
	}

	//Custom functions
	showAlert(message) {
		let prompt = this.alertCtrl.create({
			message: message,
			buttons: [
				{
					text: 'Ok',
					handler: data => {
						console.log('OK clicked');
					}
				}
			]
		});
		prompt.present();
	}


}
