import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../app/model/model.contact';

@Injectable()
export class ContactsService{
  constructor(public http:Http){}

  getContacts(motCle:String,page:number,size:number){
    return this.http.get("http://127.0.0.1:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
      .map(resp=>resp.json())
  }

  getContact(id:number){
    return this.http.get("http://127.0.0.1:8080/contact/"+id)
      .map(resp=>resp.json())
  }

  updateContact(contact:Contact){
    return this.http.put("http://127.0.0.1:8080/contact/"+contact.id,contact)
      .map(resp=>resp.json())
  }

  saveContact(contact:Contact){
    return this.http.post("http://127.0.0.1:8080/contacts",contact)
      .map(resp=>resp.json())
  }
}
