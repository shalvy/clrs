import { Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';

declare var swal: any;
declare var $:any;

@Component({
  selector: 'search-cmp',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
    ngOnInit(){
      /*   ************************************** Colours Projects line Charts **************************************    */

      /*  **************** Chart Total Earnings - single line ******************** */
      var dataPrice = {
        labels: ['Jan', 'feb', 'March'],
        series: [
          [340, 300, 570]
        ]
      };

      var optionsPrice = {
        showPoint: false,
        lineSmooth: true,
        height: "90px",
        axisX: {
          showGrid: false,
          showLabel: true
        },
        axisY: {
          offset: 40,
          showGrid: false
        },
        low: 0,
        // high: 'auto',
        //   classNames: {
        //       line: 'ct-line ct-green'
        //   }
      };

      var chartTotalEarnings = new Chartist.Line('#chartTotalEarnings', dataPrice, optionsPrice);


      /*  **************** Chart Subscriptions - single line ******************** */

      var dataDays = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [60, 50, 30, 50, 70, 60, 90, 100]
        ]
      };

      var optionsDays: any = {
        showPoint: false,
        lineSmooth: true,
        height: "90px",
        axisX: {
          showGrid: false,
          showLabel: true
        },
        axisY: {
          offset: 40,
          showGrid: false
        },
        low: 0,
        high: 'auto',
        classNames: {
          line: 'ct-line ct-red'
        }
      };

      var chartTotalSubscriptions = new Chartist.Line('#chartTotalSubscriptions', dataDays, optionsDays);

      /*   ************************************** Colours Projects line Charts **************************************    */

      /*  **************** Chart Total Downloads - single line ******************** */

      var dataDownloads = {
        labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
        series: [
          [1000, 3300, 3966, 5256, 8345]
        ]
      };

      var optionsDownloads: any = {
        showPoint: false,
        lineSmooth: true,
        height: "90px",
        axisX: {
          showGrid: false,
          showLabel: true
        },
        axisY: {
          offset: 40,
          showGrid: false
        },
        low: 0,
        high: 'auto',
        classNames: {
          line: 'ct-line ct-orange'
        }
      };

      var chartTotalDownloads = new Chartist.Line('#chartTotalDownloads', dataDownloads, optionsDownloads);

      /*   **************** 2014 Sales - Bar Chart ********************    */

      var data = {
        labels: ['Jan', 'Feb', 'Mar'],
        series: [
          [542, 443, 320],
          [412, 243, 280]
        ]
      };

      var options = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: "90px"
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

      var chartActivity = new Chartist.Bar('#chartActivity', data, options, responsiveOptions);

      /*   ************************************** Enterprise line Charts **************************************    */

      /*   **************** Ent1line Chart ********************    */


      var data = {
        labels: ['Jan', 'Feb', 'Mar'],
        series: [
          [542, 434, 610,],
          [230, 503, 710]
        ]
      };

      var options = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: "90px"
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

      var chartEnt1 = new Chartist.Line('#chartEnt1', data, options, responsiveOptions);

      /*   **************** Ent2line Chart ********************    */

      var dataSales: any = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S'],
        series: [
          [287, 385, 562, 698, 895, 952],
          [67, 152, 387, 435, 642, 744],
          [23, 113, 67, 307, 410, 410]
        ]
      };

      var optionsSales: any = {
        lineSmooth: false,
        low: 0,
        high: 1000,
        showArea: true,
        height: "90px",
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

      var chartEnt2 = new Chartist.Line('#chartEnt2', dataSales, optionsSales, responsiveSales);


      /* ********************************************************** End of Charts ********************************************************** */

      var $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();

      $calendar.fullCalendar({
        viewRender: function (view, element) {
          // We make sure that we activate the perfect scrollbar when the view isn't on Month
          if (view.name != 'month') {
            var $fc_scroller = $('.fc-scroller');
            $fc_scroller.perfectScrollbar();
          }
        },
        header: {
          left: 'title',
          center: 'month,agendaWeek,agendaDay',
          right: 'prev,next,today'
        },
        defaultDate: today,
        selectable: true,
        selectHelper: true,
        views: {
          month: { // name of view
            titleFormat: 'MMMM YYYY'
            // other view-specific options here
          },
          week: {
            titleFormat: " MMMM D YYYY"
          },
          day: {
            titleFormat: 'D MMM, YYYY'
          }
        },

        select: function (start, end) {

          // on select we show the Sweet Alert modal with an input
          swal({
            title: 'Create an Event',
            html: '<div class="form-group col-md-8 col-md-offset-2">' +
              '<input class="form-control" placeholder="Event Title" id="input-field">' +
              '</div>',
            showCancelButton: true,
            // confirmButtonClass: 'btn btn-success',
            // cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
          }).then(function (result) {

            var eventData;
            var event_title = $('#input-field').val();

            if (event_title) {
              eventData = {
                title: event_title,
                start: start,
                end: end
              };
              $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
            }

            $calendar.fullCalendar('unselect');

          });
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events

        // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
        events: [
          {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'event-default'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d - 4, 6, 0),
            allDay: false,
            className: 'event-rose'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 3, 6, 0),
            allDay: false,
            className: 'event-rose'
          },
          {
            title: 'Meeting',
            start: new Date(y, m, d - 1, 10, 30),
            allDay: false,
            className: 'event-green'
          },
          {
            title: 'Lunch',
            start: new Date(y, m, d + 7, 12, 0),
            end: new Date(y, m, d + 7, 14, 0),
            allDay: false,
            className: 'event-red'
          },
          {
            title: 'Md-pro Launch',
            start: new Date(y, m, d - 2, 12, 0),
            allDay: true,
            className: 'event-azure'
          },
          {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: 'event-azure'
          },
          {
            title: 'Click for Creative Tim',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'https://www.creative-tim.com/',
            className: 'event-orange'
          },
          {
            title: 'Click for Google',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'https://www.creative-tim.com/',
            className: 'event-orange'
          }
        ]
      });
    }
  showSwal(type) {
     if (type == 'input-field') {
      swal({
        title: 'Search user',
        html: '<form class="navbar-form navbar-left navbar-search-form" role="search">' +
                '<div class="input-group text-center" style="width:250px">' +
                  '<div class="row">' +
                      '<div class="col-md-8 col-md-offset-2">' +
                        '<input type="text" value="" class="form-control" placeholder="User">' +
                        '<div class="spaser" style="height:1em"></div>' +
                        '<input type="text" value="" class="form-control" placeholder="Project">' +
                      '</div>' +
                  '</div>' +
                  // '<span class="input-group-addon"><i class="fa fa-search"></i></span>' +
                  // tslint:disable-next-line:max-line-length
                  '<div class="row">' +
                    '<button type="button" class="btn btn-primary btn-simple pull-right">' +
                    '<i class="fa fa-search"></i></button>' +
                  '<div>' +
                '</div>' +
              '</form>',
        showConfirmButton: false
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
  }
}
/* <form class="navbar-form navbar-left navbar-search-form" role="search">
                    <div class="input-group">
                        <input type="text" value="" class="form-control" placeholder="Search...">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    </div>
                </form> */
