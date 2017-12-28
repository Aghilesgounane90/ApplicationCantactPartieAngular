import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/model.contact';
import {ContactsService} from '../../services/contacts.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact= new Contact();
  mode:number=1;
  constructor(private http:Http,public contactsService:ContactsService) { }

  ngOnInit() {
  }
  saveContact(){
  this.contactsService.saveContact(this.contact)
  .subscribe(data=>{
    this.contact=data;
    this.mode=2;
  },err=>{
    console.log(err)
  });
  }

}
