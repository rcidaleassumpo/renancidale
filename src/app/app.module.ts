import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SocialmedialinksModule } from './shared/socialmedialinks/socialmedialinks.module';


const routes: Routes = [
  { path: '', loadChildren: 'src/app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'src/app/about/about.module#AboutModule' },
  { path: 'projects', loadChildren: 'src/app/projects/projects.module#ProjectsModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialmedialinksModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
