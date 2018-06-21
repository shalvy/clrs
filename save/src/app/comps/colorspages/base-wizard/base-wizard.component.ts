import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// import {FlashComponent } from '../flash/flash.component'

@Component({
  selector: 'app-base-wizard',
  templateUrl: './base-wizard.component.html',
  styleUrls: ['./base-wizard.component.css']
})
export class BaseWizardComponent implements OnInit {

    constructor() {
    }

  ngOnInit() {
  }

}
