webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n                <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/overview']\">Paper Dashboard PRO</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page lock-page\" data-color=\"green\" data-image=\"../../assets/img/background/background-5.png\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-lock\">\n                    <div class=\"author\">\n                        <img class=\"avatar\" src=\"../../assets/img/faces/face-2.jpg\" alt=\"...\">\n                    </div>\n                    <h4>Chet Faker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"password\" placeholder=\"Enter Password\" class=\"form-control\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-wd\">Unlock</button>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <div class=\"copyright\">\n                    &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockComponent = (function () {
    function LockComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lock-cmp',
            template: __webpack_require__("../../../../../src/app/pages/lock/lock.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], LockComponent);
    return LockComponent;
    var _a;
}());

//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" ruterLinkActive = \"active\" [routerLink]=\"['/dashboard/overview']\">Paper Dashboard PRO</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a ruterLinkActive = \"active\" [routerLink]=\"['/pages/register']\">\n                        Register\n                    </a>\n                </li>\n                <li>\n                    <a ruterLinkActive = \"active\" [routerLink]=\"['/dashboard/overview']\">\n                        Dashboard\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page login-page\" data-color=\"\" data-image=\"../../assets/img/background/background-2.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"card\" data-background=\"color\" data-color=\"blue\">\n                                <div class=\"card-header\">\n                                    <h3 class=\"card-title\">Login</h3>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"form-group\">\n                                        <label>Email address</label>\n                                        <input type=\"email\" placeholder=\"Enter email\" class=\"form-control input-no-border\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Password</label>\n                                        <input type=\"password\" placeholder=\"Password\" class=\"form-control input-no-border\">\n                                    </div>\n                                </div>\n                                <div class=\"card-footer text-center\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-wd \">Let's go</button>\n                                    <div class=\"forgot\">\n                                        <a href=\"#pablo\">Forgot your password?</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <div class=\"copyright\">\n                    &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-cmp',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__["a" /* LockComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");



