import { Component } from '@angular/core';

import { HomePage } from '../home/home'
import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';
import { FavouritePage } from '../favourite/favourite';
import { NoticesPage } from '../notices/notices';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Home: any 	= HomePage;
  tab1Root: any 	= FavouritePage;
  tabNotices: any 	= NoticesPage;	
  tab2Root: any 	= SettingsPage;


  constructor() {

  }
}
