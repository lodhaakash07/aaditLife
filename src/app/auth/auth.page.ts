import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.provider';


@Component({
  selector: 'app-home',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {

  private user;
  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {

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

