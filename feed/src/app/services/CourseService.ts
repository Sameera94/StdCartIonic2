import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'


@Injectable()
export class CourseService {
    http: any;
    baseUrl: String;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3001'
    }

	// Get all Orders
	getAllCourses() {
		return this.http.post(this.baseUrl+'/studentGetAllCourses', {
		}).map(res => res.json());
	}

	markCourseAsFavourite(stdId, courseId){
		return this.http.post(this.baseUrl+'/markCourseAsFavourite', {
			"stdId": stdId,
			"courseId": courseId
		}).map(res => res.json());
	}

	markCourseAsUnFavourite(stdId, courseId){
		return this.http.post(this.baseUrl+'/markCourseAsUnFavourite', {
			"stdId": stdId,
			"courseId": courseId
		}).map(res => res.json());
	}

	getFavouriteCourses(stdId){
		return this.http.post(this.baseUrl+'/getFavouriteCourses', {
			"stdId": stdId
		}).map(res => res.json());
	}

	getAllNotices(){
		return this.http.post(this.baseUrl+'/getAllNotices', {
		}).map(res => res.json());
	}

	postNotice(title, description,courseId){
		return this.http.post(this.baseUrl+'/postNotice', {
			"title"		  : title,
			"description" : description,
			"courseId"	  :courseId
		}).map(res => res.json());
	}

	removeNotice(noticeId){
		return this.http.post(this.baseUrl+'/removeNotice', {
			"noticeId"		  : noticeId
		}).map(res => res.json());
	}

	updateNotice(noticeId, newTitle, newDescription){
		return this.http.post(this.baseUrl+'/updateNotice', {
			"noticeId" : noticeId,
			"newTitle" : newTitle,
			"newDescription" : newDescription
		}).map(res => res.json());
	}

	getProfileData(userId){
		return this.http.post(this.baseUrl+'/getProfileData', {
			"userId" : userId
		}).map(res => res.json());
	}

	updateProfileData(userId, name, email){
		return this.http.post(this.baseUrl+'/updateProfileData', {
			"userId" : userId,
			"name": name,
			"email": email
		}).map(res => res.json());
	}

	createCourse(title){
		return this.http.post(this.baseUrl+'/createCourse', {
			"title" : title
		}).map(res => res.json());
	}

	getAllCourseContents(courseId){
		return this.http.post(this.baseUrl+'/getAllCourseContents', {
			"courseId" : courseId
		}).map(res => res.json());
	}

	getAllForums(){
		return this.http.post(this.baseUrl+'/getAllForum', {
		}).map(res => res.json());
	}

	postForum(title, description,userName){
		return this.http.post(this.baseUrl+'/postForum', {
			"title"		  : title,
			"description" : description,
			"userName"	  : userName
		}).map(res => res.json());
	}

	postFeedback(rate, description){
		return this.http.post(this.baseUrl+'/postFeedback', {
			"rate"		  : rate,
			"description" : description
		}).map(res => res.json());
	}

	getFeeds(){
		return this.http.post(this.baseUrl+'/getFeeds', {
		}).map(res => res.json());
	}








	//Shoping
	getAllItems() {
		return this.http.post(this.baseUrl+'/getAllItems', {
		}).map(res => res.json());
	}
	
	insertItemToCart(userId, ItemId, count) {
		return this.http.post(this.baseUrl+'/insertItemToCart', {
			"userId": userId,
			"ItemId": ItemId,
			"count" : count
		}).map(res => res.json());
	}

	removeItemFromCart(cartItemId) {
		return this.http.post(this.baseUrl+'/removeItemFromCart', {
			"cartItemId": cartItemId
		}).map(res => res.json());
	}

	getAllItemsInCart(userId){
		return this.http.post(this.baseUrl+'/getAllItemsInCart', {
			"userId": userId
		}).map(res => res.json());
	}

}