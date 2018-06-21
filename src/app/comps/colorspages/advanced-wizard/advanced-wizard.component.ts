import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// import {FlashComponent } from '../flash/flash.component'

@Component({
  selector: 'app-advanced-wizard',
  templateUrl: './advanced-wizard.component.html',
  styleUrls: ['./advanced-wizard.component.css']
})
export class AdvancedWizardComponent implements OnInit {

    constructor() {
    }

  ngOnInit() {
  }

}
