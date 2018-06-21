import { Component, OnInit } from '@angular/core';

declare var $: any;

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'subimple-personal-cmp',
  templateUrl: './subimple-personal.component.html'
})
export class SubimplePersonalComponent implements OnInit{

  public tableDataC: TableData;
    ngOnInit(){

      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();
      this.tableDataC = {
        headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        dataRows: []
      };
    }
}
