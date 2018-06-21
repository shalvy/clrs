import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var swal: any;
declare var $: any;

@Component({
  selector: 'stats-cmp',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {
  ngOnInit() {
    var mapData = {
      "AU": 760,
      "BR": 550,
      "CA": 120,
      "DE": 1300,
      "FR": 540,
      "GB": 690,
      "GE": 200,
      "IN": 200,
      "RO": 600,
      "RU": 300,
      "US": 2920,
    };
    $('#worldMap').vectorMap({
      map: 'world_mill_en',
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#e4e4e4',
          "fill-opacity": 0.9,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },

      series: {
        regions: [{
          values: mapData,
          scale: ["#AAAAAA", "#444444"],
          normalizeFunction: 'polynomial'
        }]
      },
    });
  }
  ngAfterViewInit() {
    var dataSales: any = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      series: [
        [287, 385, 490, 562, 594, 626, 698, 895, 952],
        [67, 152, 193, 240, 387, 435, 535, 642, 744],
        [23, 113, 67, 108, 190, 239, 307, 410, 410]
      ]
    };

    var optionsSales: any = {
      lineSmooth: false,
      low: 0,
      high: 1000,
      showArea: true,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      showLine: true,
      showPoint: false,
    };

    var responsiveSales: any[] = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[1];
          }
        }
      }]
    ];

    var chartHours = new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


    var data: any = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
      ]
    };

    var options: any = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };

    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    var chartActivity = new Chartist.Line('#chartActivity', data, options, responsiveOptions);
  }
  showSwal(type) {
    if (type === 'input-field') {
      swal({
        title: 'Search user',
        html: '<form class="navbar-form navbar-left navbar-search-form" role="search">' +
          '<div class="input-group text-center" style="width:250px">' +
          '<div class="row">' +
          '<div class="col-md-8 col-md-offset-2">' +
          '<input type="text" value="" class="form-control" placeholder="User">' +
          '<span class="input-group-addon"><i class="fa fa-search"></i></span>' +
          '<div class="spaser" style="height:1em"></div>' +
          '<input type="text" value="" class="form-control" placeholder="Project">' +
          '<span class="input-group-addon"><i class="fa fa-search"></i></span>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</form>',
        // showConfirmButton: false
        // showCancelButton: true,
        // confirmButtonClass: 'btn btn-success',
        // cancelButtonClass: 'btn btn-danger',
        // buttonsStyling: true
      }).then(function (result) {
        swal({
          type: 'success',
          html: 'You entered: <strong>' +
            $('#input-field').val() +
            '</strong>',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false

        })
      }).catch(swal.noop)
    }
    else if (type === 'request-message-and-cancel') {
      swal({
        title: 'Project Connection Request',
        text: 'Boomgare Construction',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Accept!',
        cancelButtonText: 'No, Deny',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
      }).then(function () {
        swal({
          title: 'Accepted!',
          text: 'You have joined the Project.',
          type: 'success',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false
        })
      }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
          swal({
            title: 'Deny',
            text: 'Project Request Denied  :)',
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
          })
        }
      })

    }
  }
}
