import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams , ToastController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { storeProvider } from '../../providers/services-user/storeService';

@IonicPage()
@Component({
  selector: 'page-add-products',
  templateUrl: 'add-products.html',
})
export class AddProductsPage {
storeList : any = [];
numbers=['26','28','30','32','34','36','38','40','42','44','46'];
length=["P","PP","M","G","GG","P ao G" , "P ao GG"]
typeLength:boolean=false;
typeNumbers:boolean=false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb:FormBuilder,
    public productProvider:ProductsProvider,
    public storeProvider:storeProvider,
    public toast : ToastController) {
      this.typeLength = true;
      storeProvider.read()
      .subscribe((resp:any)=>{
        this.storeList = resp;
      })
      console.log(this.length);

  }

  form = this.fb.group({
    id : [''] ,
    idEmpresa : [0,[Validators.required]] ,
    description : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    length : [0,[Validators.required,Validators.minLength(1),Validators.maxLength(256)]],
    value : [0.00,[Validators.required,Validators.minLength(1),Validators.maxLength(256)]]
  })

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductsPage');
  }

  addProducts(){
    console.log(this.form.value);
    if(this.form.invalid)
      return;
    this.productProvider.save(this.form.value)
    .subscribe((resp:any)=>{
      const toast = this.toast.create({
        message: 'Product was created !!!',
        duration: 2000,
        cssClass:'msg-sucess'
      });
      toast.present();
    })

  }
  typeLengthMethod(){
    if(this.typeLength){
      this.typeLength = false ;
      this.typeNumbers = true;
    }else{
      this.typeLength = true ;
      this.typeNumbers = false;
    }
  }
}
