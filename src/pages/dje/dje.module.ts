import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DjePage } from './dje';

@NgModule({
  declarations: [
    DjePage,
  ],
  imports: [
    IonicPageModule.forChild(DjePage),
  ],
})
export class DjePageModule {}
