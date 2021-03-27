import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class storeProvider {
  private api: string = 'http://localhost:3000/store'

  constructor(public http: HttpClient) {
  }

  read(){
    return this.http.get(`${this.api}`)
  }

  readBy(store){
    return this.http.get(`${this.api}?idEmpresa=`+store.id)
  }

  save(store){
    return this.http.post(`${this.api}`,store)
  }

}
