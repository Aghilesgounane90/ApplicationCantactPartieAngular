import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as http from 'http';
import "rxjs/add/operator/map"
import Any = jasmine.Any;
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContacts:Any;
  constructor(private http:Http,public contactsService:ContactsService) { }

  ngOnInit() {
    this.contactsService.getContact()
      .subscribe(data=>{
        this.pageContacts=data;
        },err=>{
        console.log(err);
        }
      )
  }
}
