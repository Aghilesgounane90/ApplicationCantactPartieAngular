import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactsService{
  constructor(public http:Http){}

  getContact(){
    return this.http.get("http://127.0.0.1:8080/chercherContacts?mc=e1&size=6&page=1")
      .map(resp=>resp.json())
  }
}
