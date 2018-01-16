import { Component, OnInit } from '@angular/core';


import 'rxjs/add/operator/map';

import {ContactsService} from '../../services/contacts.service';

import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Contact} from '../model/model.contact';




@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContacts:any;
 motCle:String='';
 currentPage:number=0;
 size:number=5;
 pages:Array<number>;
  constructor(private http:Http,public contactsService:ContactsService,public router:Router) { }

  ngOnInit() {
    this.contactsService.getContacts(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageContacts=data;
          this.pages=Array<number>(data.totalPages);
        },err=>{
          console.log(err);
        }
      );
  }
  doSearch(){
    this.contactsService.getContacts(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageContacts=data;
          this.pages=Array<number>(data.totalPages);
        },err=>{
          console.log(err);
        }
      );
  }
  chercher(){
    this.doSearch();
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }
  onEditCantact(id:number){
  this.router.navigate(['edit-contact',id])
  }

  onDeleteCantact(c:Contact){
  this.contactsService.deleteContact(c.id)
    .subscribe(data=>{
      this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(c),1
      );

      alert("contacte supprimé");
      },err=>{
        console.log(err);
      }
    );
  }
}
