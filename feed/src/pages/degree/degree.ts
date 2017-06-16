import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursesPage } from '../courses/courses';

@Component({
	selector: 'degree',
	templateUrl: 'degree.html'
})

export class DegreePage {

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
	}

	onClickDegree(semester) {

		this.navCtrl.push(CoursesPage, {
		},{
      		animation: 'ios-transition'
 		});
	}
}