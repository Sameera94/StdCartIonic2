import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

declare var window;

@Component({
	selector: 'feedback',
	templateUrl: 'feedback.html'
})

export class FeedbackPage {

	notices: any;
	noticeRate: String;
	noticeDescription: String;

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController, private storage: Storage) {
		this.notices = []
		this.noticeRate = ""
		this.noticeDescription = ""
	}

	ionViewDidEnter() {
		this.getAllNotices();
	}

	getAllNotices() {
		this.courseService.getAllForums().subscribe(response => {
			this.notices = response;
		});
	}

	postNotice() {

		
		this.courseService.postFeedback(this.noticeRate, this.noticeDescription).subscribe(response => {
			console.log(response);
			this.noticeRate = ""
			this.noticeDescription = ""
			this.getAllNotices();

			this.showAlert("Successfull","Thank you for your feedback!")
		});
			
		
	}

		//Custom functions
	showAlert(title, message) {
		let prompt = this.alertCtrl.create({
			title: title,
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

	// removeNotice(noticeId) {
	// 	this.courseService.removeNotice(noticeId).subscribe(response => {
	// 		console.log(response);
	// 		this.getAllNotices();
	// 	});
	// }

	// editNotice(noticeId, newTitle, newDescription){
	// 	this.courseService.updateNotice(noticeId, newTitle, newDescription).subscribe(response => {
	// 		console.log(response);
	// 		this.getAllNotices();
	// 	});
	// }

	// editNoticeAlert(notice) {
	// 	let prompt = this.alertCtrl.create({
	// 		title: 'Update Notice',
	// 		inputs: [
	// 			{
	// 				name: 'title',
	// 				placeholder: 'Title',
	// 				value: notice.title,
	// 			},
	// 			{
	// 				name: 'body',
	// 				placeholder: 'Body',
	// 				value: notice.body,
	// 			}, 
	// 		],
	// 		buttons: [
	// 			{
	// 				text: 'Cancel',
	// 				handler: data => {
	// 					console.log(data);
	// 				}
	// 			},
	// 			{
	// 				text: 'Save',
	// 				handler: data => {
	// 					this.editNotice(notice.id, data.title, data.body);
	// 				}
	// 			}
	// 		]
	// 	});
	// 	prompt.present();
	// }
}
