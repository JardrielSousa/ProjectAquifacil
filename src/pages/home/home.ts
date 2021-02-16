import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LojasPage } from '../lojas/lojas';
import { BaresPage } from '../bares/bares';
import { RestaurantesPage } from '../restaurantes/restaurantes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){

  }

  abrirlojas(){
    this.navCtrl.push(LojasPage)
  }
  abrirbares(){
    this.navCtrl.push(BaresPage)
  }
  abrirrestaurantes(){
    this.navCtrl.push(RestaurantesPage)
  }

}
