import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fr-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{ param }}
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  private param: String; 

  private subscribed: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscribed = activatedRoute.queryParams.subscribe((params: any) => this.param = params['analytics']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }
}
