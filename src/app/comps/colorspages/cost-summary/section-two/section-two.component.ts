import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-two',
    moduleId: module.id,
    templateUrl: 'section-two.component.html'
})

export class CostSectionTwoComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section2: string; section2_name: string; section2_quantity: string; section2_amount: string; section2_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest2', ref => ref.orderBy('section2_name')).valueChanges();
    }
    saveItem2() {
        console.log('saving');
        this.db.collection('sectiontest2').add({
            'section2': this.section2,
            'section2_name': this.section2_name,
            'section2_unit': this.section2_unit,
            'section2_quantity': this.section2_quantity,
            'section2_amount': this.section2_amount
        });
        this.section2_amount = ''; this.section2_quantity = ''; this.section2_unit = ''; this.section2_name = ''; this.section2 = '';
    }
    ngOnInit() {
    }
}
