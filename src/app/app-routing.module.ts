import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';
import { HomeComponent } from './user/home.component';
import { USER_ROUTES } from './user/user.routes';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'user/:id', component: UserComponent, pathMatch: 'full' },
      { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
      { path: 'user', redirectTo: '/user/1' },
      { path: '', component: HomeComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
