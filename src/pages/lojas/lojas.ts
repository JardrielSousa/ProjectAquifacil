import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storeProvider } from '../../providers/services-user/storeService';
import { ProductsPage } from '../products/products';


/**
 * Generated class for the LojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lojas',
  templateUrl: 'lojas.html',
})
export class LojasPage {
  storeList : any = []
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storeProvider : storeProvider) {
    storeProvider.read().subscribe((resp:any)=>{
      console.log(resp);
      this.storeList = resp
    })
  }

  ionViewDidLoad() {

  }

  chosenProduct(product){
    this.navCtrl.push(ProductsPage,{product:product});
  }
}
