import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursesPage } from '../courses/courses';

@Component({
	selector: 'semesterlist',
	templateUrl: 'semesterlist.html'
})

export class SemesterListPage {

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
	}

	onClickSemester(semester) {

		this.navCtrl.push(CoursesPage, {
		},{
      		animation: 'ios-transition'
 		});
	}
}