import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.provider';

@Component({
  template: `
    Logged Out
  `
})
export class LogoutPage implements OnInit{
    constructor(private autService: AuthService,
                private router: Router) {

    }
    
    ngOnInit() {
        if(this.autService.isLoggedIn()) {
            this.autService.logout();
            setTimeout(()=> this.router.navigate(['auth']),4000);
        } else {
            this.router.navigate(['auth']);
        }
    }
    
}