import { Component, OnInit } from '@angular/core';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit{
    public dataTable: DataTable;
  public tableDataBOQ: DataTable;

    ngOnInit(){
        this.dataTable = {
          headerRow: ['ID', 'Task Description', 'Reality/m3', 'Rate', 'Amount/m3', ' Actions' ],
          footerRow: ['ID', 'Task Description', 'Reality/m3', 'Rate', 'Amount/m3', 'Actions' ],
            dataRows: [
              ['1', 'Develop', '99,225', '60%', '12099', ''],
              ['2', 'Design', '99,225', '60%', '12099', 'btn-round'],
              ['3', 'Design', '99,225', '60%', '12099', 'btn-simple'],
              ['4', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['5', 'Communication', '99,225', '60%', '12099', ''],
              ['6', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['7', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['8', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['9', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['10', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['11', 'Develop', '99,225', '60%', '12099',''],
              ['12', 'Design', '99,225', '60%', '12099', 'btn-round'],
              ['13', 'Design', '99,225', '60%', '12099', 'btn-simple'],
              ['14', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['15', 'Communication', '99,225', '60%', '12099', ''],
              ['16', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['17', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['18', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['19', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['20', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['21', 'Develop', '99,225', '60%', '12099',''],
              ['22', 'Design', '99,225', '60%', '12099', 'btn-round'],
              ['23', 'Design', '99,225', '60%', '12099', 'btn-simple'],
              ['24', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['25', 'Communication', '99,225', '60%', '12099', ''],
              ['26', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['27', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['28', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['29', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['30', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['31', 'Develop', '99,225', '60%', '12099',''],
              ['32', 'Design', '99,225', '60%', '12099', 'btn-round'],
              ['33', 'Design', '99,225', '60%', '12099', 'btn-simple'],
              ['34', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['35', 'Communication', '99,225', '60%', '12099', ''],
              ['36', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['37', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['38', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['39', 'Marketing', '99,225', '60%', '12099', 'btn-round'],
              ['40', 'Marketing', '99,225', '60%', '12099', 'btn-round']
            ]
         };
      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataBOQ = {
        headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
        footerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
          ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
          ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
          ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
          ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
          ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
          ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000'],
          ['8', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
          ['9', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
          ['10', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
          ['11', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
          ['12', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
        ]
      };
    }

    ngAfterViewInit(){

        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            responsive: true,
            language: {
            search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });

        var table = $('#datatables').DataTable();
         // Edit record
        table.on( 'click', '.edit', function () {
            var $tr = $(this).closest('tr');

            var data = table.row($tr).data();
            alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
        });

        // Delete a record
        table.on( 'click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });

        //Like record
        table.on( 'click', '.like', function () {
            alert('You clicked on Like button');
        });
    }
}
