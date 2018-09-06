import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Renderer2, ViewChildren, QueryList } from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable, fromEvent, of, combineLatest, interval, timer } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Card {
  position: number;
  zIndex: number;
  transform: number;
}


library.add(
  faAngular,
  faJsSquare,
  faPython,
  faCss3,
  faHackerrank,
  faHtml5,
  faReact,
  faVuejs,
  faChevronRight,
  faChevronLeft
);

@Component({
  selector: 'app-host',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class HostComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
