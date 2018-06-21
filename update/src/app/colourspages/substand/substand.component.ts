import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'substand-cmp',
    templateUrl: './substand.component.html'
})
export class SubstandComponent implements OnInit{
    ngOnInit(){
     
      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
    }
}
