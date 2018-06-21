import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'stats-cmp',
    templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit{
    ngOnInit(){
     
      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
    }
}
