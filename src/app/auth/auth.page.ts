import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.provider';


@Component({
  selector: 'app-home',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements AfterViewChecked {

  private user;
  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngAfterViewChecked() {

    if(this.authService.isLoggedIn()) {

      this.router.navigate(['list']);
    }
  }

  login() {
    this.authService.login();
    let isLoggedIn = setInterval(()=> {
      if(this.authService.isLoggedIn()) {
        clearInterval(isLoggedIn);
        this.router.navigate(['list']);
      }
    } , 500)
  }
}

