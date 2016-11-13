import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { HomeComponent } from './user/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user/:id', component: UserComponent },
      { path: '', component: HomeComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
