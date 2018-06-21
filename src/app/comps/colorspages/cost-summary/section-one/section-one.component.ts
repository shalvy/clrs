import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-one',
    moduleId: module.id,
    templateUrl: 'section-one.component.html'
})

export class CostSectionOneComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section1: string; section1_name: string; section1_quantity: string; section1_amount: string ; section1_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest1', ref => ref.orderBy('section1_name')).valueChanges();
    }
    saveItem1() {
        console.log('saving');
        this.db.collection('sectiontest1').add({
            'section1': this.section1,
            'section1_name': this.section1_name,
            'section1_unit': this.section1_unit,
            'section1_quantity': this.section1_quantity,
            'section1_amount': this.section1_amount
        });
        this.section1_amount = ''; this.section1_quantity = ''; this.section1_unit = ''; this.section1_name = ''; this.section1 = '';
    }
    ngOnInit() {
    }
}
