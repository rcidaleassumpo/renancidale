import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = ['About', 'Contact', 'Third'];
  activeLink = this.links[0];
  background = '';
}
