import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainHomeComponent } from './main-home.component';

const routes: Routes = [
  { path: '', component: MainHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MainHomeComponent]
})
export class HomeModule { }
