import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'subplan-cmp',
    templateUrl: './subplan.component.html'
})
export class SubplanComponent implements OnInit{
    ngOnInit(){
     
      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
    }
}
