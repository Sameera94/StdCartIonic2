import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { CoursesPage } from '../courses/courses';

declare var window;

@Component({
	selector: 'addcourse',
	templateUrl: 'addcourse.html'
})

export class AddCoursePage {

	contentTitle: String;
	contentDescription: String;

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController,  private storage: Storage) {
	}

	// postCourse() {
	// 	this.courseService.createContent(this.contentTitle, this.contentDescription).subscribe(response => {
	// 		console.log(response);
	// 		this.courseTitle = ""
	// 		this.contentDescription = ""
	// 		this.navCtrl.push(CoursesPage, {
	// 		});
	// 	});
	// }
}
