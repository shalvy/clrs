webpackJsonp(["colpersonal.module"],{

/***/ "../../../../../src/app/colpersonal/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0em\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-12\"> -->\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" style=\"margin-top:2em ;margin-bottom:1em\">\r\n            <h4 class=\"card-title\">Colours Enterprise</h4>\r\n            <!-- <p class=\"category\">Vertical tabs</p> -->\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"left-vertical-tabs\">\r\n                <ul class=\"nav nav-stacked\" role=\"tablist\">\r\n                  <li>\r\n                    <a href=\"#info\" role=\"tab\" data-toggle=\"tab\">\r\n                      Dashboard\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#standards\" role=\"tab\" data-toggle=\"tab\">\r\n                      Standards\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"active\">\r\n                    <a href=\"#setup\" role=\"tab\" data-toggle=\"tab\">\r\n                      Setup\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#planning\" role=\"tab\" data-toggle=\"tab\">\r\n                      Planning\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#impl\" role=\"tab\" data-toggle=\"tab\">\r\n                      Implementation\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#reporting\" role=\"tab\" data-toggle=\"tab\">\r\n                      Reporting\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"right-text-tabs\">\r\n                <!-- Tab panes -->\r\n                <div class=\"tab-content\">\r\n                  <div class=\"tab-pane active\" id=\"setup\">\r\n                    <!-- <div class=\"right-text-tabs\"> -->\r\n                      <div class=\"tab-content\">\r\n                        <div class=\"tab-pane active\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12 \">\r\n                              <div>\r\n                                <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray\">Setup Your Personal Account...</h5>\r\n                                  <p class=\"category\" style=\"margin-top:-1em\">Map out your main life activities.\r\n                                  <br>These are task classifications under which you do most of your daily activities</p>\r\n                              </div>\r\n                              <div class=\"spacer\" style=\"height:1em\"></div>\r\n                              <div class=\"card-content table-responsive table-full-width\">\r\n                                <table class=\"table \">\r\n                                  <tbody>\r\n                                    <!-- ngRepeat: area in personalMap -->\r\n                                    <tr>\r\n                                      <td>\r\n                                        <a routerLink=\"/colpersonal/projects\">Projects</a>\r\n                                      </td>\r\n                                      <td>\r\n                                        <span color=\"orange\" class=\"ti-menu\"></span>\r\n                                      </td>\r\n                                      <td></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td>\r\n                                        <a routerLink=\"/colpersonal/work\">Work</a>\r\n                                      </td>\r\n                                      <td>\r\n                                        <span class=\"ti-menu\"></span>\r\n                                      </td>\r\n                                      <td></td>\r\n                                    </tr>\r\n                                  </tbody>\r\n                                </table>\r\n                                <form class=\"ng-pristine ng-valid\">\r\n                                  <fieldset>\r\n                                    <div class=\"form-group column-sizing\">\r\n                                      <a class=\"col-sm-3 control-label\">Add New Classification</a>\r\n                                      <div class=\"col-sm-9\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-md-6\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"e.g. Health\">\r\n                                          </div>\r\n                                          <div class=\"col-md-3\">\r\n                                            <button type=\"submit\" ng-click=\"addMap()\" class=\"btn btn-info\"> Save </button>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </fieldset>\r\n                                </form>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    <!-- </div> -->\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"info\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-4 col-sm-6\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:600px\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:1em; padding-bottom: -1em\">\r\n                              <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                <!-- <a><font size=\"5\">Colours Personal</font></a> -->\r\n                                <h5>\r\n                                  <i class=\"ti-palette\"></i> Colours Personal</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: steelblue \">\r\n                              <font size=\"3\">My Diary Today</font>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height: 2em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Meeting</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-warning\">\r\n                                      1000 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Email</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-success\">\r\n                                      1230 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-6\" style=\"margin-left:2.0em\">\r\n                                  <p style=\"color:lightgrey\">\r\n                                    <font size=3>Skype</font>\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-xs-4\">\r\n                                  <div class=\"pull-right\">\r\n                                    <span class=\"label label-success\">\r\n                                      1400 Hrs\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <i class=\"fa fa-pie-chart fa-fw\"></i>\r\n                                <font size=\"3\"> Metrics</font>\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:1em\">\r\n                                  <font size=3> Total Progress</font>\r\n                                </a>\r\n                                <div id=\"chartTotalEarnings\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:1em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartTotalSubscriptions\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-6\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:410px\" data-background-color=\"green\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:1em; padding-bottom: -1em \">\r\n                              <div class=\"pull-left\" style=\"color: steelblue\">\r\n                                <h5>\r\n                                  <i class=\"ti-layout-tab-v\"></i> Colours Projects</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:.5em;padding-top: -1em; color: steelblue; \">\r\n                              <font size=\"3\">My Current Priority Projects</font>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.4em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" routerLink=\"#send_agenda\">\r\n                                  <font size=3>Joina City</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" routerLink=\"#send_agenda\">\r\n                                  <font size=3>Aripo Offices</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" routerLink=\"#send_agenda\">\r\n                                  <font size=3>Colours Software</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1.0em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" routerLink=\"#send_agenda\">\r\n                                  <font size=3>Beitbridge</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <font size=\"3\">\r\n                                  <i class=\"fa fa-line-chart fa-fw\"></i> Project Metrics</font>\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:1em\">\r\n                                  <font size=3> Total Progress</font>\r\n                                </a>\r\n                                <div id=\"chartTotalDownloads\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:1em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartActivity\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-6\">\r\n                        <div class=\"card\" style=\"height:480px\">\r\n                          <!--  style=\"height:410px\" -->\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"row col-x-5\" style=\"margin-left:.5em; padding-bottom: -1em \">\r\n                              <div class=\"pull-left\" style=\"color:steelblue\">\r\n                                <h5>\r\n                                  <i class=\"ti-briefcase\"></i> Colours Enterprise</h5>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\r\n                            <div class=\"pull-left\" style=\"margin-left:1em;padding-top: -1em; color: steelblue; \">\r\n                              <font size=\"3\">High Priority Enterprise Tasks</font>\r\n                            </div>\r\n                            <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\r\n                            <div class=\"spacer\" style=\"height:2.4em;\"></div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10 \" style=\"margin-left:1em\">\r\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\r\n                                  <!-- style=\"color:darkgrey\" -->\r\n                                  <font size=3>Send Agenda</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\r\n                                  <font size=3>Respond to Mail</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\r\n                                  <font size=3>Contact Supplier</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-10\" style=\"margin-left:1em\">\r\n                                <a href=\"#Aripo\" style=\"color:lightgrey\">\r\n                                  <font size=3>Aripo</font>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"card-content btn-magnify\">\r\n                            <div class=\"pull-left\" style=\"margin-left:1.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\r\n                              <a>\r\n                                <font size=\"3\">\r\n                                  <i class=\"fa fa-area-chart fa-fw\"></i> Enterprise Metrics</font>\r\n                                <!-- color=\"steelblue\" -->\r\n                                <!-- <span class=\"text-muted\">Projects </span>Register -->\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"spacer\" style=\"height:2.1em\"></div>\r\n                            <!-- chart1 -->\r\n                            <div class=\"row\">\r\n                              <div class=\"card-content\">\r\n                                <a style=\"color:lightgrey;margin-left:0.78em\">\r\n                                  <font size=3>Total progress</font>\r\n                                </a>\r\n                                <div id=\"chartEnt1\" class=\"ct-chart\"></div>\r\n                              </div>\r\n                              <div class=\"card-content\">\r\n                                <p style=\"color:lightgrey;margin-left:0.78em\">\r\n                                  <font size=3>Weekly progress</font>\r\n                                </p>\r\n                                <div id=\"chartEnt2\" class=\"ct-chart\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- ****End of Charts**** -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"standards\">\r\n                    <div class=\"col-md-12 \">\r\n                      <!-- <div class=\"card\"> -->\r\n                      <div>\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray;\">Standards...</h5>\r\n                        <p class=\"category\">Map out your main life activities.\r\n                          <br>These are task classifications under which you do most of your daily activities\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"planning\">\r\n                    <div class=\"card-content\">\r\n                      <div>\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray; margin-bottom:-1.5em\">Planning...</h5>\r\n                      </div>\r\n                      <div class=\"nav-tabs-navigation\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                            <li class=\"active\">\r\n                              <a href=\"#home\" data-toggle=\"tab\">Task Scheduler</a>\r\n                            </li>\r\n                            <li>\r\n                              <a href=\"#profile\" data-toggle=\"tab\">PEP Matrix</a>\r\n                            </li>\r\n                            <li>\r\n                              <a href=\"#calendar\" data-toggle=\"tab\">Calendar</a>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\r\n                        <div class=\"tab-pane active\" id=\"home\">\r\n                          <!-- Task Scheduler -->\r\n                          <div class=\"col-md-12\">\r\n                            <div style=\"color: grey\">\r\n                              <div>\r\n                                <h5 class=\"title\" style=\"margin-top:0em; color: grey\">Task Scheduler</h5>\r\n                              </div>\r\n                              <div class=\"content\">\r\n                                <table class=\"table-nested\">\r\n                                  <thead>\r\n                                    <tr>\r\n                                      <th></th>\r\n                                      <th class=\"cell-input\">\r\n                                        <span class=\"ti-plus\"></span>Task Name</th>\r\n                                      <th> Duration </th>\r\n                                      <th> Start </th>\r\n                                      <th> End </th>\r\n                                      <th> Champion </th>\r\n                                    </tr>\r\n                                  </thead>\r\n                                  <!-- ngRepeat: item in list -->\r\n                                  <tbody>\r\n                                    <tr>\r\n                                      <form class=\"ng-pristine ng-valid\"></form>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"New Task\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"duration\" >\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"date\" placeholder=\"start\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"date\" placeholder=\"end\">\r\n                                      </td>\r\n                                      <td class=\"cell-input\">\r\n                                        <input type=\"text\" placeholder=\"Project Champion\">\r\n                                      </td>\r\n                                    </tr>\r\n                                  </tbody>\r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"profile\">\r\n                          <p>will put code here</p>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"calendar\">\r\n                          <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-10 col-md-offset-1\">\r\n                                <div class=\"card card-calendar\">\r\n                                  <div class=\"card-content\">\r\n                                    <div id=\"fullCalendar\"></div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"impl\">\r\n                    <div class=\"col-md-12 \">\r\n                      <!-- <div class=\"card\"> -->\r\n                      <div>\r\n                        <h5 class=\"title\" style=\"margin-top:0em; color:darkslategray ;\">Implementation...</h5>\r\n                        <p class=\"category\">Map out your main life activities.\r\n                          <br>These are task classifications under which you do most of your daily activities\r\n                        </p>\r\n                        <br>\r\n                        <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation\r\n                          of phone that’s better by any measure.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"reporting\">\r\n                    <p>Reporting</p>\r\n                    <p>It’s one continuous form where hardware and software function in perfect unison, creating a new generation\r\n                      of phone that’s better by any measure.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"card card-calendar\"><div class=\"card-content\"><div id=\"fullCalendar\"></div></div></div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
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
                month: {
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
            eventLimit: true,
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
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/calendar/calendar.component.html")
        })
    ], CalendarComponent);
    return CalendarComponent;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/colpersonal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColpersonalModule", function() { return ColpersonalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview_component__ = __webpack_require__("../../../../../src/app/colpersonal/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__ = __webpack_require__("../../../../../src/app/colpersonal/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colpersonal_routing__ = __webpack_require__("../../../../../src/app/colpersonal/colpersonal.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/colpersonal/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/colpersonal/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__work_work_component__ = __webpack_require__("../../../../../src/app/colpersonal/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/colpersonal/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ColpersonalModule = (function () {
    function ColpersonalModule() {
    }
    ColpersonalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__colpersonal_routing__["a" /* ColpersonalRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__["a" /* StatsComponent */], __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */], __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_component__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_9__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */]]
        })
    ], ColpersonalModule);
    return ColpersonalModule;
}());

