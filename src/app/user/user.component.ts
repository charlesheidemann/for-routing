import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fr-user',
  template: `
        <h1>User Component</h1>
        <a [routerLink] = "['/user']">User</a>
        <button type="button" class="btn btn-default" (click) = "onNavigate()" >Go To Home</button>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
