import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { LoginService } from '../../app/services/LoginService';
import {App} from 'ionic-angular'

@Component({
	selector: 'register-page',
	templateUrl: 'register.html'
})

export class RegisterPage {

	// Variables  
	name: String;
	email: String;
	password: String;
	confirmPassword: String;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, private loginService: LoginService,public app: App) {
		this.name		 = ""
		this.email		 = ""
		this.password	 = ""
		this.confirmPassword = ""
	}

	// UI Controller Actions
	onClickRegisterButton() {
		if (this.name != "" && this.email != "" && this.password != "" && this.confirmPassword != "") {
			if (this.password == this.confirmPassword) {
				this.registerNewUser(this.name, this.email, this.password);
			} else {
				this.showAlert("Error!","Passwords are not matching.")
			}		
		} else {
			this.showAlert("Error!","Please fill all the fields.")
		}
	}

	onClickCancelButton() {
		// this.navCtrl.push(LoginPage, {});
		 this.app.getRootNav().setRoot(LoginPage);	
	}

	// Custom functions
	showAlert(title, message) {
		let prompt = this.alertCtrl.create({
			title: title,
			message: message,
			buttons: [
				{
					text: 'Ok',
					handler: data => {}
				}
			]
		});
		prompt.present();
	}

	showSuccessAlert(title, message) {
		let prompt = this.alertCtrl.create({
			title: title,
			message: message,
			buttons: [
				{
					text: 'Ok',
					handler: data => {
						this.navCtrl.push(LoginPage, {});
					}
				}
			]
		});
		prompt.present();
	}

	registerNewUser(name, email, password) {

		this.loginService.createNewUser(name, email, password).subscribe(response => {
			if (response) {
				this.showSuccessAlert("Success!","New user created! Please login.");
			} else {
				this.showAlert("Login Failed!","Username or Password is Incorrect");
			}
		});
	}
}
