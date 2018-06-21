import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'submenu-cmp',
    templateUrl: './submenu.component.html'
})
export class SubmenuComponent implements OnInit{
    ngOnInit(){
     
      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
    }
}
