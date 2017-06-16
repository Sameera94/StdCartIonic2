import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { RedditService } from './services/reddit.service'
import { LoginService } from './services/LoginService'
import { CourseService } from './services/CourseService'
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ShopingPage } from '../pages/shoping/shoping';
import { BasicPage as PopoverBasicPage, PopoverPage as PopoverContentPage } from '../pages/popovers/basic/pages';
import { ProfilePage } from '../pages/profile/profile';
import { ExtraPage } from '../pages/extra/extra';
import { TestPage } from '../pages/test/test';
import { CoursePage } from '../pages/course/course';
import { LessonPage } from '../pages/lesson/lesson';


@Component({
  templateUrl: 'app.html',
  providers: [RedditService, LoginService, CourseService]
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
