import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fr-user-edit',
  template: `
    <h3>User Edit</h3>

    <button type="button" class="btn btn-danger" (click)="done = true;">done</button>

    <button type="button" class="btn btn-warning" (click) = "onNavigate()">button</button>
  `,
  styles: []
})
export class UserEditComponent implements OnInit {

  private done: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.done) {
      return confirm('Do you suer?');
    }
  }

}
