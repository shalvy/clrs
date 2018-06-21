import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-five',
    moduleId: module.id,
    templateUrl: 'section-five.component.html'
})

export class CostSectionFiveComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section5: string; section5_name: string; section5_quantity: string; section5_amount: string; section5_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest5', ref => ref.orderBy('section5_name')).valueChanges();
    }
    saveItem5() {
        console.log('saving');
        this.db.collection('sectiontest5').add({
            'section5': this.section5,
            'section5_name': this.section5_name,
            'section5_unit': this.section5_unit,
            'section5_quantity': this.section5_quantity,
            'section5_amount': this.section5_amount
        });
        this.section5_amount = ''; this.section5_quantity = ''; this.section5_unit = ''; this.section5_name = ''; this.section5 = '';


    }
    ngOnInit() {
    }
}