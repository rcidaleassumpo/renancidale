import { NgModule } from '@angular/core';

import { SocialmedialinksComponent } from '../../components/socialmedialinks/socialmedialinks.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    SocialmedialinksComponent
  ],
  declarations: [SocialmedialinksComponent]
})
export class SocialmedialinksModule { }
