import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaguemenosPage } from '../paguemenos/paguemenos';
import { DjePage } from '../dje/dje';
import { NossasenhoraPage } from '../nossasenhora/nossasenhora';
import { ServicesPharmacyProvider } from '../../providers/services-pharmacy/services-pharmacy';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pharmacyService:ServicesPharmacyProvider) {
  }

  ionViewDidLoad() {
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
