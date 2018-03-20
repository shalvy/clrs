webpackJsonp(["forms.module"],{

/***/ "../../../../../src/app/forms/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());

//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/forms/extendedforms/extendedforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <h4 class=\"card-title\">Datetime Picker</h4>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\"/>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h4 class=\"card-title\">Date Picker</h4>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control datepicker\" placeholder=\"Date Picker Here\"/>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h4 class=\"card-title\">Time Picker</h4>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control timepicker\" placeholder=\"Time Picker Here\"/>\n                        </div>\n                    </div>\n                </div>\n\n                <br/><br/>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"card-title\">Switches</h4>\n                        <div class=\"col-md-4\">\n                            <p class=\"category\">Default</p>\n\n                            <input type=\"checkbox\" class=\"switch\" checked>\n                            <input type=\"checkbox\" class=\"switch\">\n                        </div>\n                        <div class=\"col-md-4\">\n                            <p class=\"category\">Plain</p>\n                            <input type=\"checkbox\" class=\"switch-plain\" checked>\n                            <input type=\"checkbox\" class=\"switch-plain\">\n                        </div>\n                        <div class=\"col-md-4\">\n                            <p class=\"category\">With Icons</p>\n                            <input type=\"checkbox\" class=\"switch-icon\" checked>\n                            <input type=\"checkbox\" class=\"switch-icon\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <h4 class=\"card-title\">Checkboxes</h4>\n                        <div class=\"checkbox\">\n                            <input id=\"checkbox1\" type=\"checkbox\">\n                            <label for=\"checkbox1\">\n                                Unchecked\n                            </label>\n                        </div>\n                        <div class=\"checkbox\">\n                           <input id=\"checkbox2\" type=\"checkbox\" checked=\"\">\n                           <label for=\"checkbox2\">\n                                Checked\n                            </label>\n                         </div>\n                        <div class=\"checkbox\">\n                            <input id=\"checkbox3\" type=\"checkbox\" disabled=\"\">\n                            <label for=\"checkbox3\">\n                                Disabled unchecked\n                            </label>\n                        </div>\n                        <div class=\"checkbox\">\n                           <input id=\"checkbox4\" type=\"checkbox\" checked=\"\" disabled=\"\">\n                           <label for=\"checkbox4\">\n                               Disabled checked\n                           </label>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <h4 class=\"card-title\">Radio</h4>\n                        <div class=\"radio\">\n                            <input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"option1\">\n                            <label for=\"radio1\">\n                                Radio is off\n                            </label>\n                        </div>\n\n                        <div class=\"radio\">\n                            <input type=\"radio\" name=\"radio1\" id=\"radio2\" value=\"option2\" checked=\"\">\n                            <label for=\"radio2\">\n                                Radio is on\n                            </label>\n                        </div>\n\n                        <div class=\"radio\">\n                            <input type=\"radio\" name=\"radio3\" id=\"radio3\" value=\"option1\" disabled=\"\">\n                            <label for=\"radio3\">\n                                Disabled radio is off\n                            </label>\n                        </div>\n\n                        <div class=\"radio\">\n                            <input type=\"radio\" name=\"radio4\" id=\"radio4\" value=\"option1\" checked=\"\" disabled=\"\">\n                            <label for=\"radio4\">\n                                Disabled radio is on\n                            </label>\n                        </div>\n                    </div>\n                </div>\n\n                <br/><br/>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"card-title\">Tags</h4>\n\n                        <input type=\"text\" value=\"Minimal, Light, New, Friends\" class=\"tagsinput\" data-role=\"tagsinput\" data-color=\"success\"/>\n\n                        <!-- You can change data-color=\"success\" with one of our colors primary | warning | info | danger -->\n                        <br />\n                        <h4 class=\"card-title\">Progress Bars</h4>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                                <span class=\"sr-only\">35% Complete (success)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                                <span class=\"sr-only\">20% Complete (warning)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                                <span class=\"sr-only\">10% Complete (danger)</span>\n                            </div>\n                        </div>\n\n                        <br />\n                        <div class=\"col-md-12\">\n                          <div class=\"card \">\n                            <h4 class=\"card-title\">Sliders</h4>\n                            <div class=\"card-content table-responsive table-full-width\">\n                              <table class=\"table table-hover\">\n                                <!-- <thead> -->\n                                <tr>\n                                  <th *ngFor=\"let cell of tableDataC.headerRow\">{{ cell }}</th>\n                                </tr>\n                                <!-- </thead> -->\n                              </table>\n                            </div>\n                            <div id=\"sliderRegular\" class=\"slider slider-success\"></div>\n                                <br>\n                            <div id=\"sliderDouble\" class=\"slider slider-info\"></div>\n                          </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"card \">\n                        <h4 class=\"card-title\">Sliders</h4>\n                        <div class=\"card-content table-responsive table-full-width\">\n                          <table class=\"table table-hover\">\n                            <!-- <thead> -->\n                              <tr>\n                                <th *ngFor=\"let cell of tableDataC.headerRow\">{{ cell }}</th>\n                              </tr>\n                            <!-- </thead> -->\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h4 class=\"card-title\">Customisable Select</h4>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <select class=\"selectpicker\" data-style=\"btn btn-danger btn-block\" title=\"Single Select\" data-size=\"7\">\n                                    <option value=\"id\">Bahasa Indonesia</option>\n                                    <option value=\"ms\">Bahasa Melayu</option>\n                                    <option value=\"ca\">Català</option>\n                                    <option value=\"da\">Dansk</option>\n                                    <option value=\"de\">Deutsch</option>\n                                    <option value=\"en\">English</option>\n                                    <option value=\"es\">Español</option>\n                                    <option value=\"el\">Eλληνικά</option>\n                                    <option value=\"fr\">Français</option>\n                                    <option value=\"it\">Italiano</option>\n                                    <option value=\"hu\">Magyar</option>\n                                    <option value=\"nl\">Nederlands</option>\n                                    <option value=\"no\">Norsk</option>\n                                    <option value=\"pl\">Polski</option>\n                                    <option value=\"pt\">Português</option>\n                                    <option value=\"fi\">Suomi</option>\n                                    <option value=\"sv\">Svenska</option>\n                                    <option value=\"tr\">Türkçe</option>\n                                    <option value=\"is\">Íslenska</option>\n                                    <option value=\"cs\">Čeština</option>\n                                    <option value=\"ru\">Русский</option>\n                                    <option value=\"th\">ภาษาไทย</option>\n                                    <option value=\"zh\">中文 (简体)</option>\n                                    <option value=\"zh-TW\">中文 (繁體)</option>\n                                    <option value=\"ja\">日本語</option>\n                                    <option value=\"ko\">한국어</option>\n                                </select>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select multiple title=\"Multiple Select\" class=\"selectpicker\" data-style=\"btn-info btn-fill btn-block\" data-size=\"7\">\n                                    <option value=\"ARS\">ARS</option>\n                                    <option value=\"AUD\">AUD</option>\n                                    <option value=\"BRL\">BRL</option>\n                                    <option value=\"CAD\">CAD</option>\n                                    <option value=\"CHF\">CHF</option>\n                                    <option value=\"CNY\">CNY</option>\n                                    <option value=\"CZK\">CZK</option>\n                                    <option value=\"DKK\">DKK</option>\n                                    <option value=\"EUR\">EUR</option>\n                                    <option value=\"GBP\">GBP</option>\n                                    <option value=\"HKD\">HKD</option>\n                                    <option value=\"HUF\">HUF</option>\n                                    <option value=\"IDR\">IDR</option>\n                                    <option value=\"ILS\">ILS</option>\n                                    <option value=\"INR\">INR</option>\n                                    <option value=\"JPY\">JPY</option>\n                                    <option value=\"KRW\">KRW</option>\n                                    <option value=\"MYR\">MYR</option>\n                                    <option value=\"MXN\">MXN</option>\n                                    <option value=\"NOK\">NOK</option>\n                                    <option value=\"NZD\">NZD</option>\n                                    <option value=\"PHP\">PHP</option>\n                                    <option value=\"PLN\">PLN</option>\n                                    <option value=\"RUB\">RUB</option>\n                                    <option value=\"SEK\">SEK</option>\n                                    <option value=\"SGD\">SGD</option>\n                                    <option value=\"TWD\">TWD</option>\n                                    <option value=\"USD\">USD</option>\n                                    <option value=\"VND\">VND</option>\n                                    <option value=\"ZAR\">ZAR</option>\n                                </select>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <br />\n                                <h4 class=\"card-title\">Dropdown</h4>\n                                <div class=\"dropdown\">\n                                      <button href=\"#\" class=\"btn btn-block dropdown-toggle\" data-toggle=\"dropdown\">\n                                          Regular\n                                          <b class=\"caret\"></b>\n                                      </button>\n                                      <ul class=\"dropdown-menu\">\n                                        <li><a href=\"#\">Action</a></li>\n                                        <li><a href=\"#\">Another action</a></li>\n                                        <li><a href=\"#\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"#\">Separated link</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"#\">One more separated link</a></li>\n                                      </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <br />\n                                <h4 class=\"card-title\">Dropup</h4>\n                                <div class=\"dropup\">\n                                      <button href=\"#\" class=\"btn btn-block dropdown-toggle\" data-toggle=\"dropdown\">\n                                          Regular\n                                          <b class=\"caret\"></b>\n                                      </button>\n                                      <ul class=\"dropdown-menu\">\n                                        <li><a href=\"#\">Action</a></li>\n                                        <li><a href=\"#\">Another action</a></li>\n                                        <li><a href=\"#\">Something else here</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"#\">Separated link</a></li>\n                                        <li class=\"divider\"></li>\n                                        <li><a href=\"#\">One more separated link</a></li>\n                                      </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <br/><br/>\n            </div>\n        </div> <!-- end card -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/extendedforms/extendedforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedFormsComponent = (function () {
    function ExtendedFormsComponent() {
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
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
            format: 'MM/DD/YYYY',
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
            format: 'h:mm A',
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
        var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
        var sliderRegular = document.getElementById('sliderRegular');
        noUiSlider.create(sliderRegular, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
        this.tableDataC = {
            headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        };
    };
    ExtendedFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extendedforms-cmp',
            template: __webpack_require__("../../../../../src/app/forms/extendedforms/extendedforms.component.html")
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());

//# sourceMappingURL=extendedforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equal_validator_directive__ = __webpack_require__("../../../../../src/app/forms/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_routing__ = __webpack_require__("../../../../../src/app/forms/forms.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extendedforms_extendedforms_component__ = __webpack_require__("../../../../../src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regularforms_regularforms_component__ = __webpack_require__("../../../../../src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validationforms_validationforms_component__ = __webpack_require__("../../../../../src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/forms/wizard/wizard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var Forms = (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__forms_routing__["a" /* FormsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__extendedforms_extendedforms_component__["a" /* ExtendedFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__regularforms_regularforms_component__["a" /* RegularFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__validationforms_validationforms_component__["a" /* ValidationFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__wizard_wizard_component__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__equal_validator_directive__["a" /* EqualValidator */]
            ]
        })
    ], Forms);
    return Forms;
}());

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ "../../../../../src/app/forms/forms.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extendedforms_extendedforms_component__ = __webpack_require__("../../../../../src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regularforms_regularforms_component__ = __webpack_require__("../../../../../src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validationforms_validationforms_component__ = __webpack_require__("../../../../../src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: __WEBPACK_IMPORTED_MODULE_1__regularforms_regularforms_component__["a" /* RegularFormsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: __WEBPACK_IMPORTED_MODULE_0__extendedforms_extendedforms_component__["a" /* ExtendedFormsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: __WEBPACK_IMPORTED_MODULE_2__validationforms_validationforms_component__["a" /* ValidationFormsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: __WEBPACK_IMPORTED_MODULE_3__wizard_wizard_component__["a" /* WizardComponent */]
            }]
    }
];
//# sourceMappingURL=forms.routing.js.map

