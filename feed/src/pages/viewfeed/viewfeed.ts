import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursePage } from '../course/course';

@Component({
	selector: 'viewfeed',
	templateUrl: 'viewfeed.html'
})

export class FeedsPage {
	feeds: any;

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
	}

	ionViewDidEnter() {
		this.getAllFeeds();
	}

	getAllFeeds() {
		this.courseService.getFeeds().subscribe(response => {
			this.feeds = response;
		});
	}


}