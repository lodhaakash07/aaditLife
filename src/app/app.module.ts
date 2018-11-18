import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from './auth/auth.provider'
export const  firebase =  {
    apiKey: "AIzaSyAPrA2TRP-YYhcVXnWWhbCfddHnu0kn_AA",
    authDomain: "aaditfirebaseauth.firebaseapp.com",
    databaseURL: "https://aaditfirebaseauth.firebaseio.com",
    projectId: "aaditfirebaseauth",
    storageBucket: "aaditfirebaseauth.appspot.com",
    messagingSenderId: "48119150430"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