var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }]
    }];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"register-page\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-2 col-md-offset-2\">\n            <div class=\"logo\" style=\"width: 15px; height: auto; padding-top:1.5em; padding-bottom:1.5em\">\n              <a href=\"./dashboard/overview\" class=\"simple-text logo-mini\">\n                <div class=\"logo-imgn\">\n                  <img src=\"../assets/img/faces/colours_icon2.png\" />\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <br>\n        <style>\n          .reg-col{\n            margin-bottom: 1em\n          }\n        </style>\n        <div class=\"row\">\n          <div class=\"col-md-4 col-md-offset-2\" >\n            <div class=\"media  reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-danger\">\n                  <p><i class=\"ti ti-user\"></i><font size=\"5\"> Colours Personal</font>\n                  <br><small>...my true colours</small></p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents reg_info\">\n                  <div class=\"media-body\">\n                   <p>We all aspire to be financially secure. Use Colours to grow your financial net worth. Use Colours to collect personal productivity metrics pay attention to how you use your one free resource, <b>TIME</b></p><p> Convert your time to useful relationships physical results and $. Over time compile your personal productivity metrics into your personal performance profile. Post your personal performance profile on Colours profile on Colours Marketplace to get your talent discovered. Continually improve on your current performance metrics. Take action don't procrastinate.</p><p>There is no time like the present. Whether we record our own productivity metrics or not, fact is we still reduce them. Hours of sleep, $/day, hours of downtime, $/food, $/fuel, $/phone, $/clothes etc. Most of the time our metrics are collected and benefit others. Colours will help you use your own metrics to benefit you. Colours will tell a story.</p><p>The story of what is possible, the story of why you are where you are versus your plans and your dreams. They are your daily mirror. They will tell you what part of your look needs attention and what part of you is ok. Accountability to self, friends and family will be your means of production.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-warning\">\n                  <p><i class=\"ti-stats-up\"></i><font size=\"5\"> Colours Project</font>\n                  <br><small>...put in Black & White </small></p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents reg_info\">\n                  <div class=\"media-body\">\n                    <p>Better than being on the ground yourself</p><p>Colours to focus your project teams on action and were action collect real data at individual teams, and corporate levels. Your productivity enforcement efforts will be better than being on the ground yourself, because while on the ground your physical eyes see so much and not further at any one time on a big project site. Colours provides you with infrastructure and technology to collect productivity data at individual level across a project site, many projects at the same time, thus enforcing the real time productivity.</p><p>Colours will loop you manage your project risk by enforcing productivity and helping you limit thing that fall through the cracks. Auditable accountability across the board will be your means of productivity. Use the standard contractual arrangements to manage confidentiality and who see what, Client can view reports, appropriate reports real time, thereby marketing your company</p><p>Client's want to know the true colours of a potential service provider before they award them a contract. The colours system metrics will make it possible for clients to do that. Clients will now be able to obtain detailed metrics about a service provider prior to awarding a project to an enterprise.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-info\">\n                  <p><i class=\"ti-pie-chart\"></i><font size=\"5\"> Colours Enterprise</font><br>\n                    <small>...what colour is your bottom line</small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents reg_info\">\n                <div class=\"media-body\">\n                  <p>Put your Enterprise human capital to optimal use. Manage your operations risk. View productivity metrics as they evolve across the enterprise, at Subsidiaries, Department, Project and Individual levels. Conduct performance audits on the go and in real time. Pursue your enterprise goals with the force of coordinated accountable teams. Respond to client needs with the integrated capability. Let performance accountability across the enterprise be your means of production</p><p>Companies want to know the true colours of a potential employee before they employ person. Companies want to know the true colours of another enterprise pitching for business with them. Companies want to manage interparty risk. Colours makes all this possible. Companies can now get to know detailed performance metrics of potential employees and potential service provider companies. Colours is the platform for companies to procure counterparties.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <form method=\"#\" action=\"#\">\n              <div class=\"card card-plain\">\n                <div class=\"content\">\n                  <form #f=\"ngForm\">\n                    <div class=\"card-content\">\n                      <div class=\"header\">\n                        <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">New to Colours, Create account\n                          <br>\n                          <small>Register using email</small>\n                        </h4>\n                      </div>\n                    </div>\n                    <div class=\"card-content\">\n                      <div class=\"form-group-colours\">\n                        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [ngModel]=\"register.email\" required #email=\"ngModel\"\n                          pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                        <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                          Email is required and format should be\n                          <i>shalvy@ngdevs.com</i>.\n                        </small>\n                      </div>\n                      <div class=\"form-group-colours\">\n                        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [ngModel]=\"register.password\" required\n                          validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                        <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                          Password is required\n                        </small>\n                      </div>\n                      <div class=\"form-group-colours\">\n                        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm Password\" [ngModel]=\"register.confirmPassword\"\n                          required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                        <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                          Password mismatch\n                        </small>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"checkbox pull-left\">\n                        <input id=\"checkbox1\" name=\"optionsCheckboxes\" type=\"checkbox\" [ngModel]>\n                        <label for=\"checkbox1\">\n                          Subscribe to newsletter\n                        </label>\n                      </div>\n                      <div class=\"form-group-colours text-right\" style=\"margin-top:8px\">\n                        <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Register</button>\n                      </div>\n                      <a href=\"./dashboard/overview\"></a>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"card-content\">\n                  <div class=\"header\">\n                    <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">Social Media\n                      <br>\n                      <small>Login/Register using google, twitter or facebook</small>\n                    </h4>\n                  </div>\n                  <div class=\"content row col-md-8\">\n                    <a type=\"button\" class=\"btn btn-icon btn-twitter\" href=\"./dashboard/overview\">\n                      <i class=\"ti-twitter-alt\"></i>\n                    </a>\n                    <a type=\"button\" class=\"btn btn-icon btn-facebook\" href=\"./dashboard/overview\">\n                      <i class=\"ti-facebook\"> </i>\n                    </a>\n                    <a type=\"button\"n class=\"btn btn-icon btn-google\" href=\"./dashboard/overview\">\n                      <i class=\"ti-google\"> </i>\n                    </a>\n                  </div>\n                  <!-- <div class=\"content\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-warning btn-fill btn-wd\" href=\"dashboard/overview\"><i class=\"ti-google\"></i> Google</button> <!- ng-click=\"signInGoogle()\" ->\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-primary btn-fill btn-wd\" ng-click=\"signInTwitter()\"><i class=\"ti-twitter\"></i> Twitter</button>\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                    <style>\n                      .btn-blue{\n                        background-color: #1e90ff;\n                        border-color:#1e90ff\n                      }\n                    </style>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-blue btn-fill btn-wd\" ng-click=\"auth.$signInWithPopup('facebook')\"\n                            disabled=\"\"><i class=\"ti-facebook\"></i> Facebook</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    };
    RegisterComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register-cmp',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());

//# sourceMappingURL=register.component.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map