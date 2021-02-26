import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  private api: string = 'http://localhost:3000/products/'

  constructor(public http: HttpClient) {
  }

  read(){
    return this.http.get(`${this.api}`)
  }
  readBy(product){
    return this.http.get(`${this.api}?idEmpresa=`+product.id)
  }

  save(product){
    return this.http.post(`${this.api}`,product)
  }

}
