import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;  
    showRoot = false;
  /*
  rootPage:any = Entrada1;
*/  config: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    }
  );
  
  
  if (localStorage.getItem('id')){
    this.rootPage = 'DashboardPage';
 }else{
   this.rootPage = "HomePage";
   localStorage.clear();
 }
 this.showRoot = true;

  }
}

