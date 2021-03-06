import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SocialmedialinksModule } from '../shared/socialmedialinks/socialmedialinks.module';

import { HostComponent } from './host.component';

const routes: Routes = [
  { path: '', component: HostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SocialmedialinksModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [HostComponent]
})
export class ProjectsModule { }
