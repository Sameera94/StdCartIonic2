import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CoursePage } from '../pages/course/course';
import { CoursesPage } from '../pages/courses/courses';
import { RegisterPage } from '../pages/register/register';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { NoticesPage } from '../pages/notices/notices';
import { YearListPage } from '../pages/yearlist/yearlist';
import { SemesterListPage } from '../pages/semesterlist/semesterlist';
import { DegreePage } from '../pages/degree/degree';
import { FavouritePage } from '../pages/favourite/favourite';
import { ShopingPage } from '../pages/shoping/shoping';
import { CartPopoverPage } from '../pages/shoping/shoping';
import { ProfilePage } from '../pages/profile/profile';
import { ExtraPage } from '../pages/extra/extra';
import { TestPage } from '../pages/test/test';
import { TestPipe } from '../pipes/testpipe';
import { BasicPage as PopoverBasicPage, PopoverPage as PopoverContentPage } from '../pages/popovers/basic/pages';
import { CourseService } from './services/CourseService';
import { AddCoursePage } from '../pages/addcourse/addcourse';
import { LessonPage } from '../pages/lesson/lesson';
import { ForumPage } from '../pages/forum/forum';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedsPage } from '../pages/viewfeed/viewfeed';


 
@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    TabsPage,
	LoginPage,
	RegisterPage,
	CoursePage,
	CoursesPage,
	HomePage,
	NoticesPage,
	YearListPage,
	SemesterListPage,
	DegreePage,
	FavouritePage,
	ShopingPage,
	TestPipe,
	PopoverBasicPage,
	PopoverContentPage,
	CartPopoverPage,
	ProfilePage,
	ExtraPage,
	TestPage,
	AddCoursePage,
	LessonPage,
	ForumPage,
	FeedbackPage,
	FeedsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxt0AleM1loQVTofGa2zmBizyUNIjgMLA'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    TabsPage,
	LoginPage,
	RegisterPage,
	CoursePage,
	CoursesPage,
	HomePage,
	NoticesPage,
	YearListPage,
	SemesterListPage,
	DegreePage,
	FavouritePage,
	ShopingPage,
	PopoverBasicPage,
	PopoverContentPage,
	CartPopoverPage,
	ProfilePage,
	ExtraPage,
	TestPage,
	AddCoursePage,
	LessonPage,
	ForumPage,
	FeedbackPage,
	FeedsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Geolocation,NativeGeocoder, Storage, CourseService]
})
export class AppModule {}
