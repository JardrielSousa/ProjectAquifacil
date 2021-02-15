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

}
