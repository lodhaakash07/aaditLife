import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {

  private user;
  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage) {
    this.userLoginHandler();

  }

  ngOnInit() {

  }

  userLoginHandler(loggedIn?:boolean) {
    if(loggedIn) {
      this.router.navigate(['list'])
    } else {
      this.storage.get('userData').then((val) => {
        this.user = val;
        if (this.user) {
          if (this.user.isNewUser) {
            // Go to registration
          } else {
            this.router.navigate(['list'])
          }
        }
      });
    }
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) => {
        debugger
        let userData = this.initiliseUserData(credential);
        this.user = userData;
        this.storage.set('userData', this.user);
        this.userLoginHandler(true);
      })
  }

  private initiliseUserData(credential) {
    return {
      isNewUser: credential.additionalUserInfo.isNewUser,
      email: credential.additionalUserInfo.profile.email,
      family_name: credential.additionalUserInfo.profile.family_name,
      given_name: credential.additionalUserInfo.profile.given_name,
      id: credential.additionalUserInfo.profile.id,
      picture: credential.additionalUserInfo.profile.picture,
      name: credential.additionalUserInfo.profile.name,
      accessToken: credential.credential.accessToken,
      idToken: credential.credential.idToken,
      phoneNumber: credential.user.phoneNumber,
      creationTime: credential.user.metadata.creationTime
    }
  }


  logout() {
    this.afAuth.auth.signOut();
  }
}


interface User {
  isNewUser: boolean;
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  picture: string;
  name: string;
  accessToken: string;
  idToken: string;
  phoneNumber: string;
  creationTime: string;
}
