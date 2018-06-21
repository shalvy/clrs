import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-section-four',
    moduleId: module.id,
    templateUrl: 'section-four.component.html'
})

export class CostSectionFourComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    section4: string; section4_name: string; section4_quantity: string; section4_amount: string; section4_unit: string;
    constructor(public location: Location, private db: AngularFirestore) {
        this.items = db.collection('sectiontest4', ref => ref.orderBy('section4_name')).valueChanges();
    }
    saveItem4() {
        console.log('saving');
        this.db.collection('sectiontest4').add({
            'section4': this.section4,
            'section4_name': this.section4_name,
            'section4_unit': this.section4_unit,
            'section4_quantity': this.section4_quantity,
            'section4_amount': this.section4_amount
        });
        this.section4_amount = ''; this.section4_quantity = ''; this.section4_unit = ''; this.section4_name = ''; this.section4 = '';


    }
    ngOnInit() {
    }
}