/***/ }),

/***/ "../../../../../src/app/forms/regularforms/regularforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form method=\"#\" action=\"#\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">\n                                Stacked Form\n                            </h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\">\n                                    <input id=\"checkbox01\" type=\"checkbox\">\n                                    <label for=\"checkbox01\">\n                                        Subscribe to newsletter\n                                    </label>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-fill btn-info\">Submit</button>\n                        </div>\n                    </form>\n                </div> <!-- end card -->\n            </div> <!--  end col-md-6  -->\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form class=\"form-horizontal\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">\n                                Horizontal Form\n                            </h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Email</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"email\" placeholder=\"Email\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Password</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"checkbox\">\n                                        <input id=\"checkbox02\" type=\"checkbox\">\n                                        <label for=\"checkbox02\">\n                                            Remember Me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-info\">\n                                        Sign in\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div> <!-- end card -->\n            </div> <!--  end col-md-6  -->\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Form Elements</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">With help</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control\">\n                                        <span class=\"help-block\">A block of help text that breaks onto a new line.</span>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Password</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"password\" name=\"password\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Placeholder</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"placeholder\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Disabled</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Static control</label>\n                                    <div class=\"col-sm-10\">\n                                        <p class=\"form-control-static\">hello@creative-tim.com</p>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Checkboxes and radios</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox1\" type=\"checkbox\">\n                                            <label for=\"checkbox1\">\n                                                First checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox2\" type=\"checkbox\">\n                                            <label for=\"checkbox2\">\n                                                Second checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"option1\" checked=\"\">\n                                            <label for=\"radio1\">\n                                                 First Radio\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio2\" value=\"option2\">\n                                            <label for=\"radio2\">\n                                                Second Radio\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                   <label class=\"col-sm-2 control-label\">Inline checkboxes</label>\n                                   <div class=\"col-sm-10\">\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox50\" type=\"checkbox\">\n                                           <label for=\"checkbox50\">\n                                               a\n                                           </label>\n                                       </div>\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox51\" type=\"checkbox\">\n                                           <label for=\"checkbox51\">\n                                               b\n                                           </label>\n                                       </div>\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox52\" type=\"checkbox\">\n                                           <label for=\"checkbox52\">\n                                               c\n                                           </label>\n                                       </div>\n                                   </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Input Variants</legend>\n\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Custom Checkboxes &amp; radios</label>\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox5\" type=\"checkbox\">\n                                            <label for=\"checkbox5\">\n                                            Unchecked\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox6\" type=\"checkbox\" checked=\"\">\n                                            <label for=\"checkbox6\">\n                                            Checked\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox7\" type=\"checkbox\" disabled=\"\">\n                                            <label for=\"checkbox7\">\n                                             Disabled unchecked\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox8\" type=\"checkbox\" checked=\"\" disabled=\"\">\n                                            <label for=\"checkbox8\">\n                                                 Disabled checked\n                                            </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-5\">\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio20\" value=\"option20\">\n                                            <label for=\"radio20\">\n                                                 Radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio25\" value=\"option25\" checked=\"\">\n                                            <label for=\"radio25\">\n                                                 Radio is on\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio30\" id=\"radio11\" value=\"option11\" disabled=\"\">\n                                            <label for=\"radio11\">\n                                                 Disabled radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio30\" id=\"radio12\" value=\"option12\" checked=\"\" disabled=\"\">\n                                            <label for=\"radio12\">\n                                                 Disabled radio is on\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group has-success\">\n                                    <label class=\"col-sm-2 control-label\">Input with success</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" value=\"Success\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group has-error\">\n                                    <label class=\"col-sm-2 control-label\">Input with error</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" value=\"Error\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group column-sizing\">\n                                    <label class=\"col-sm-2 control-label\">Column sizing</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <input type=\"text\" placeholder=\".col-md-3\" class=\"form-control\">\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                                <input type=\"text\" placeholder=\".col-md-4\" class=\"form-control\">\n                                            </div>\n                                            <div class=\"col-md-5\">\n                                                <input type=\"text\" placeholder=\".col-md-5\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input groups</label>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">@</span>\n                                            <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">$</span>\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Textarea</label>\n                                    <div class=\"col-sm-10\">\n                                        <textarea class=\"form-control\" placeholder=\"Here can be your nice text\" rows=\"3\"></textarea>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>  <!-- end card -->\n            </div> <!-- end col-md-12 -->\n        </div> <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/regularforms/regularforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularFormsComponent = (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'regularforms-cmp',
            template: __webpack_require__("../../../../../src/app/forms/regularforms/regularforms.component.html")
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());

