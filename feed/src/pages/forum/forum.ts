import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

declare var window;

@Component({
	selector: 'forum',
	templateUrl: 'forum.html'
})

export class ForumPage {

	notices: any;
	noticeTitle: String;
	noticeDescription: String;

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController, private storage: Storage) {
		this.notices = []
		this.noticeTitle = ""
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

		this.storage.get('userName').then(
			(userName) => {
				this.courseService.postForum(this.noticeTitle, this.noticeDescription, userName).subscribe(response => {
					console.log(response);
					this.noticeTitle = ""
					this.noticeDescription = ""
					this.getAllNotices();
				});
			}
		);
		
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
