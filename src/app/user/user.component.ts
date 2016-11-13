import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fr-user',
  template: `
        <h1>User Component</h1>
        <button type="button" class="btn btn-default" (click) = "onNavigate()" >Go To Home</button>
        <hr>
        {{ id }}
  `,
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {

  private id: string;

  private idSubscribed: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.idSubscribed = activatedRoute.params.subscribe((params: any) => this.id = params['id']);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.idSubscribed.unsubscribe;
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