//# sourceMappingURL=regularforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/forms/validationforms/validationforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title\">\n                                Register Form\n                            </h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"register.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"register.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"control-label\">Confirm Password\n                                    <span class=\"star\">*</span>\n                                </label>\n\n                                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"register.confirmPassword\"\n                                  required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                                <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password mismatch\n                                </small>\n                            </div>\n                            <div class=\"category\">    <span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"checkbox pull-left\">\n                                <input id=\"checkbox1\" name=\"optionsCheckboxes\" type=\"checkbox\" [ngModel]>\n                                <label for=\"checkbox1\">\n                                    Subscribe to newsletter\n                                </label>\n                            </div>\n\n                            <div class=\"form-group text-right\">\n                                <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\" >Register</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f1=\"ngForm\" novalidate (ngSubmit)=\"save1(f1.value, f1.valid)\">\n                        <div class=\"card-header text-center\">\n                            <h4 class=\"card-title\">\n                                Login Form\n                            </h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"login.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"login.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"category\">    <span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Login</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form #f2=\"ngForm\" class=\"form-horizontal\" novalidate (ngSubmit)=\"save2(f2.value, f2.valid)\">\n                        <div class=\"card-content\">\n                            <h4 class=\"card-title\">Type Validation</h4>\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Required Text\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" name=\"text\"  [ngModel]=\"typeValidation.text\"\n                                          required  #text=\"ngModel\">\n                                          <small [hidden]=\"text.valid || (text.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Text is required.\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>required</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Email\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"typeValidation.email\"\n                                          required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                        <small [hidden]=\"email.valid || (email.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Email is required and format should be <i>john@doe.com</i>.\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>email=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Number\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" [ngModel]=\"typeValidation.number\"\n                                          required  #number=\"ngModel\">\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>number=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Url\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" id=\"url\" required pattern=\"https?://.+\" [(ngModel)]=\"typeValidation.url\" name=\"url\" #url=\"ngModel\">\n                                          <small [hidden]=\"url.valid || (url.pristine && !f2.submitted)\" class=\"text-danger\">\n                                            Must be a valid URL!\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>url=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group column-sizing\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Equal to\n                                    </label>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idSource\" [ngModel]=\"typeValidation.idSource\" placeholder=\"#idSource\"\n                                          required validateEqual=\"idDestination\" reverse=\"true\" #idSource=\"ngModel\">\n                                        <small [hidden]=\"idSource.valid || (idSource.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource is required\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idDestination\" [ngModel]=\"typeValidation.idDestination\" placeholder=\"#idDestination\"\n                                          required validateEqual=\"idSource\" reverse=\"false\" #idDestination=\"ngModel\">\n                                        <small [hidden]=\"idDestination.valid || (idDestination.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource mismatch!\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>equalTo=\"#idSource\"</code>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <!-- <h4 class=\"card-title\">Range validation</h4>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Min Length\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"min_length\"\n                                               minLength=\"5\"\n                                        />\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>minLength=\"5\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Max Length\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"max_length\"\n                                               maxLength=\"5\"\n                                        />\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>maxLength=\"5\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Range</label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"range\"\n                                               range=\"[6,10]\"\n                                        />\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>range=\"[6,10]\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Min Value\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"min\"\n                                               min=\"6\"\n                                        />\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>min=\"6\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Max Value\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\"\n                                               type=\"text\"\n                                               name=\"max\"\n                                               max=\"6\"\n                                        />\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>max=\"6\"</code></div>\n                                </div>\n                            </fieldset> -->\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/validationforms/validationforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationFormsComponent = (function () {
    function ValidationFormsComponent() {
    }
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.login = {
            email: '',
            password: ''
        };
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        };
    };
    ValidationFormsComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save1 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    ValidationFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'validationforms-cmp',
            template: __webpack_require__("../../../../../src/app/forms/validationforms/validationforms.component.html")
        })
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());

