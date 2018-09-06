import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { SocialmedialinksModule } from '../shared/socialmedialinks/socialmedialinks.module';

import { HostComponent } from './host.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: HostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SocialmedialinksModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [HostComponent]
})
export class AboutModule { }
