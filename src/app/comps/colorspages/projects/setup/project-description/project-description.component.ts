import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  items: Observable<any[]>;

  section1: string; section1_name: string; section2: string; section2_name: string; section3: string; section3_name: string;
  section4: string; section4_name: string; section5: string; section5_name: string; section6: string; section6_name: string;
  constructor(public location: Location, private db: AngularFirestore) {
    this.items = db.collection('sectiontest1', ref => ref.orderBy('section1_name')).valueChanges();
    this.items = db.collection('sectiontest2', ref => ref.orderBy('section2_name')).valueChanges();
    this.items = db.collection('sectiontest3', ref => ref.orderBy('section3_name')).valueChanges();
    this.items = db.collection('sectiontest4', ref => ref.orderBy('section4_name')).valueChanges();
    this.items = db.collection('sectiontest5', ref => ref.orderBy('section5_name')).valueChanges();
    this.items = db.collection('sectiontest6', ref => ref.orderBy('section6_name')).valueChanges();
  }
  saveItem1() {
    console.log('saving');
    this.db.collection('sectiontest1').add({
      'section1': this.section1,
      'section1_ame': this.section1_name
    });
    this.section1_name = ''; this.section1 = '';
  }
  saveItem2() {
    console.log('saving');
    this.db.collection('sectiontest2').add({
      'section2': this.section2,
      'section2_name': this.section2_name
    });
    this.section2_name = ''; this.section2 = '';
  }
  saveItem3() {
    console.log('saving');
    this.db.collection('sectiontest3').add({
      'section3': this.section3,
      'section3_name': this.section3_name
    });
    this.section3_name = ''; this.section3 = '';
  }
  saveItem4() {
    console.log('saving');
    this.db.collection('sectiontest4').add({
      'section4': this.section4,
      'section4_name': this.section4_name
    });
    this.section4_name = ''; this.section4 = '';
  }
  saveItem5() {
    console.log('saving');
    this.db.collection('sectiontest5').add({
      'section5': this.section5,
      'section5_name': this.section5_name
    });
    this.section5_name = ''; this.section5 = '';
  }
  saveItem6() {
    console.log('saving');
    this.db.collection('sectiontest6').add({
      'section6': this.section6,
      'section6_name': this.section6_name
    });
    this.section6_name = ''; this.section6 = '';
  }
  ngOnInit() {
  }
}
