import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as http from 'http';
import "rxjs/add/operator/map"

import {ContactsService} from '../../services/contacts.service';
import Any = jasmine.Any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContacts:Any;
 motCle:String="";
 currentPage:number=0;
 size:number=5;
 pages:Array<number>;
  constructor(private http:Http,public contactsService:ContactsService) { }

  ngOnInit() {

  }
  doSearch(){
    this.contactsService.getContact(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageContacts=data;
          this.pages=Array<number>(data.totalPages)
        },err=>{
          console.log(err);
        }
      )
  }
  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();

  }
}
