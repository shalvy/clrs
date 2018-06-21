import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-project-directory',
  templateUrl: './project-directory.component.html',
  styleUrls: ['./project-directory.component.css']
})
export class ProjectDirectoryComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  items: Observable<any[]>;

  company_role: string; company_name: string; company_address: string; company_contact: string; company_tel: string;
  company_mobile: string; company_email: string;
  constructor(public location: Location, private db: AngularFirestore) {
    this.items = db.collection('companydirectory', ref => ref.orderBy('name')).valueChanges();
  }
  saveItem() {
    // console.log('dimond');
    this.db.collection('companydirectory').add({
      'company_role': this.company_role,
      'company_name': this.company_name,
      'company_address': this.company_address,
      'company_contact': this.company_contact,
      'company_tel': this.company_tel,
      'company_mobile': this.company_mobile,
      'company_email': this.company_email,
    });
    this.company_email = ''; this.company_mobile = ''; this.company_tel = ''; this.company_contact = '';
    this.company_address = ''; this.company_name = ''; this.company_role = '';

  }
  ngOnInit() {
  }

}
