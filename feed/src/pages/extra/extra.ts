import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseService } from '../../app/services/CourseService';
import { Storage } from '@ionic/storage';
import { CoursePage } from '../course/course';

@Component({
	templateUrl: 'extra.html'
})

export class ExtraPage {
	
	startTime: any

	constructor(public navCtrl: NavController, private courseService: CourseService, private storage: Storage) {
		var thisTime =  new Date().getTime()
		this.startTime = thisTime
		console.log("Start Time: "+this.startTime)
	}

	ngOnInit() {
	}
	
	stopTimer() {

		var currentTime = new Date().getTime()
		console.log("Current Time: " + currentTime)

		var timeDif =  currentTime - this.startTime

		console.log("Time Difference: "+ timeDif + " miliseconds");
	}
}