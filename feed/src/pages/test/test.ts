import { Component } from '@angular/core';
import { CourseService } from '../../app/services/CourseService';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

declare var window;

@Component({
	selector: 'test',
	templateUrl: 'test.html'
})

export class TestPage {

	constructor(public navCtrl: NavController, public params: NavParams, private courseService: CourseService, public alertCtrl: AlertController,  private storage: Storage) {
	}
}
