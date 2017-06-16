import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursePage } from '../course/course';

@Component({
	selector: 'favourite',
	templateUrl: 'favourite.html'
})

export class FavouritePage {
	courses: any;

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
	}

	ionViewDidEnter() {
		this.getAllFavouriteCourses();
	}

	getAllFavouriteCourses() {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.getFavouriteCourses(userId).subscribe(response => {
					this.courses = response;
				});
			}
		);
	}

	onClickCourse(course) {

		this.navCtrl.push(CoursePage, {
			courseId: course.id
		},{
      		animation: 'ios-transition'
 		});
	}

}