import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'subdash-cmp',
  templateUrl: './subdash.component.html'
})
export class SubdashComponent implements OnInit{
    ngOnInit(){

      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
    }
}
