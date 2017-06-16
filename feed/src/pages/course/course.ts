import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { LessonPage } from '../lesson/lesson';
import { FeedbackPage } from '../feedback/feedback';
import { ForumPage } from '../forum/forum';

declare var window;

@Component({
	selector: 'course',
	templateUrl: 'course.html'
})

export class CoursePage {

	contents: any
	courseId: any

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController,  private storage: Storage) {
	
		this.courseId = this.params.get('courseId');
	}

	ionViewDidEnter() {
		this.getAllCourses();
	}

	getAllCourses() {
		this.courseService.getAllCourseContents(this.courseId).subscribe(response => {
			this.contents = response;
			console.log(response)
		});
	}

	onClickcontent(con){
		this.navCtrl.push(LessonPage, {
			contentTitle: con.title,
			contentDescription: con.description
		});
	}

	postFeedback() {
		this.navCtrl.push(FeedbackPage, {
		});
	}

	postForum() {
			this.navCtrl.push(ForumPage, {
		});
	}

}