//# sourceMappingURL=colpersonal.module.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/colpersonal.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColpersonalRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__ = __webpack_require__("../../../../../src/app/colpersonal/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__ = __webpack_require__("../../../../../src/app/colpersonal/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/colpersonal/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/colpersonal/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_work_component__ = __webpack_require__("../../../../../src/app/colpersonal/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/colpersonal/search/search.component.ts");






var ColpersonalRoutes = [{
        path: '',
        children: [{
                path: 'overview',
                component: __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__["a" /* OverviewComponent */]
            }, {
                path: 'stats',
                component: __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__["a" /* StatsComponent */]
            }, {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */]
            }, {
                path: 'work',
                component: __WEBPACK_IMPORTED_MODULE_4__work_work_component__["a" /* WorkComponent */]
            }, {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */]
            }, {
                path: 'calendar',
                component: __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__["a" /* CalendarComponent */]
            }]
    }];
//# sourceMappingURL=colpersonal.routing.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" style=\"padding-right:40px; padding-left:40px\">\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:600px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em\">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <!-- <a><font size=\"5\">Colours Personal</font></a> -->\n                                <h5>\n                                    <i class=\"ti-palette\"></i> Colours Personal</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue \">\n                            <font size=\"3\">My Diary Today</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height: 2em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Meeting</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-warning\">\n                                            1000 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Email</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1230 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Skype</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1400 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <i class=\"fa fa-pie-chart fa-fw\"></i>\n                                <font size=\"3\">Colours Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalEarnings\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartTotalSubscriptions\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" data-background-color=\"green\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <h5>\n                                    <i class=\"ti-layout-tab-v\"></i> Colours Projects</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">My Current Priority Projects</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Joina City</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Aripo Offices</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Colours Software</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Beitbridge</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\"><i class=\"fa fa-line-chart fa-fw\"></i> Project Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalDownloads\" style=\"margin-left:1.4em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartActivity\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color:steelblue\">\n                                <h5>\n                                    <i class=\"ti-briefcase\"></i> Colours Enterprise</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">High Priority Enterprise Tasks</font>\n                        </div>\n                        <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <!-- style=\"color:darkgrey\" -->\n                                    <font size=3>Send Agenda</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                    <font size=3>Respond to Mail</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                    <font size=3>Contact Supplier</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                    <font size=3>Aripo</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\">\n                                    <i class=\"fa fa-area-chart fa-fw\"></i> Enterprise Metrics</font>\n                                <!-- color=\"steelblue\" -->\n                                <!-- <span class=\"text-muted\">Projects </span>Register -->\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Total progress</font>\n                                </a>\n                                <div id=\"chartEnt1\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartEnt2\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\" style=\"padding-top: 0px;padding-bottom: 0px\" > <!-- col-lg-12 -->\n                <div class=\"card card-stats\" data-background-color=\"blue\">\n                    <div class=\"card-header\" >\n                        <a class=\"card-header btn-magnify\" style=\"color: #1e1f20\"><i class=\"ti-rss-alt\"></i><span></span> Colours Marketplace News Feeds</a>\n                        <!-- <h3 class=\"card-title hidden-tittle\">4</h3> -->\n                    </div>\n                    <span>\n                        <marquee>\n                            <p> <a  style=\"color: red\" href=\"#\">Listed company looking for business Development Manager</a><a> .... </a>\n                            <a style=\"color: orangered\" href=\"#\">Edigars Foundation Development</a><a> .... </a></p>\n                        </marquee>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.initCirclePercentage = function () {
        $('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions, #chartDashboardDoc, #chartOrdersDoc').easyPieChart({
            lineWidth: 6,
            size: 160,
            scaleColor: false,
            trackColor: 'rgba(255,255,255,.25)',
            barColor: '#FFFFFF',
            animate: ({ duration: 5000, enabled: true })
        });
    };
    OverviewComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [60, 50, 30, 70, 60, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
        /* ********************************************************** End of Charts ********************************************************** */
    };
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.initCirclePercentage();
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'overview-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/overview/overview.component.html")
        })
    ], OverviewComponent);
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                    <div class=\"card\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"content\">\n                                        <h4 class=\"title\">New Project</h4>\n                                        <div class=\"content table-responsive table-full-width\"></div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Project Name</label>\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Project Name\"\n                                            >\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"form-group\">\n                                            <label>Project Type: </label>\n                                            <select class=\"form-control\" >\n                                                <option value=\"? undefined:undefined ?\" selected=\"selected\"></option>\n                                                <option value=\"Personal Work\">Personal Work</option>\n                                                <option value=\"Enterprise\">Enterprise</option>\n                                            </select>\n                                        </div>\n                                        <button type=\"button\" class=\"btn btn-primary\">Save Project</button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple  pull-right\" (click)=\"showSwal('request-message-and-cancel')\">\n                                            Connect to Existing Project\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple pull-right\" (click)=\"showSwal('input-field')\">\n                                            Invite user\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
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
                month: {
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
            eventLimit: true,
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
    };
    ProjectsComponent.prototype.showSwal = function (type) {
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
            }).then(function (result) {
                swal({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(swal.noop);
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
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    swal({
                        title: 'Deny',
                        text: 'Project Request Denied  :)',
                        type: 'error',
                        confirmButtonClass: 'btn btn-info',
                        buttonsStyling: false
                    });
                }
            });
        }
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projects-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/projects/projects.component.html")
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <!-- ngView: -->\n                <div class=\"card\">\n                  <div class=\"card-content text-center\">\n                    <h5>Modal window with input field</h5>\n                    <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
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
                month: {
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
            eventLimit: true,
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
    };
    SearchComponent.prototype.showSwal = function (type) {
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
                });
            }).catch(swal.noop);
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/search/search.component.html")
        })
    ], SearchComponent);
    return SearchComponent;
}());

