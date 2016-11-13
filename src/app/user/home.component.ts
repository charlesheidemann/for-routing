import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fr-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
