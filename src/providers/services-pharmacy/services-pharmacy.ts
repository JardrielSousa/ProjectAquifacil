import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesPharmacyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesPharmacyProvider {
  private api : string = "http://localhost:3000/"
  constructor(public http: HttpClient) {

  }

  read(){
    return this.http.get(`${this.api}pharmacy`)
  }

}
