import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  productsList:any = []
  product:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productProvider:ProductsProvider) {
    var id = navParams.data.product.id
    productProvider.readBy({id})
    .subscribe((resp:any)=>{
        this.productsList = resp
        console.log(this.productsList);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