//# sourceMappingURL=validationforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/forms/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card card-wizard\" id=\"wizardCard\">\n                    <form id=\"wizardForm\" method=\"\" action=\"\">\n                        <div class=\"card-header text-center\">\n                            <h4 class=\"card-title\">Awesome Wizard</h4>\n                            <p class=\"category\">Split a complicated flow in multiple steps</p>\n                        </div>\n                        <div class=\"card-content\">\n                            <ul class=\"nav\">\n                                <li><a href=\"#tab1\" data-toggle=\"tab\">First Tab</a></li>\n                                <li><a href=\"#tab2\" data-toggle=\"tab\">Second Tab</a></li>\n                                <li><a href=\"#tab3\" data-toggle=\"tab\">Third Tab</a></li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane\" id=\"tab1\">\n                                    <h5 class=\"text-center\">Please tell us more about yourself.</h5>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">\n                                                    First Name\n                                                </label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"first_name\"\n                                                       placeholder=\"ex: Mike\"\n                                                />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">\n                                                    Last Name\n                                                </label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"last_name\"\n                                                       required=\"true\"\n                                                       placeholder=\"ex: Andrew\"\n                                                />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">\n                                                    Email    <span class=\"star\">*</span>\n                                                </label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"email\"\n                                                       email=\"true\"\n                                                       placeholder=\"ex: hello@creative-tim.com\"\n                                                />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane\" id=\"tab2\">\n                                    <h5 class=\"text-center\">Please give us more details about your platform.</h5>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Your Website    <span class=\"star\">*</span></label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"website\"\n                                                       url=\"true\"\n                                                       placeholder=\"ex: http://www.creative-tim.com\"\n                                                />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Framework Type</label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"framework\"\n                                                       placeholder=\"ex: http://www.creative-tim.com\"\n                                                />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">\n                                                    Language    <span class=\"star\">*</span>\n                                                </label>\n                                                <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                                 -->\n                                                <select name=\"cities\" class=\"form-control\">\n                                                    <option selected=\"\" disabled=\"\">- language -</option>\n                                                    <option value=\"ms\">Bahasa Melayu</option>\n                                                    <option value=\"ca\">Català</option>\n                                                    <option value=\"da\">Dansk</option>\n                                                    <option value=\"de\">Deutsch</option>\n                                                    <option value=\"en\">English</option>\n                                                    <option value=\"es\">Español</option>\n                                                    <option value=\"el\">Eλληνικά</option>\n                                                    <option value=\"fr\">Français</option>\n                                                    <option value=\"it\">Italiano</option>\n                                                    <option value=\"hu\">Magyar</option>\n                                                    <option value=\"nl\">Nederlands</option>\n                                                    <option value=\"no\">Norsk</option>\n                                                    <option value=\"pl\">Polski</option>\n                                                    <option value=\"pt\">Português</option>\n                                                    <option value=\"fi\">Suomi</option>\n                                                    <option value=\"sv\">Svenska</option>\n                                                    <option value=\"tr\">Türkçe</option>\n                                                    <option value=\"is\">Íslenska</option>\n                                                    <option value=\"cs\">Čeština</option>\n                                                    <option value=\"ru\">Русский</option>\n                                                    <option value=\"th\">ภาษาไทย</option>\n                                                    <option value=\"zh\">中文 (简体)</option>\n                                                    <option value=\"zh-TW\">中文 (繁體)</option>\n                                                    <option value=\"ja\">日本語</option>\n                                                    <option value=\"ko\">한국어</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">\n                                                    Bootstrap Version\n                                                </label>\n                                                <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                                 -->\n                                                <select name=\"cities\" class=\"form-control\">\n                                                    <option selected=\"\" disabled=\"\">- version -</option>\n                                                    <option value=\"1.1\">Bootstrap 1.1</option>\n                                                    <option value=\"2.0\">Bootstrap 2.0</option>\n                                                    <option value=\"3.0\">Bootstrap 3.0</option>\n                                                    <option value=\"4.0\">Bootstrap 4.0(alpha)</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Price</label>\n                                                <input class=\"form-control\"\n                                                       type=\"text\"\n                                                       name=\"price\"\n                                                       placeholder=\"ex: 19.00\"\n                                                />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane\" id=\"tab3\">\n                                    <h2 class=\"text-center text-space\">Yuhuuu! <br><small> \t\t\t\t\t\t\t\t\t\t\t\t\tClick on \"<b>Finish</b>\" to join our community</small></h2>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <button type=\"button\" class=\"btn btn-default btn-fill btn-wd btn-back pull-left\">Back</button>\n                            <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-next pull-right\">Next</button>\n                            <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-finish pull-right\" (click)=\"onFinishWizard()\">Finish</button>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forms/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WizardComponent = (function () {
    function WizardComponent() {
    }
    WizardComponent.prototype.readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    WizardComponent.prototype.onFinishWizard = function () {
        //here you can do something, sent the form to server via ajax and show a success message with swal
        swal("Good job!", "You clicked the finish button!", "success");
    };
    WizardComponent.prototype.ngOnInit = function () {
        var $validator = $("#wizardForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                    minlength: 5
                },
                first_name: {
                    required: false,
                    minlength: 5
                },
                last_name: {
                    required: false,
                    minlength: 5
                },
                website: {
                    required: true,
                    minlength: 5,
                    url: true
                },
                framework: {
                    required: false,
                    minlength: 4
                },
                cities: {
                    required: true
                },
                price: {
                    number: true
                }
            }
        });
        // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard
        $('#wizardCard').bootstrapWizard({
            tabClass: 'nav nav-pills',
            nextSelector: '.btn-next',
            previousSelector: '.btn-back',
            onNext: function (tab, navigation, index) {
                var $valid = $('#wizardForm').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $display_width = $(document).width();
                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }
                navigation.find('li').css('width', $width + '%');
            },
            onTabClick: function (tab, navigation, index) {
                // Disable the posibility to click on tabs
                return false;
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $(wizard).find('.btn-next').hide();
                    $(wizard).find('.btn-finish').show();
                }
                else if ($current == 1) {
                    $(wizard).find('.btn-back').hide();
                }
                else {
                    $(wizard).find('.btn-back').show();
                    $(wizard).find('.btn-next').show();
                    $(wizard).find('.btn-finish').hide();
                }
            }
        });
    };
    WizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'wizard-cmp',
            template: __webpack_require__("../../../../../src/app/forms/wizard/wizard.component.html")
        })
    ], WizardComponent);
    return WizardComponent;
}());

//# sourceMappingURL=wizard.component.js.map

/***/ })

});
//# sourceMappingURL=forms.module.chunk.js.map