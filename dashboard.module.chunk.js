webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview_component__ = __webpack_require__("../../../../../src/app/dashboard/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__ = __webpack_require__("../../../../../src/app/dashboard/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_5__stats_stats_component__["a" /* StatsComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__ = __webpack_require__("../../../../../src/app/dashboard/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__ = __webpack_require__("../../../../../src/app/dashboard/stats/stats.component.ts");


var DashboardRoutes = [{
        path: '',
        children: [{
                path: 'overview',
                component: __WEBPACK_IMPORTED_MODULE_0__overview_overview_component__["a" /* OverviewComponent */]
            }, {
                path: 'stats',
                component: __WEBPACK_IMPORTED_MODULE_1__stats_stats_component__["a" /* StatsComponent */]
            }]
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" style=\"padding-right:40px; padding-left:40px\">\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:600px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em\">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <!-- <a><font size=\"5\">Colours Personal</font></a> -->\n                                <h5>\n                                    <i class=\"ti-palette\"></i> Colours Personal</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue \">\n                            <font size=\"3\">My Diary Today</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height: 2em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Meeting</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-warning\">\n                                            1000 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Email</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1230 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\" style=\"margin-left:3.0em; margin-right:-1.0em\">\n                                    <p style=\"color:lightgrey\">\n                                        <font size=3>Skype</font>\n                                    </p>\n                                </div>\n                                <div class=\"col-xs-4\">\n                                    <div class=\"pull-right\">\n                                        <span class=\"label label-success\">\n                                            1400 Hrs\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <i class=\"fa fa-pie-chart fa-fw\"></i>\n                                <font size=\"3\">Colours Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalEarnings\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartTotalSubscriptions\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" data-background-color=\"green\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color: steelblue\">\n                                <h5>\n                                    <i class=\"ti-layout-tab-v\"></i> Colours Projects</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">My Current Priority Projects</font>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Joina City</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Aripo Offices</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Colours Software</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <font size=3>Beitbridge</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\"><i class=\"fa fa-line-chart fa-fw\"></i> Project Metrics</font>\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a class=\"pull-left\" style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3> Total Progress</font>\n                                </a>\n                                <div id=\"chartTotalDownloads\" style=\"margin-left:1.4em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey; margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartActivity\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\" style=\"padding-right:20px; padding-left:20px\">\n                <div class=\"card\" style=\"height:480px\">\n                    <!--  style=\"height:410px\" -->\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"row col-x-5\" style=\"margin-left:2em; padding-bottom: -1em \">\n                            <div class=\"pull-left\" style=\"color:steelblue\">\n                                <h5>\n                                    <i class=\"ti-briefcase\"></i> Colours Enterprise</h5>\n                            </div>\n                        </div>\n                        <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                        <div class=\"pull-left\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \">\n                            <font size=\"3\">High Priority Enterprise Tasks</font>\n                        </div>\n                        <!-- <div class=\"numbers\" style=\"margin-left:1em; color:rgb(15, 4, 4)\">High Priority Enterprise Tasks</div> -->\n                        <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10 \" style=\"margin-left:2em\">\n                                <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                    <!-- style=\"color:darkgrey\" -->\n                                    <font size=3>Send Agenda</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                    <font size=3>Respond to Mail</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                    <font size=3>Contact Supplier</font>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-10\" style=\"margin-left:2em\">\n                                <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                    <font size=3>Aripo</font>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content btn-magnify\">\n                        <div class=\"pull-left\" style=\"margin-left:2.0em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\">\n                            <a>\n                                <font size=\"3\">\n                                    <i class=\"fa fa-area-chart fa-fw\"></i> Enterprise Metrics</font>\n                                <!-- color=\"steelblue\" -->\n                                <!-- <span class=\"text-muted\">Projects </span>Register -->\n                            </a>\n                        </div>\n                        <div class=\"spacer\" style=\"height:2.1em\"></div>\n                        <!-- chart1 -->\n                        <div class=\"row\">\n                            <div class=\"card-content\">\n                                <a style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Total progress</font>\n                                </a>\n                                <div id=\"chartEnt1\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                            <div class=\"card-content\">\n                                <p style=\"color:lightgrey;margin-left:2em\">\n                                    <font size=3>Weekly progress</font>\n                                </p>\n                                <div id=\"chartEnt2\" class=\"ct-chart\" style=\"margin-left:1em\"></div>\n                            </div>\n                        </div>\n                        <!-- ****End of Charts**** -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\" style=\"padding-top: 0px;padding-bottom: 0px\" > <!-- col-lg-12 -->\n                <div class=\"card card-stats\" data-background-color=\"blue\">\n                    <div class=\"card-header\" >\n                        <a class=\"card-header btn-magnify\" style=\"color: #1e1f20\"><i class=\"ti-rss-alt\"></i><span></span> Colours Marketplace News Feeds</a>\n                        <!-- <h3 class=\"card-title hidden-tittle\">4</h3> -->\n                    </div>\n                    <span>\n                        <marquee>\n                            <p> <a  style=\"color: red\" href=\"#\">Listed company looking for business Development Manager</a><a> .... </a>\n                            <a style=\"color: orangered\" href=\"#\">Edigars Foundation Development</a><a> .... </a></p>\n                        </marquee>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/overview/overview.component.ts":
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
            template: __webpack_require__("../../../../../src/app/dashboard/overview/overview.component.html")
        })
    ], OverviewComponent);
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- colours personal add new project -->\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <!-- ngView: -->\n                <div ng-view=\"\" class=\"ng-scope\">\n                    <div class=\"card ng-scope\">\n                        <form class=\"ng-pristine ng-valid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-10 col-md-offset-1\">\n                                    <div class=\"content\">\n                                        <h4 class=\"title\">Setup Your Personal Account</h4>\n                                        <p class=\"category\">Map out your main life activities.\n                                            <br>These are task classifications under which you do most of your daily activities</p>\n                                        <div class=\"content table-responsive table-full-width\"></div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"spacer\" style=\"height:1em\"></div>\n                                        <table class=\"table\">\n                                            <tbody>\n                                                <td> </td>\n                                                <td class=\"col-sm-2 col-md-8\">\n                                                    <a href=\"#!work\" ng-click=\"setActivePage('Work')\">Work</a>\n                                                </td>\n                                                <td>\n                                                    <span class=\"ti-menu\" ></span>\n                                                </td>\n                                                <td> </td>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <form class=\"ng-pristine ng-valid\">\n                                            <fieldset>\n                                                <div class=\"form-group column-sizing\">\n                                                    <label class=\"col-sm-2 control-label\">Add New Classification</label>\n                                                    <div class=\"col-sm-10\">\n                                                        <div class=\"row\">\n                                                            <div class=\"col-md-6\">\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"e.g. Health\">\n                                                            </div>\n                                                            <div class=\"col-md-3\">\n                                                                <button type=\"submit\" ng-click=\"addMap()\" class=\"btn btn-simple \"> Save </button>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </fieldset>\n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/stats/stats.component.ts":
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
    };
    StatsComponent.prototype.ngAfterViewInit = function () {
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };
        var optionsSales = {
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
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[1];
                        }
                    }
                }]
        ];
        var chartHours = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', dataSales, optionsSales, responsiveSales);
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
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
        var chartActivity = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartActivity', data, options, responsiveOptions);
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stats-cmp',
            template: __webpack_require__("../../../../../src/app/dashboard/stats/stats.component.html")
        })
    ], StatsComponent);
    return StatsComponent;
}());

//# sourceMappingURL=stats.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map