webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">24 Hours Performance</h4>\n                        <p class=\"category\">Line Chart</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"chartPerformance\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">NASDAQ: AAPL</h4>\n                        <p class=\"category\">Line Chart with Points</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"chartStock\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Views</h4>\n                        <p class=\"category\">Bar Chart</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"chartViews\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Activity</h4>\n                        <p class=\"category\">Multiple Bars Chart</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"chartActivity\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"card\">\n                    <div class=\"card-header\" style=\"padding-bottom: 6px\">\n                        <!-- <h4 class=\"card-title\">24 Hours Performance</h4> -->\n                        <p class=\"category\">Colors Personal Chart</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"chartDoc\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
        /*  **************** 24 Hours Performance - single line ******************** */
        var dataPerformance = {
            labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
                [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
        };
        var optionsPerformance = {
            showPoint: false,
            lineSmooth: true,
            height: "200px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40
            },
            low: 0,
            high: 16,
        };
        var chartPerformance = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartPerformance', dataPerformance, optionsPerformance);
        /*  **************** 24 Hours Doc - single line ******************** */
        var dataDoc = {
            labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
                [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
        };
        var optionsDoc = {
            showPoint: false,
            lineSmooth: true,
            height: "100px",
            axisX: {
                showGrid: false,
                showLabel: false
            },
            axisY: {
                offset: 40
            },
            low: 0,
            high: 16,
        };
        var chartDoc = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartDoc', dataDoc, optionsDoc);
        /*   **************** 2014 Sales - Bar Chart ********************    */
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "250px"
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
        /*  **************** NASDAQ: AAPL - single line with points ******************** */
        var dataStock = {
            labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
            ]
        };
        var optionsStock = {
            lineSmooth: false,
            //   height: "200px",
            axisY: {
                offset: 40,
                labelInterpolationFnc: function (value) {
                    return '$' + value;
                }
            },
            low: 10,
            height: "250px",
            high: 110,
            classNames: {
                point: 'ct-point ct-green',
                line: 'ct-line ct-green'
            }
        };
        var chartStock = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartStock', dataStock, optionsStock);
        /*  **************** Views  - barchart ******************** */
        var dataViews = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsViews = {
            seriesBarDistance: 10,
            classNames: {
                bar: 'ct-bar'
            },
            axisX: {
                showGrid: false,
            },
            height: "250px"
        };
        var responsiveOptionsViews = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var chartViews = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#chartViews', dataViews, optionsViews, responsiveOptionsViews);
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'charts-cmp',
            template: __webpack_require__("../../../../../src/app/charts/charts.component.html")
        })
    ], ChartsComponent);
    return ChartsComponent;
}());

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_routing__ = __webpack_require__("../../../../../src/app/charts/charts.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__charts_routing__["a" /* ChartsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__charts_component__["a" /* ChartsComponent */]]
        })
    ], ChartsModule);
    return ChartsModule;
}());

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");

var ChartsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__charts_component__["a" /* ChartsComponent */]
            }]
    }];
//# sourceMappingURL=charts.routing.js.map

/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map