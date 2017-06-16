import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { SemesterListPage } from '../semesterlist/semesterlist';

@Component({
	selector: 'yearlist',
	templateUrl: 'yearlist.html'
})

export class YearListPage {
	courses: any;

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
	}

	onClickYear(year) {

		this.navCtrl.push(SemesterListPage, {
		},{
      		animation: 'ios-transition'
 		});
	}
}