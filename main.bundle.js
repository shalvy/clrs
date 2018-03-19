webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/calendar.module": [
		"../../../../../src/app/calendar/calendar.module.ts",
		"calendar.module",
		"common"
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		"charts.module",
		"common"
	],
	"./colenterprise/colenterprise.module": [
		"../../../../../src/app/colenterprise/colenterprise.module.ts",
		"colenterprise.module",
		"common"
	],
	"./colpersonal/colpersonal.module": [
		"../../../../../src/app/colpersonal/colpersonal.module.ts",
		"colpersonal.module",
		"common"
	],
	"./colprojects/colprojects.module": [
		"../../../../../src/app/colprojects/colprojects.module.ts",
		"colprojects.module",
		"common"
	],
	"./components/components.module": [
		"../../../../../src/app/components/components.module.ts",
		"components.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module",
		"common"
	],
	"./forms/forms.module": [
		"../../../../../src/app/forms/forms.module.ts",
		"forms.module"
	],
	"./maps/maps.module": [
		"../../../../../src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		"tables.module"
	],
	"./timeline/timeline.module": [
		"../../../../../src/app/timeline/timeline.module.ts",
		"timeline.module"
	],
	"./userpage/user.module": [
		"../../../../../src/app/userpage/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");


var AppRoutes = [{
        path: '',
        redirectTo: 'pages/register',
        pathMatch: 'full',
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'colprojects',
                loadChildren: './colprojects/colprojects.module#ColprojectsModule'
            }, {
                path: 'colpersonal',
                loadChildren: './colpersonal/colpersonal.module#ColpersonalModule'
            }, {
                path: 'colenterprise',
                loadChildren: './colenterprise/colenterprise.module#ColenterpriseModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"black\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <!-- <div *ngIf=\"!isMap()\"> -->\n            <footer-cmp></footer-cmp>\n        <!-- </div> -->\n    </div>\n\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
    };
    AdminLayoutComponent.prototype.isMap = function () {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-black active\" data-color=\"black\"></span>\n                    <span class=\"badge filter badge-brown\" data-color=\"brown\"></span>\n                    <span class=\"badge filter badge-white\" data-color=\"white\"></span>\n                </a>\n            </li>\n\n            <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    FixedPluginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fixedplugin-cmp',
            template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
        })
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n -->"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-fill btn-icon\"><i class=\"ti-more-alt\"></i></button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\">Colours</a> <!--  {{getTitle()}}  -->\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div class=\"\" *ngIf=\"isMobileMenu()\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"#\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                            <i class=\"ti-layout-tab-v\"></i> Colours Projects</a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"#\">Core </a>\n                            </li>\n                            <li>\n                              <a routerLink=\"/colprojects/calendar\">Hunters Gold</a>\n                            </li>\n                            <li>\n                              <a href=\"colprojects/stats\"><i class=\"fa fa-tasks fa-fw\"></i> Create new project</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                            <i class=\"ti-palette\"></i> Colours Personal</a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"colpersonal/calendar\"><i class=\"ti-user\"></i> Add New</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                            <i class=\"ti-briefcase\"></i> Colours Enterprise</a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"colenterprise/calendar\"><i class=\"ti-palette\"></i> Colours</a>\n                            </li>\n                            <li>\n                                <a href=\"colenterprise/stats\"><i class=\"fa fa-industry fa-fw\"></i> New Company</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a class=\"btn-magnify\" href=\"#\">\n                            <i class=\"ti-comments\"></i>\n                        </a>\n                    </li>\n                        <!-- <li>\n                            <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                                <i class=\"ti-panel\"></i>\n                                <p>Stats</p>\n                            </a>\n                        </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#notifications\" class=\"dropdown-toggle btn-rotate\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-md hidden-lg\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#not1\">Notification 1</a></li>\n                            <li><a href=\"#not2\">Notification 2</a></li>\n                            <li><a href=\"#not3\">Notification 3</a></li>\n                            <li><a href=\"#not4\">Notification 4</a></li>\n                            <li><a href=\"#another\">Another notification</a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a class=\"btn-rotate\">\n                            <i class=\"ti-settings\"></i>\n                            <p class=\"hidden-md hidden-lg\">\n                                Settings\n                            </p>\n                        </a>\n                    </li> -->\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            }
            else if (parent.children) {
                var children_from_url = titlee.split("/")[2];
                for (var current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"logo\">\n\t<a href=\"https://www.run.co.zw/colours\" class=\"simple-text logo-mini\">\n        <div class=\"logo-img\">\n            <!-- <img src=\"../assets/img/faces/face-2.jpg\"/> -->\n            <img href=\"https://www.run.co.zw/colours3\" padding-top=\"2em\" margin=\"auto\" src=\"../assets/img/faces/colours_icon3.png\" />\n        </div>\n\t</a>\n</div>\n<div class=\"sidebar-wrapper\">\n\t<div class=\"user\">\n        <div class=\"photo\">\n            <!-- <img src=\"../assets/img/faces/face-2.jpg\" /> -->\n            <img src=\"../assets/img/faces/default-avatar.png\" />\n        </div>\n        <div class=\"info\">\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                <span>\n                    <!-- {{name}} --> Administrator\n                    <b class=\"caret\"></b>\n                </span>\n            </a>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"collapse\" id=\"collapseExample\">\n                <ul class=\"nav\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"ti-user\"></i>\n                            <span class=\"sidebar-normal\"> My Profile </span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"./pages/register\">\n                            <i class=\"ti-lock\"></i>logout</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"ti-settings\"></i>\n                            <span class=\"sidebar-normal\"> Settings </span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\t<div *ngIf=\"isNotMobileMenu()\">\n        <!-- <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n            </div>\n        </form> -->\n        <ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a href=\"#\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                    <i class=\"material-icons\">group_work</i>Colours Projects</a>\n                <ul class=\"dropdown-menu\">\n                    <li>\n                        <a href=\"#\">Core </a>\n                    </li>\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-tasks fa-fw\"></i> Create new project</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                    <i class=\"material-icons\">person</i>Colours Personal</a>\n                <ul class=\"dropdown-menu\">\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-user fa-fw\"></i> Add New</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                    <i class=\"material-icons\" style=\"color:#2f4f4f\">business</i>Colours Enterprise</a>\n                <ul class=\"dropdown-menu\">\n                    <li>\n                        <a href=\"#\"><i class=\"material-icons\">group_work</i> Colours</a>\n                    </li>\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-industry fa-fw\"></i> New Company</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"./forms/timesheet3.html\"><i class=\"material-icons\">chats</i></a>\n            </li>\n        </ul>\n    </div>\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Menu Items
var ROUTES = [{
        path: '/dashboard/overview',
        title: 'Dashboard',
        type: 'link',
        icontype: 'fa fa-television fa-fw',
    }, {
        path: '/pages/timeline',
        title: 'Notebook',
        type: 'link',
        icontype: 'fa fa-book fa-fw'
    }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'ti-calendar'
    }, {
        path: '/pages/register',
        title: 'Meeting Assistant',
        type: 'link',
        icontype: 'fa fa-group fa-fw'
    }, {
        path: '/pages/register',
        title: 'Document Manager',
        type: 'link',
        icontype: 'ti-server'
    }, {
        path: '/pages/register',
        title: 'Reporting Assistant',
        type: 'link',
        icontype: 'ti-user'
    }
    // , {
    //     path: '/pages/register',
    //     title: 'Login',
    //     type: 'link',
    //     icontype: 'ti-user'
    // }, /* , {
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'ti-calendar'
    // }*/{
    // path: '/coloursproject/landingdash',
    // title: 'Colours Projects',
    // type: 'link',
    // icontype: 'ti-panel',
    /* children: [
         { path: 'overview', title: 'Overview', ab: 'O' },
         { path: 'stats', title: 'Stats', ab: 'S' }
     ] */
    // },
    //  {
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     icontype: 'ti-package',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab: 'B'},
    //         {path: 'grid', title: 'Grid System', ab: 'GS'},
    //         {path: 'panels', title: 'Panels', ab: 'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA'},
    //         {path: 'notifications', title: 'Notifications', ab: 'N'},
    //         {path: 'icons', title: 'Icons', ab: 'I'},
    //         {path: 'typography', title: 'Typography', ab: 'T'}
    //     ]
    // }, {
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'ti-clipboard',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab: 'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab: 'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab: 'VF'},
    //         {path: 'wizard', title: 'Wizard', ab: 'W'}
    //     ]
    // }, {
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     icontype: 'ti-view-list-alt',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab: 'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab: 'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab: 'DT'}
    //     ]
    // },{
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     icontype: 'ti-map',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab: 'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab: 'VM'}
    //     ]
    // },{
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link',
    //     icontype: 'ti-gift'
    // },
    //     {
    //     path: '/pages',
    //     title: 'Pages',
    //     type: 'sub',
    //     icontype: 'ti-gift',
    //     children: [
    //         {path: 'timeline', title: 'Timeline Page', ab: 'T'},
    //         {path: 'user', title: 'User Page', ab: 'UP'},
    //         {path: 'login', title: 'Login Page', ab: 'LP'},
    //         {path: 'register', title: 'Register Page', ab: 'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab: 'LSP'}
    //     ]
    // }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();
        var collapseId = $sidebarParent.siblings('a').attr("href");
        $(collapseId).collapse("show");
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'sidebar-cmp',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map