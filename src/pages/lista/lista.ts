import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storeProvider } from '../../providers/services-user/storeService';
/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  storeList : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storeProvider:storeProvider) {
    storeProvider.read()
    .subscribe((resp:any)=>{
      this.storeList = resp;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
