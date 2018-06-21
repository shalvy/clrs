import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-base-wizard',
  templateUrl: './directory-wizard.component.html',
  styleUrls: ['./directory-wizard.component.css']
})
export class DirectoryWizardComponent implements OnInit {

    constructor() {
    }

  ngOnInit() {
  }

}
