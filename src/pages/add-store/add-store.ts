import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { storeProvider } from '../../providers/services-user/storeService';

/**
 * Generated class for the AddStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-store',
  templateUrl: 'add-store.html',
})
export class AddStorePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private fb:FormBuilder,
     public storeProvider:storeProvider,
    public toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStorePage');
  }

  form = this.fb.group({
    id : [''] ,
    name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    owers : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(256)]],
  })

  AddStore(){
      console.log(this.form.value);
      if(this.form.invalid)
        return;
      this.storeProvider.save(this.form.value)
      .subscribe((resp:any)=>{
        const toast = this.toast.create({
          message: 'Store was created !!!',
          duration: 2000,
          cssClass:'msg-sucess'
        });
        toast.present();
      })
  
    
  }
}
