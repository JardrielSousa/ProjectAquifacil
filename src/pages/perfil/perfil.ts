import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProductsPage } from '../add-products/add-products';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { HomePage } from '../home/home';
import { ListaPage } from '../lista/lista';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  openHome(){
    this.navCtrl.push(HomePage)
  }
  openProfile(){
    this.navCtrl.push(PerfilPage)
  }
  openConfig(){
    this.navCtrl.push(ConfiguracoesPage)
  }
  openStores(){
    this.navCtrl.push(ListaPage)
  }
  closemenu(){
    this.navCtrl.pop()
  }

  OpenAddProducts(){
    this.navCtrl.push(AddProductsPage)
  }

}
