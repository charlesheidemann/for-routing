import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { UserEditComponent } from './user-edit.component';

@Injectable()
export class UserEditGuard implements CanDeactivate<UserEditComponent> {

    canDeactivate(
        component: UserEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate() ? component.canDeactivate() : true;
    }

}