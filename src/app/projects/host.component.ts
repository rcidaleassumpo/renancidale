import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <p>
      helloWorld
      <app-socialmedialinks></app-socialmedialinks>
    </p>
  `,
  styles: []
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