/* <form class="navbar-form navbar-left navbar-search-form" role="search">
                    <div class="input-group">
                        <input type="text" value="" class="form-control" placeholder="Search...">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    </div>
                </form> */
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                    <div class=\"card\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"content\">\n                                        <h4 class=\"title\">Create New Project</h4>\n                                        <div class=\"content table-responsive table-full-width\"></div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Project Name</label>\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Project Name\"\n                                           >\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"form-group\">\n                                            <label>Project Type: </label>\n                                            <select class=\"form-control \">\n                                                <option value=\"? undefined:undefined ?\" selected=\"selected\"></option>\n                                                <option value=\"Personal Work\">Personal Work</option>\n                                                <option value=\"Enterprise\">Enterprise</option>\n                                            </select>\n                                        </div>\n                                        <button type=\"button\" class=\"btn btn-primary\">Save Project</button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple  pull-right\">\n                                            Connect to Existing Project\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-primary btn-simple pull-right\">\n                                            Invite to Enterprise\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
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
                month: {
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
            eventLimit: true,
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
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stats-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/stats/stats.component.html")
        })
    ], StatsComponent);
    return StatsComponent;
}());

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/colpersonal/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours projects add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <!-- ngView: -->\n                <div ng-view=\"\" class=\"ng-scope\">\n                    <div class=\"card ng-scope\">\n                        <form class=\"ng-pristine ng-valid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                  <!-- <div class=\"card\"> -->\n                                    <div class=\"card-header\">\n                                      <h4 class=\"title\">Enterprise</h4>\n                                    </div>\n                                    <div class=\"card-content table-responsive table-full-width\">\n                                      <div class=\"card-content table-responsive table-full-width\">\n                                        <table class=\"table \">\n                                          <tbody>\n                                            <!-- ngRepeat: company in Companies -->\n                                            <tr ng-repeat=\"company in Companies\" class=\"ng-scope\">\n                                              <td>\n                                                <a href=\"#!companySetup\" ng-click=\"setActivePage(company.name); setActiveCompany(company)\" class=\"ng-binding\">\n                                                Colours</a>\n                                              </td>\n                                              <!-- <td><span class=\"ti-trash\" ng-click=\"Companies.$remove(company)\"></span> </td>  -->\n\n                                            </tr>\n                                            <!-- end ngRepeat: company in Companies -->\n                                            <tr ng-repeat=\"company in Companies\" class=\"ng-scope\">\n                                              <td>\n                                                <a href=\"#!companySetup\" ng-click=\"setActivePage(company.name); setActiveCompany(company)\" class=\"ng-binding\">\n                                                Mambo Press Ltd</a>\n                                              </td>\n                                              <!-- <td><span class=\"ti-trash\" ng-click=\"Companies.$remove(company)\"></span> </td>  -->\n                                            </tr>\n                                            <tr><td></td></tr>\n                                            <!-- end ngRepeat: company in Companies -->\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                      <div class=\"row\">\n                                        <button class=\"btn btn-primary btn-simple pull-right\" (click)=\"showSwal('input-field')\">\n                                          Invite user\n                                        </button>\n                                        <button class=\"btn btn-primary btn-simple  pull-right\" (click)=\"showSwal('request-message-and-cancel')\">\n                                          Connect to Existing Enterprise Project\n                                        </button>\n                                        <a type=\"button\" class=\"btn btn-primary btn-simple pull-right\" href=\"#!newCompany\" ng-click=\"setActivePage('Create new Company')\">\n                                          Create New Enterprise\n                                        </a>\n                                      </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/colpersonal/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
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
        };
        var chartTotalEarnings = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalEarnings', dataPrice, optionsPrice);
        /*  **************** Chart Subscriptions - single line ******************** */
        var dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };
        var optionsDays = {
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
        var chartTotalSubscriptions = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalSubscriptions', dataDays, optionsDays);
        /*   ************************************** Colours Projects line Charts **************************************    */
        /*  **************** Chart Total Downloads - single line ******************** */
        var dataDownloads = {
            labels: ['Y14', 'Y15', 'Y16', 'Y17', 'Y18'],
            series: [
                [1000, 3300, 3966, 5256, 8345]
            ]
        };
        var optionsDownloads = {
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
        var chartTotalDownloads = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartTotalDownloads', dataDownloads, optionsDownloads);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartActivity', data, options, responsiveOptions);
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
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartEnt1 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt1', data, options, responsiveOptions);
        /*   **************** Ent2line Chart ********************    */
        var dataSales = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            series: [
                [287, 385, 562, 698, 895, 952],
                [67, 152, 387, 435, 642, 744],
                [23, 113, 67, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartEnt2 = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartEnt2', dataSales, optionsSales, responsiveSales);
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
                month: {
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
            eventLimit: true,
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
    };
    WorkComponent.prototype.showSwal = function (type) {
        if (type == 'input-field') {
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
            }).then(function (result) {
                swal({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(swal.noop);
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
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    swal({
                        title: 'Deny',
                        text: 'Project Request Denied  :)',
                        type: 'error',
                        confirmButtonClass: 'btn btn-info',
                        buttonsStyling: false
                    });
                }
            });
        }
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'work-cmp',
            template: __webpack_require__("../../../../../src/app/colpersonal/work/work.component.html")
        })
    ], WorkComponent);
    return WorkComponent;
}());

//# sourceMappingURL=work.component.js.map

/***/ })

});
//# sourceMappingURL=colpersonal.module.chunk.js.map