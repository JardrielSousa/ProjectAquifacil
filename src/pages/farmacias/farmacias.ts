import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaguemenosPage } from '../paguemenos/paguemenos';
import { DjePage } from '../dje/dje';
import { NossasenhoraPage } from '../nossasenhora/nossasenhora';

/**
 * Generated class for the FarmaciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmacias',
  templateUrl: 'farmacias.html',
})
export class FarmaciasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmaciasPage');
  }
  abrirpaguemenos(){
    this.navCtrl.push(PaguemenosPage)
  }
  abrirdje(){
    this.navCtrl.push(DjePage)
  }
  abrirreginaldo(){
    this.navCtrl.push(NossasenhoraPage)
  }
}
