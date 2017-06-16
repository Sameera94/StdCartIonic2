import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursePage } from '../course/course';
import { AddCoursePage } from '../addcourse/addcourse';

@Component({
	selector: 'courses',
	templateUrl: 'courses.html'
})

export class CoursesPage {
	courses: any;
	isHidden: Boolean

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
		this.isHidden = true

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

	ngOnInit() {
	}
	
	ionViewDidEnter() {
		this.getAllCourses();
	}

	getAllCourses() {
		this.courseService.getAllCourses().subscribe(response => {
			this.courses = response;
		});
	}

	onClickCourse(course) {

		this.navCtrl.push(CoursePage, {
			courseId: course.id
		},{
      		animation: 'ios-transition'
 		});
	}

	onClickFavourite(course) {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.markCourseAsFavourite(userId, course.id).subscribe(response => {
					this.getAllCourses();
				});
			}
		);
	}

	onClickUnFavourite(course) {
		this.storage.get('userId').then(
			(userId) => {
				this.courseService.markCourseAsUnFavourite(userId, course.id).subscribe(response => {
					this.getAllCourses();
				});
			}
		);
	}

	getImageName(){
		return "ios-star-outline";
	}

	addCourse() {
		this.navCtrl.push(AddCoursePage, {
		});
	}
}