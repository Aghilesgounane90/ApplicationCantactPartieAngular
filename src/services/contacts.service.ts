import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactsService{
  constructor(public http:Http){}

  getContact(motCle:String,page:number,size:number){
    return this.http.get("http://127.0.0.1:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
      .map(resp=>resp.json())
  }
}
