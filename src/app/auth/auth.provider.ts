import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

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

@Injectable({ providedIn: 'root' })
export class AuthService {

  private user: any;
  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage) {

      this.storage.get('loggedInUser').then((val) => {
        if(!!val) {
          this.user = val;
        }
      });
    }

  public login() {
    if(!!this.user) {
      this.afAuth.auth.signOut();
      this.storage.remove("loggedInUser");
      this.user = null;
    }
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) => {
        this.user = this.initiliseUserData(credential);
        this.storage.set('loggedInUser', this.user);
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
    this.storage.remove("loggedInUser").then((val)=> {
      this.afAuth.auth.signOut();
      this.user = null;
    });
    
  }

  isLoggedIn() {
    return !!this.user;
  }
}
