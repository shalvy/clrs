import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseConfig } from './credentials';
import { OverviewComponent } from './dashboard/overview/overview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rootPage: any;

  constructor(
  ) {

  }
}
