import { NgModule } from '@angular/core';

import { SocialmedialinksComponent } from '../../components/socialmedialinks/socialmedialinks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';



@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SocialmedialinksComponent
  ],
  declarations: [SocialmedialinksComponent]
})
export class SocialmedialinksModule { }
