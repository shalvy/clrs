import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-three',
    moduleId: module.id,
    templateUrl: 'section-three.component.html'
})

export class CostSectionThreeComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section3: string; section3_name: string; section3_quantity: string; section3_amount: string; section3_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest3', ref => ref.orderBy('name')).valueChanges();
    }
    saveItem3() {
        console.log('saving');
        this.db.collection('sectiontest3').add({
            'section3': this.section3,
            'section3_name': this.section3_name,
            'section3_unit': this.section3_unit,
            'section3_quantity': this.section3_quantity,
            'section3_amount': this.section3_amount
        });
        this.section3_amount = ''; this.section3_quantity = ''; this.section3_unit = ''; this.section3_name = ''; this.section3 = '';


    }
    ngOnInit() {
    }
}
