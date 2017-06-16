import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class LoginService {
    http: any;
    baseUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3001'
    }

	// Validate User Login
    validateUser(username, password) {
        return this.http.post(this.baseUrl + '/studentLogin',{
			"username": username,
			"password": password
		}).map(res => res.json());
    }

	createNewUser(name, email, password) {
		return this.http.post(this.baseUrl + '/studentRegister',{
			"name" 		  : name,
			"email"		  : email,
			"password"    : password 
		}).map(res => res.json());
	}

}