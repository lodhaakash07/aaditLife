import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  template: `
    Logged Out
  `
})
export class LogoutPage implements OnInit{
    constructor(private afAuth: AngularFireAuth,
        private router: Router,
        private storage: Storage) {

      }
    
    ngOnInit() {
        this.storage.get('userData').then((val) => {
            let user = val;
            if (user) {
                this.afAuth.auth.signOut();
                this.storage.remove('userData');
              } else {
                this.router.navigate(['auth'])
              }
            });
    }
    
}