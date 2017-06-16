import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

declare var window;

@Component({
	selector: 'lesson',
	templateUrl: 'lesson.html'
})

export class LessonPage {

	contentTitle: any;
	contentDescription: any;


	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController,  private storage: Storage) {
		this.contentTitle = this.params.get('contentTitle');
		this.contentDescription = this.params.get('contentDescription');
	}
}
