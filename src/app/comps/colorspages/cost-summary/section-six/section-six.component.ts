import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-six',
    moduleId: module.id,
    templateUrl: 'section-six.component.html'
})

export class CostSectionSixComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section6: string; section6_name: string; section6_quantity: string; section6_amount: string; section6_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest6', ref => ref.orderBy('section6_name')).valueChanges();
    }
    saveItem6() {
        console.log('saving');
        this.db.collection('sectiontest6').add({
            'section6': this.section6,
            'section6_name': this.section6_name,
            'section6_unit': this.section6_unit,
            'section6_quantity': this.section6_quantity,
            'section6_amount': this.section6_amount
        });
        this.section6_amount = ''; this.section6_quantity = ''; this.section6_unit = ''; this.section6_name = ''; this.section6 = '';


    }
    ngOnInit() {
    }
}
