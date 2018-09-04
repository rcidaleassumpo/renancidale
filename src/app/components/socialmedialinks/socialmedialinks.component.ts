import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faLinkedin, faGithub);

@Component({
  selector: 'app-socialmedialinks',
  template: `
    <div fxLayoutGap="10px" >
        <a href="https://www.linkedin.com/in/renancidale/"><fa-icon [icon]="['fab', 'linkedin']" size="2x"></fa-icon></a>
        <a href="https://www.facebook.com/renan.cidaleassumpcao"><fa-icon [icon]="['fab', 'facebook']" size="2x"></fa-icon></a>
        <a href="https://github.com/rcidaleassumpo"><fa-icon [icon]="['fab', 'github']" size="2x"></fa-icon></a>
    </div>
  `,
  styleUrls: ['./socialmedialinks.component.css']
})
export class SocialmedialinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
