import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { DataService } from '../../services/data.service';

declare var swal: any;
declare var $: any;
declare var require: any
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  moduleId: module.id,
  selector: 'calendar-cmp',
  templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {

/* 6666666666       66666666666 */

/* end */


  public tableDataC: TableData;
  public tableDataD: TableData;
  /* --------------  STANDARDS  -------------- */
  // PERSONAL
  public tableDataAPTF: TableData;
  public tableDataTBVA: TableData;
  public tableDataVFT: TableData;
  public tableDataMP: TableData;
  public tableDataMCR: TableData;
  public tableDataHCD: TableData;
  public tableDataHCW: TableData;
  public tableDataHCM: TableData;
  public tableDataHCY: TableData;
  // PROJECT
  public tableDataBOQ: TableData;
  public tableDataPRF: TableData;
  public tableDataPF: TableData;
  public tableDataGST: TableData;
  // Enterprise

  mydata : any[];
  subName : string;


  constructor( private ds : DataService){
     this.mydata = ds.getSubsidiaries();
  }
  addSub(){
    console.log(this.subName)
    this.ds.addSubsidiary(this.subName);
  }
  ngOnInit() {

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();


    $('.switch').bootstrapSwitch({
      onColor: 'primary'
    });

    $('.switch-plain').bootstrapSwitch({
      onColor: '',
      onText: '',
      offText: ''
    });

    $('.switch-icon').bootstrapSwitch({
      onColor: '',
      onText: '<i class="fa fa-check"></i>',
      offText: '<i class="fa fa-times"></i>'
    });

    // // Init Tags Input
    if ($(".tagsinput").length != 0) {
      $(".tagsinput").tagsinput();
    }

    //  Init Bootstrap Select Picker
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker({
        iconBase: "ti",
        tickIcon: "ti-check"
      });
    }

    $('.datetimepicker').datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.timepicker').datetimepicker({
      //          format: 'H:mm',    // use this format if you want the 24hours timepicker
      format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }

    });



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
        [60, 50, 30, 50, 57, 60, 64]
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

    /*   **************** PSline1 Chart ********************    */


    var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      series: [
        [242, 434, 610, 800],
        [230, 503, 710, 805]
      ]
    };

    var options = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "90px",

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

    var PSline1 = new Chartist.Line('#PSline1', data, options, responsiveOptions);

    /*   ************************************** Colours Projects line Charts **************************************    */

    /*  **************** Chart Total Downloads - single line ******************** */

    var dataDownloads = {
      labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
      series: [
        [100, 130, 66, 226, 83]
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
        right: 'prev,next,today,list'
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
          html: '<div class="form-group">' +
            '<input class="form-control" placeholder="Event Title" id="input-field">' +
            '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
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
    // var noUiSlider = require('nouislider');
    // var sliderDouble = document.getElementById('sliderDouble');

    // noUiSlider.create(sliderDouble, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider_n1 = document.getElementById('slider_n1');
    // noUiSlider.create(slider_n1, {
    //   start: [10, 100],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider_n2 = document.getElementById('slider_n2');
    // noUiSlider.create(slider_n2, {
    //   start: [10, 100],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 500
    //   }
    // });

    // var slider_n3 = document.getElementById('slider_n3');
    // noUiSlider.create(slider_n3, {
    //   start: [10, 70],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider_n4 = document.getElementById('slider_n4');
    // noUiSlider.create(slider_n4, {
    //   start: [10, 40],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider_n5 = document.getElementById('slider_n5');
    // noUiSlider.create(slider_n5, {
    //   start: [10, 100],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    this.tableDataC = {
      headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      dataRows: []
    };

    this.tableDataD = {
      headerRow: ['ID', 'Task', 'Unit(s)', 'Target, Qty'],
      dataRows: [
        ['1', 'Digging', 'm3', '200m3'],
        ['2', 'Wood work', 'm2', '120m2'],
        ['3', 'Concrete', 'm3', '200m3'],
      ]
    };

    /* 8888888888888888888888888888 COLOURS TABLES FOR STANDARDS 8888888888888888888888 */
    /* '''''''''''''''''''''''''''''' Personal ''''''''''''''''''''''''''' */

    /* ---------------------  TABLE1 - Annual plan Tasks Format  ---------------------- */

    this.tableDataAPTF = {
      headerRow: ['ID', 'Task', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dataRows: [
        ['1', 'wall', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['2', 'Minerva Hooper', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
        ['3', 'Sage(Info)', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['4', 'Chaney', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
        ['5', 'Roofing(info)', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['6', 'Garage(success)', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695']
      ]
    };

    /* ---------------------  TABLE2 - Multi Year Plan  ---------------------- */

    this.tableDataMP = {
      headerRow: ['ID', 'Task', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
        ['2', 'Minerva Hooper', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['3', 'Sage Rodriguez (Info)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
        ['4', 'Philip Chaney', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['5', 'Doris Greene (Danger)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
        ['6', 'Mason Porter', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
        ['7', 'Mike Chaney (Warning)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695']
      ]
    };

    /* ---------------------  TABLE3 - Variance Format Table  ---------------------- */

    this.tableDataVFT = {
      headerRow: ['ID', 'Task', 'Planned Value', 'Actual Value', 'Variance'],
      dataRows: [
        ['1', 'wall', '$36,738', '$39,038', '-0.4'],
        ['2', 'Minerva Hooper', '$23,789', '$36,738', '-0.8%'],
        ['3', 'Sage(Info)', '$56,142', '$36,738', '34%'],
        ['4', 'Chaney', '$38,735', '$36,738', '6%'],
        ['5', 'Roofing(info)', '$63,542', '$60,040', '6%',],
        ['6', 'Garage(success)', '$8,615', '$6,000', '10%']
      ]
    };

    /* ---------------------  TABLE4 - Time Budget vs Actual Time Spent per week  ---------------------- */

    this.tableDataTBVA = {
      headerRow: ['ID', 'Task', 'Planned', 'Actual', 'Variance'],
      dataRows: [
        ['1', 'wall', '6', '8', '-0.4'],
        ['2', 'Minerva Hooper', '89', '78', '-0.8%'],
        ['3', 'Sage(Info)', '42', '38', '34%'],
        ['4', 'Chaney', '35', '38', '6%'],
        ['5', 'Roofing(info)', '63', '60', '6%',],
        ['6', 'Garage(success)', '15', '20', '10%']
      ]
    };

    /* ---------------------  TABLE5 - Multi Period Cummulative  ---------------------- */

    this.tableDataMCR = {
      headerRow: ['ID', 'Task', 'Planned Cummulative to Date', 'Actual to Date', 'Variance'],
      dataRows: [
        ['1', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['2', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['3', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['4', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['5', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['6', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
        ['7', 'Sales (Success)', '$36,738', '$34,738', '0.2%']
      ]
    };

    /* 808080808080808080808 -----------HC----------- 08080808080808080808 */
    /* ---------------------  TABLE6 - Health Classification Daily  ---------------------- */

    this.tableDataHCD = {
      headerRow: ['ID', 'Task', 'Start', 'Finish'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
        ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
        ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
        ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
        ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
        ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
        ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
      ]
    };

    /* ---------------------  TABLE7  - Health Classification Weekly  ---------------------- */

    this.tableDataHCW = {
      headerRow: ['ID', 'Task', 'Start', 'Finish'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
        ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
        ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
        ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
        ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
        ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
        ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
      ]
    };
    /* ---------------------  TABLE8  - Health Classification Monthly  ---------------------- */

    this.tableDataHCM = {
      headerRow: ['ID', 'Task', 'Start', 'Finish'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
        ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
        ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
        ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
        ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
        ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
        ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
      ]
    };

    /* ---------------------  TABLE9  - Health Classification Yeary  ---------------------- */

    this.tableDataHCY = {
      headerRow: ['ID', 'Task', 'Start', 'Finish'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
        ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
        ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
        ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
        ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
        ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
        ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
      ]
    };
    /* '''''''''''''''''''''''''''''' Projects ''''''''''''''''''''''''''' */

    /* ---------------------  TABLE10 Bill of Quantity  ---------------------- */

    this.tableDataBOQ = {
      headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
        ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
        ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
        ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
        ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
        ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
        ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
      ]
    };

    /* ---------------------  TABLE11 - Progress Report Format  ---------------------- */

    this.tableDataPRF = {
      // tslint:disable-next-line:max-line-length
      headerRow: ['ID', 'Task Description', 'Planned Start', 'Planned Finish', 'Actual Start', 'Actual Finish', 'Planned Cumulative Measurement', 'Actual Cumulative Measurement', 'Planned Cumulative Measurement at Completion', 'Planned Cumulative Measurement at Completion', 'Variance in Days'],
      dataRows: [
        // tslint:disable-next-line:max-line-length
        ['1', 'Dakota Rice (Success)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        // tslint:disable-next-line:max-line-length
        ['2', 'Minerva Hooper', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        // tslint:disable-next-line:max-line-length
        ['3', 'Sage Rodriguez (Info)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        ['4', 'Philip Chaney', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        // tslint:disable-next-line:max-line-length
        ['5', 'Doris Greene (Danger)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        ['6', 'Mason Porter', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
        // tslint:disable-next-line:max-line-length
        ['7', 'Mike Chaney (Warning)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------']
      ]
    };

    /* ---------------------  TABLE12 - Programme Format ---------------------- */

    this.tableDataPF = {
      headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
        ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
        ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
        ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
        ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
        ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
        ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
      ]
    };
    /* ---------------------  TABLE13 - General Schedule Template  ---------------------- */

    this.tableDataGST = {
      headerRow: ['ID', 'Task Description', 'start Date', 'Finish Date', 'Comments'],
      dataRows: [
        ['1', 'Dakota Rice (Success)', '--/--/----', '--/--/----', 'Done'],
        ['2', 'Minerva Hooper', '--/--/----', '--/--/----', 'Done'],
        ['3', 'Sage Rodriguez (Info)', '--/--/----', '--/--/----', 'Done'],
        ['4', 'Philip Chaney', '--/--/----', '--/--/----', 'Done'],
        ['5', 'Doris Greene (Danger)', '--/--/----', '--/--/----', 'Done'],
        ['6', 'Mason Porter', '--/--/----', '--/--/----', 'Done'],
        ['7', 'Mike Chaney (Warning)', '--/--/----', '--/--/----', 'Done']
      ]
    };
  }
}
