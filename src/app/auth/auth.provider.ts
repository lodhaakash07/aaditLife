import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  public user: any;

  constructor(
   
  ) {
     
  }
}
