import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { AuthService } from './auth.provider'
import { LogoutPage } from './logout.page'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthPage
      },
      {
        path: 'logout',
        component: LogoutPage
      }
    ])
  ],
  declarations: [AuthPage, LogoutPage],
  providers: [AuthService]
})
export class AuthPageModule {}
