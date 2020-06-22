function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/order-details/order-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/order-details/order-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: OrderDetailsComponent */

  /***/
  function srcAppAdminOrderDetailsOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function () {
      return OrderDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/order.service */
    "./src/app/services/order.service.ts");

    var OrderDetailsComponent = /*#__PURE__*/function () {
      function OrderDetailsComponent(activatedRoute, orderService, fb, router) {
        _classCallCheck(this, OrderDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.title = "Order";
      }

      _createClass(OrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);

            _this.initForm();
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _this2 = this;

          this.orderService.getOrderById(this.id).subscribe({
            next: function next(order) {
              _this2.order = order;
              _this2.title = "Order: #".concat(_this2.id); //lama 3mlt new formGroup brdo gab nafs error wtf!
              // this.addOREditCategoryForm = new FormGroup({
              //   name:new FormControl(this.category.name)
              // });

              _this2.orderDetailsForm = _this2.fb.group({
                userId: [{
                  value: _this2.order.userId,
                  disabled: true
                }],
                totalPrice: [{
                  value: _this2.order.totalPrice,
                  disabled: true
                }],
                address: [{
                  value: _this2.order.address,
                  disabled: true
                }],
                status: [{
                  value: _this2.order.status,
                  disabled: true
                }]
              });
            }
          });
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.router.navigate(['/admin/orders']);
        }
      }]);

      return OrderDetailsComponent;
    }();

    OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) {
      return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDetailsComponent,
      selectors: [["app-order-details"]],
      viewQuery: function OrderDetailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      decls: 30,
      vars: 2,
      consts: [[1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], ["autocomplete", "off", 3, "formGroup"], [1, "form-group", "row"], ["for", "UserId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "UserId", "type", "text", "placeholder", "UserId (required)", "formControlName", "userId", 1, "form-control"], ["for", "totalPrice", 1, "col-md-2", "col-form-label"], ["id", "totalPrice", "type", "text", "placeholder", "Total Price (required)", "formControlName", "totalPrice", 1, "form-control"], ["for", "address", 1, "col-md-2", "col-form-label"], ["id", "address", "type", "text", "placeholder", "Address (required)", "formControlName", "address", 1, "form-control"], ["for", "status", 1, "col-md-2", "col-form-label"], ["id", "status", "type", "text", "placeholder", "Status (required)", "formControlName", "status", 1, "form-control"], [1, "row"], [1, "col-md-4", "offset-md-2"], [1, "btn", "btn-outline-secondary", 3, "click"]],
      template: function OrderDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UserId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_button_click_28_listener() {
            return ctx.onBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderDetailsForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-details',
          templateUrl: './order-details.component.html',
          styleUrls: ['./order-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        formInputElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/home/home.component */
    "./src/app/core/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsModule;
        });
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-admin-module */
        "admin-admin-module").then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      }
    }, {
      path: '**',
      redirectTo: '/home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'grocery-store-webapp';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = localStorage.getItem('authToken');

          if (token) {}
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./interceptors/error.interceptor */
    "./src/app/interceptors/error.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptorProvider"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
          providers: [_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptorProvider"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/category-in-home/category-in-home.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/core/category-in-home/category-in-home.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CategoryInHomeComponent */

  /***/
  function srcAppCoreCategoryInHomeCategoryInHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryInHomeComponent", function () {
      return CategoryInHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/products/", a1];
    };

    var CategoryInHomeComponent = /*#__PURE__*/function () {
      function CategoryInHomeComponent() {
        _classCallCheck(this, CategoryInHomeComponent);
      }

      _createClass(CategoryInHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryInHomeComponent;
    }();

    CategoryInHomeComponent.ɵfac = function CategoryInHomeComponent_Factory(t) {
      return new (t || CategoryInHomeComponent)();
    };

    CategoryInHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryInHomeComponent,
      selectors: [["app-category-in-home"]],
      inputs: {
        category: "category"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "category", 3, "routerLink"], ["src", "./../../../assets/images/icon1.1.png", 1, "category-item"], ["src", "./../../../assets/images/icon1.png", 1, "category-item-hovered"], [1, "text-center"]],
      template: function CategoryInHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.category.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".category[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.category-item-hovered[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n}\n.category[_ngcontent-%COMP%]:hover   .category-item[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.category[_ngcontent-%COMP%]:hover   .category-item-hovered[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jYXRlZ29yeS1pbi1ob21lL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxjb3JlXFxjYXRlZ29yeS1pbi1ob21lXFxjYXRlZ29yeS1pbi1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NhdGVnb3J5LWluLWhvbWUvY2F0ZWdvcnktaW4taG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7QUNDWjtBREdRO0VBQ0ksa0JBQUE7QUNEWjtBREdRO0VBQ0ksbUJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY2F0ZWdvcnktaW4taG9tZS9jYXRlZ29yeS1pbi1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJi1pdGVte1xyXG4gICAgICAgICYtaG92ZXJlZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIC5jYXRlZ29yeS1pdGVte1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXRlZ29yeS1pdGVtLWhvdmVyZWR7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhdGVnb3J5LWl0ZW0taG92ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY2F0ZWdvcnk6aG92ZXIgLmNhdGVnb3J5LWl0ZW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY2F0ZWdvcnk6aG92ZXIgLmNhdGVnb3J5LWl0ZW0taG92ZXJlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryInHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-in-home',
          templateUrl: './category-in-home.component.html',
          styleUrls: ['./category-in-home.component.scss']
        }]
      }], function () {
        return [];
      }, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/core/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/core/home/home.component.ts");
    /* harmony import */


    var _category_in_home_category_in_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-in-home/category-in-home.component */
    "./src/app/core/category-in-home/category-in-home.component.ts");
    /* harmony import */


    var _users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../users/users.module */
    "./src/app/users/users.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shopping-cart/shopping-cart.component */
    "./src/app/core/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _products_products_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../products/products.module */
    "./src/app/products/products.module.ts");
    /* harmony import */


    var _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-links/user-links.component */
    "./src/app/core/user-links/user-links.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_11__["UserLinksComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"], _category_in_home_category_in_home_component__WEBPACK_IMPORTED_MODULE_6__["CategoryInHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_11__["UserLinksComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_11__["UserLinksComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"], _category_in_home_category_in_home_component__WEBPACK_IMPORTED_MODULE_6__["CategoryInHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_10__["ProductsModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_11__["UserLinksComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/logo/logo.component */
    "./src/app/shared/logo/logo.component.ts");
    /* harmony import */


    var _shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/search-bar/search-bar.component */
    "./src/app/shared/search-bar/search-bar.component.ts");
    /* harmony import */


    var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shopping-cart/shopping-cart.component */
    "./src/app/core/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user-links/user-links.component */
    "./src/app/core/user-links/user-links.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, router, categoryService, productService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.categoriesSub = this.categoryService.getCategories().subscribe(function (c) {
            return _this3.categories = c.map(function (cat) {
              return cat.name;
            });
          });
          this.userSub = this.authService.currentUserSubject.asObservable().subscribe(function (u) {
            return _this3.user = u;
          });
          this.isLoggedIn = this.authService.isLogged();
        }
      }, {
        key: "handleSearch",
        value: function handleSearch(productSearch) {
          this.productService.getProductsBySearchBar(productSearch);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
          this.categoriesSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 2,
      consts: [[1, "header"], [3, "src"], [3, "categoryNames", "searchSubmit"], [1, "header__right"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchSubmit", function HeaderComponent_Template_app_search_bar_searchSubmit_2_listener($event) {
            return ctx.handleSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-shopping-cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user-links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/images/logo.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoryNames", ctx.categories);
        }
      },
      directives: [_shared_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"], _user_links_user_links_component__WEBPACK_IMPORTED_MODULE_8__["UserLinksComponent"]],
      styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 6rem;\n  background-color: rgba(255, 255, 255, 0.897);\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.7rem;\n  border-bottom: 1px solid #81b03f;\n}\n.header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: black;\n}\napp-shopping-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 2rem;\n  padding-top: 8px;\n}\napp-user-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXGNvcmVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQ0hpQjtFRElqQiw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBRURGO0FGR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRURKO0FGS0E7RUFDRSxtQkFBQTtBRUZGO0FGSUE7RUFDRSxrQkFBQTtBRURGO0FGSUE7RUFDRSxZQUFBO0FFREY7QUZJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVERjtBRklBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmctY29sb3I7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSAxLjdyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAmX19yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5uYXYtaXRlbXtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGlua3tcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmFwcC1zaG9wcGluZy1jYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbmFwcC11c2VyLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iLCIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDEuN3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MWIwM2Y7XG59XG4uaGVhZGVyX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5hdmJhci1uYXYge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYXBwLXNob3BwaW5nLWNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbmFwcC11c2VyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCoreHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _category_in_home_category_in_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category-in-home/category-in-home.component */
    "./src/app/core/category-in-home/category-in-home.component.ts");

    function HomeComponent_app_category_in_home_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-in-home", 13);
      }

      if (rf & 2) {
        var cat_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", cat_r1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(categoryService) {
        _classCallCheck(this, HomeComponent);

        this.categoryService = categoryService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.categoryService.getCategories().subscribe(function (c) {
            return _this4.categories = c;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 19,
      vars: 1,
      consts: [[1, "bg", "d-flex", "align-items-center"], [1, "bg-content", "text-center"], [1, "font-weight-bold"], [1, "pt-3", "pb-3", "f-sm", "font-weight-light", "text-muted"], [1, "btn", "bg-green-light", "text-white"], [1, "fa", "fa-chevron-right", "font-sm", "font-weight-light"], [1, "categories", "pt-10", "pb-8"], [1, "container"], [1, "categories-header", "text-center", "pb-6"], [1, "text-green-light"], [1, "font-lg", "mt-3"], [1, "categories-body", "d-flex", "flex-wrap", "justify-content-center"], ["class", "categories-item d-flex justify-content-center p-3", 3, "category", 4, "ngFor", "ngForOf"], [1, "categories-item", "d-flex", "justify-content-center", "p-3", 3, "category"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Organic Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Order now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Green Agriculture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Welcome To WebsiteName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_app_category_in_home_18_Template, 1, 1, "app-category-in-home", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _category_in_home_category_in_home_component__WEBPACK_IMPORTED_MODULE_3__["CategoryInHomeComponent"]],
      styles: [".font-sm[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.font-lg[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: bold;\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n\n.btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n.bg-green-light[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n}\n\n.text-green-light[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('bg-slide-01.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 700px;\n  font-size: 12px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 34px;\n}\n\n.categories-item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media (min-width: 576px) {\n  .bg-content[_ngcontent-%COMP%] {\n    width: 75%;\n    font-size: 13px;\n    padding-left: 65px;\n  }\n\n  .categories-item[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n@media (min-width: 768px) {\n  .bg-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 60%;\n  }\n}\n\n@media (min-width: 992px) {\n  .bg[_ngcontent-%COMP%] {\n    background-image: url('bg-slide-01.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    height: 700px;\n    font-size: 16px;\n  }\n  .bg-content[_ngcontent-%COMP%] {\n    margin-left: 80px;\n    width: 50%;\n  }\n\n  .categories-item[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxjb3JlXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ob21lL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJSTtFQUNJLG1EQUFBO0FDRFI7O0FER0k7RUFDSSxzQkFBQTtBQ0RSOztBREVRO0VBQ0ksMEJBQUE7QUNBWjs7QURLQTtFQUNJLHlCRXRCWTtBRG9CaEI7O0FESUE7RUFDSSxjRXpCWTtBRHdCaEI7O0FES0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRko7O0FER0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURLSTtFQUNJLFVBQUE7QUNGUjs7QURNQTtFQUVRO0lBQ0ksVUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0pWOztFRFFNO0lBQ0ksVUFBQTtFQ0xWO0FBQ0Y7O0FEUUE7RUFFUTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VDUFY7QUFDRjs7QURVQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0NBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ1JOO0VEU007SUFDSSxpQkFBQTtJQUNBLFVBQUE7RUNQVjs7RURXTTtJQUNJLFVBQUE7RUNSVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0XCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi8vdXRpbGl0aWVzXHJcbi5mb250LXNte1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuLmZvbnQtbGd7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnRue1xyXG4gICAgaXtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMzMztcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1ncmVlbi1saWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcbi50ZXh0LWdyZWVuLWxpZ2h0e1xyXG4gICAgY29sb3I6JHByaW1hcnktY29sb3I7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXNsaWRlLTAxLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgJi1jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzRweDtcclxuICAgIH1cclxufVxyXG4uY2F0ZWdvcmllc3tcclxuICAgICYtaXRlbXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjU3NnB4KXtcclxuICAgIC5iZ3tcclxuICAgICAgICAmLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXRlZ29yaWVze1xyXG4gICAgICAgICYtaXRlbXtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuYmd7XHJcbiAgICAgICAgJi1jb250ZW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6OTkycHgpe1xyXG4gICAgLmJne1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXNsaWRlLTAxLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICYtY29udGVudHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXN7XHJcbiAgICAgICAgJi1pdGVte1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLmZvbnQtc20ge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLmZvbnQtbGcge1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuIGkge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5idG46aG92ZXIgaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xufVxuXG4uYmctZ3JlZW4tbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFiMDNmO1xufVxuXG4udGV4dC1ncmVlbi1saWdodCB7XG4gIGNvbG9yOiAjODFiMDNmO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctc2xpZGUtMDEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogNzAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5iZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMzRweDtcbn1cblxuLmNhdGVnb3JpZXMtaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYmctY29udGVudCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2NXB4O1xuICB9XG5cbiAgLmNhdGVnb3JpZXMtaXRlbSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5iZy1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXNsaWRlLTAxLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYmctY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jYXRlZ29yaWVzLWl0ZW0ge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn0iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/shopping-cart/shopping-cart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/shopping-cart/shopping-cart.component.ts ***!
    \***************************************************************/

  /*! exports provided: ShoppingCartComponent */

  /***/
  function srcAppCoreShoppingCartShoppingCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
      return ShoppingCartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/signal-r.service */
    "./src/app/services/signal-r.service.ts");
    /* harmony import */


    var _shared_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/dropdown-menu/dropdown-menu.component */
    "./src/app/shared/dropdown-menu/dropdown-menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _products_product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../products/product-in-cart/product-in-cart.component */
    "./src/app/products/product-in-cart/product-in-cart.component.ts");

    function ShoppingCartComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.products == null ? null : ctx_r0.products.length);
      }
    }

    function ShoppingCartComponent_div_4_app_product_in_cart_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-in-cart", 9);
      }

      if (rf & 2) {
        var product_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r3);
      }
    }

    function ShoppingCartComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShoppingCartComponent_div_4_app_product_in_cart_1_Template, 1, 1, "app-product-in-cart", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartComponent_div_4_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.submitOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Check out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.products);
      }
    }

    var ShoppingCartComponent = /*#__PURE__*/function () {
      function ShoppingCartComponent(productService, signalRService) {
        _classCallCheck(this, ShoppingCartComponent);

        this.productService = productService;
        this.signalRService = signalRService;
      }

      _createClass(ShoppingCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.sub = this.productService.getCartProducts().subscribe(function (p) {
            return _this5.products = p;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "submitOrder",
        value: function submitOrder() {
          // ordering logic
          // simulation for new order( for testing only )
          var order = {
            id: 1,
            totalPrice: 50,
            userId: '5',
            status: 1,
            orderItems: null
          };
          this.signalRService.userAddedOrder(order);
        }
      }]);

      return ShoppingCartComponent;
    }();

    ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) {
      return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__["SignalRService"]));
    };

    ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShoppingCartComponent,
      selectors: [["app-shopping-cart"]],
      decls: 5,
      vars: 2,
      consts: [["menuPosition", "middle"], [1, "dropdown-button", "cart-btn"], [1, "fa", "fa-shopping-cart"], ["class", "cart-btn__notification", 4, "ngIf"], ["class", "dropdown-items cart-items", 4, "ngIf"], [1, "cart-btn__notification"], [1, "dropdown-items", "cart-items"], [3, "product", 4, "ngFor", "ngForOf"], [1, "round-edge-btn", 3, "click"], [3, "product"]],
      template: function ShoppingCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dropdown-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShoppingCartComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShoppingCartComponent_div_4_Template, 4, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products == null ? null : ctx.products.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products && ctx.products.length);
        }
      },
      directives: [_shared_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_3__["DropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _products_product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_5__["ProductInCartComponent"]],
      styles: [".cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cart-btn__notification[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: red;\n  font-size: 0.7rem;\n  top: -0.5rem;\n  right: -0.5rem;\n  color: white;\n  width: 1rem;\n  height: 1rem;\n  line-height: 0.9rem;\n  text-align: center;\n  border-radius: 300px;\n  z-index: 1;\n}\n.cart-items[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.cart-items[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.cart-items[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaG9wcGluZy1jYXJ0L0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxjb3JlXFxzaG9wcGluZy1jYXJ0XFxzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zaG9wcGluZy1jYXJ0L0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNESjtBREtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7QURJRTtFQUNFLHFCQUFBO0FDRko7QURLRTtFQUNFLHlCRS9CWTtBRDRCaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlcyc7XHJcblxyXG4uY2FydC1idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fbm90aWZpY2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgdG9wOiAtMC41cmVtO1xyXG4gICAgcmlnaHQ6IC0wLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjlyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1pdGVtcyB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICB9XHJcbn1cclxuIiwiLmNhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcnQtYnRuX19ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHRvcDogLTAuNXJlbTtcbiAgcmlnaHQ6IC0wLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcnQtaXRlbXMge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYXJ0LWl0ZW1zICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5jYXJ0LWl0ZW1zIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWIwM2Y7XG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shopping-cart',
          templateUrl: './shopping-cart.component.html',
          styleUrls: ['./shopping-cart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__["SignalRService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/user-links/user-links.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/user-links/user-links.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserLinksComponent */

  /***/
  function srcAppCoreUserLinksUserLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLinksComponent", function () {
      return UserLinksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/user-role */
    "./src/app/models/user-role.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/dropdown-menu/dropdown-menu.component */
    "./src/app/shared/dropdown-menu/dropdown-menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/admin"];
    };

    function UserLinksComponent_div_0_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function UserLinksComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-dropdown-menu", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLinksComponent_div_0_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onLogoutClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserLinksComponent_div_0_a_9_Template, 2, 2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "/profile/" + (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.id)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
      }
    }

    var _c2 = function _c2() {
      return ["/login"];
    };

    var _c3 = function _c3() {
      return ["/register"];
    };

    function UserLinksComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
      }
    }

    var UserLinksComponent = /*#__PURE__*/function () {
      function UserLinksComponent(authService) {
        _classCallCheck(this, UserLinksComponent);

        this.authService = authService;
      }

      _createClass(UserLinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.isLoggedIn = this.authService.isLogged();
          this.userSub = this.authService.getCurrentUser().asObservable().subscribe(function (u) {
            _this6.currentUser = u;
            _this6.isAdmin = _this6.currentUser && _this6.currentUser.role === src_app_models_user_role__WEBPACK_IMPORTED_MODULE_1__["UserRole"].Admin;
          });
        }
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.userSub.unsubscribe();
          this.authService.logout();
        }
      }]);

      return UserLinksComponent;
    }();

    UserLinksComponent.ɵfac = function UserLinksComponent_Factory(t) {
      return new (t || UserLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    UserLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserLinksComponent,
      selectors: [["app-user-links"]],
      decls: 2,
      vars: 2,
      consts: [["class", "user-dropdown", 4, "ngIf"], ["class", "auth-btns", 4, "ngIf"], [1, "user-dropdown"], ["menuPosition", "left"], [1, "dropdown-button"], ["src", "../../../assets/images/profile.jpg", 1, "user-dropdown__img"], [1, "dropdown-items", "user-dropdown__menu"], [1, "user-dropdown__item", 3, "routerLink"], [1, "user-dropdown__item", 3, "click"], ["class", "user-dropdown__item", 3, "routerLink", 4, "ngIf"], [1, "auth-btns"], [1, "round-edge-btn", "auth-btns__btn", 3, "routerLink"], [1, "round-edge-btn", "reverse-colors", "auth-btns__btn", 3, "routerLink"]],
      template: function UserLinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserLinksComponent_div_0_Template, 10, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserLinksComponent_div_1_Template, 7, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".user-dropdown__img[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 1000px;\n}\n.user-dropdown__menu[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.user-dropdown__item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n}\n.user-dropdown__item[_ngcontent-%COMP%]:hover {\n  background-color: #bff1bf;\n}\n.auth-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.auth-btns__btn[_ngcontent-%COMP%] {\n  min-width: 5rem;\n}\n.round-edge-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #81b03f;\n  color: rgba(255, 255, 255, 0.897);\n  height: 2rem;\n  border-radius: 2rem;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  text-align: center;\n  padding: 0.1rem 0.7rem;\n  border: 1px solid #81b03f;\n  cursor: pointer;\n}\n.round-edge-btn[_ngcontent-%COMP%]:hover {\n  opacity: 95%;\n  color: rgba(255, 255, 255, 0.897);\n}\n.reverse-colors[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.897);\n  color: #81b03f;\n}\n.reverse-colors[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.897);\n  background-color: #81b03f;\n}\n@media (min-width: 320px) {\n  .auth-btns__btn__btn[_ngcontent-%COMP%] {\n    margin: 0 0.1rem;\n  }\n}\n@media (min-width: 576px) {\n  .auth-btns__btn[_ngcontent-%COMP%] {\n    margin: 0 0.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLWxpbmtzL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxjb3JlXFx1c2VyLWxpbmtzXFx1c2VyLWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3VzZXItbGlua3MvdXNlci1saW5rcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS91c2VyLWxpbmtzL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDRko7QURLRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0hKO0FETUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNKSjtBREtJO0VBQ0UseUJBQUE7QUNITjtBRFFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDTEY7QURPRTtFQUNFLGVBQUE7QUNMSjtBRFNBO0VBQ0UscUJBQUE7RUFDQSx5QkVsQ2M7RUZtQ2QsaUNFbENpQjtFRm1DakIsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ05GO0FEUUU7RUFDRSxZQUFBO0VBQ0EsaUNFN0NlO0FEdUNuQjtBRFVBO0VBQ0UsNENFbERpQjtFRm1EakIsY0VwRGM7QUQ2Q2hCO0FEU0U7RUFDRSxpQ0V0RGU7RUZ1RGYseUJFeERZO0FEaURoQjtBRFdBO0VBRUk7SUFDRSxnQkFBQTtFQ1RKO0FBQ0Y7QURhQTtFQUVJO0lBQ0UsZ0JBQUE7RUNaSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS91c2VyLWxpbmtzL3VzZXItbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLnVzZXItZHJvcGRvd24ge1xyXG4gICZfX2ltZyB7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuICAmX19tZW51IHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjQxLCAxOTEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmF1dGgtYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgJl9fYnRuIHtcclxuICAgIG1pbi13aWR0aDogNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3VuZC1lZGdlLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1iZy1jb2xvcjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjdyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDk1JTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1iZy1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZlcnNlLWNvbG9ycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmctY29sb3I7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1iZy1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRzbWFsbC1waG9uZSkge1xyXG4gIC5hdXRoLWJ0bnNfX2J0biB7XHJcbiAgICAmX19idG4ge1xyXG4gICAgICBtYXJnaW46IDAgMC4xcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6ICRsYW5kc2NhcGUpIHtcclxuICAuYXV0aC1idG5zIHtcclxuICAgICZfX2J0biB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi51c2VyLWRyb3Bkb3duX19pbWcge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xufVxuLnVzZXItZHJvcGRvd25fX21lbnUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4udXNlci1kcm9wZG93bl9faXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXNlci1kcm9wZG93bl9faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmYxYmY7XG59XG5cbi5hdXRoLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmF1dGgtYnRuc19fYnRuIHtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuXG4ucm91bmQtZWRnZS1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWIwM2Y7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xcmVtIDAuN3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgxYjAzZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdW5kLWVkZ2UtYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogOTUlO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XG59XG5cbi5yZXZlcnNlLWNvbG9ycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xuICBjb2xvcjogIzgxYjAzZjtcbn1cbi5yZXZlcnNlLWNvbG9yczpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYjAzZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5hdXRoLWJ0bnNfX2J0bl9fYnRuIHtcbiAgICBtYXJnaW46IDAgMC4xcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmF1dGgtYnRuc19fYnRuIHtcbiAgICBtYXJnaW46IDAgMC4zcmVtO1xuICB9XG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-links',
          templateUrl: './user-links.component.html',
          styleUrls: ['./user-links.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          // if the user already logged in
          if (this.authService.isLogged()) {
            // write a message that you already logged in so you can't login or register again
            // this.router.navigateByUrl[''];
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/user-profile.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/guards/user-profile.guard.ts ***!
    \**********************************************/

  /*! exports provided: UserProfileGuard */

  /***/
  function srcAppGuardsUserProfileGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileGuard", function () {
      return UserProfileGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserProfileGuard = /*#__PURE__*/function () {
      function UserProfileGuard(authService, router) {
        _classCallCheck(this, UserProfileGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(UserProfileGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.log(next.params.id);
          var userId;
          this.authService.currentUserSubject.asObservable().subscribe(function (data) {
            userId = data.id;
          });

          if (!(this.authService.isLogged && next.params.id === userId)) {
            this.router.navigate(['/home']);
            return false;
          }

          return true;
        }
      }]);

      return UserProfileGuard;
    }();

    UserProfileGuard.ɵfac = function UserProfileGuard_Factory(t) {
      return new (t || UserProfileGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserProfileGuard,
      factory: UserProfileGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptors/error.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/error.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */

  /***/
  function srcAppInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function () {
      return ErrorInterceptorProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor() {
        _classCallCheck(this, ErrorInterceptor);
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status === 401) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
            }

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              var applicationError = error.headers.get('Application-Error');

              if (applicationError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
              }

              var serverError = error.error;
              var modalStateErrors = '';

              if (serverError.errors && typeof serverError.errors === 'object') {
                for (var key in serverError.errors) {
                  if (serverError.errors[key]) {
                    modalStateErrors += serverError.errors[key] + '\n';
                  }
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modalStateErrors || serverError || 'Unknown server error');
            }
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)();
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var ErrorInterceptorProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: ErrorInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/models/user-role.ts":
  /*!*************************************!*\
    !*** ./src/app/models/user-role.ts ***!
    \*************************************/

  /*! exports provided: UserRole */

  /***/
  function srcAppModelsUserRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRole", function () {
      return UserRole;
    });

    var UserRole;

    (function (UserRole) {
      UserRole["Admin"] = "Admin";
      UserRole["User"] = "User";
    })(UserRole || (UserRole = {}));
    /***/

  },

  /***/
  "./src/app/orders/order-item/order-item.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/orders/order-item/order-item.component.ts ***!
    \***********************************************************/

  /*! exports provided: OrderItemComponent */

  /***/
  function srcAppOrdersOrderItemOrderItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItemComponent", function () {
      return OrderItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/product.service */
    "./src/app/services/product.service.ts");

    var OrderItemComponent = /*#__PURE__*/function () {
      function OrderItemComponent(productService) {
        _classCallCheck(this, OrderItemComponent);

        this.productService = productService;
      }

      _createClass(OrderItemComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          //for testing only
          this.product = {
            id: 1,
            name: 'product',
            price: 10,
            imgUrl: ["https://i.pinimg.com/originals/5b/33/29/5b3329d43efc1792543ab088265ec68c.png"]
          }; // this.productService.getProductById(this.orderItem.productId).subscribe({
          //   next: product => this.product = product
          // });

          this.orderItem.price = this.getPrice();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPrice",
        value: function getPrice() {
          return this.orderItem.quantity * this.product.price;
        }
      }]);

      return OrderItemComponent;
    }();

    OrderItemComponent.ɵfac = function OrderItemComponent_Factory(t) {
      return new (t || OrderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    OrderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderItemComponent,
      selectors: [["app-order-item"]],
      inputs: {
        orderItem: "orderItem"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 4,
      consts: [[1, "order-details__product"], ["alt", "", "srcset", "", 3, "src"], [1, "card-text"]],
      template: function OrderItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Product Name: ", ctx.product.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quantity: ", ctx.orderItem.quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.orderItem.price, "$");
        }
      },
      styles: [".order-details__product[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-55%);\n  width: 150px;\n}\n\n@media only screen and (max-width: 480px) {\n  img[_ngcontent-%COMP%] {\n    position: unset !important;\n    right: unset !important;\n    top: unset !important;\n    transform: unset !important;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVyLWl0ZW0vSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXG9yZGVyc1xcb3JkZXItaXRlbVxcb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXJzL29yZGVyLWl0ZW0vb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFDSTtJQUNFLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0Esa0JBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVyLWl0ZW0vb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1kZXRhaWxzX19wcm9kdWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDp1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6dW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfSIsIi5vcmRlci1kZXRhaWxzX19wcm9kdWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICBpbWcge1xuICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHRvcDogdW5zZXQgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-item',
          templateUrl: './order-item.component.html',
          styleUrls: ['./order-item.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, {
        orderItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/orders/order/order.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/order/order.component.ts ***!
    \*************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrdersOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent() {
        _classCallCheck(this, OrderComponent);
      }

      _createClass(OrderComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          setTimeout(function () {
            _this7.order.totalPrice = _this7.getTotalPrice();
          }, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          var total = 0;

          var _iterator = _createForOfIteratorHelper(this.order.orderItems),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var orderItem = _step.value;
              total += orderItem.price;
              console.log("inside");
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return total;
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)();
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["app-order"]],
      inputs: {
        order: "order"
      },
      decls: 0,
      vars: 0,
      template: function OrderComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.scss']
        }]
      }], function () {
        return [];
      }, {
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders-container/orders-container.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/orders/orders-container/orders-container.component.ts ***!
    \***********************************************************************/

  /*! exports provided: OrdersContainerComponent */

  /***/
  function srcAppOrdersOrdersContainerOrdersContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersContainerComponent", function () {
      return OrdersContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../order/order.component */
    "./src/app/orders/order/order.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/orders", a1];
    };

    function OrdersContainerComponent_app_order_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-order", 3);
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", item_r1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id));
      }
    }

    var OrdersContainerComponent = /*#__PURE__*/function () {
      function OrdersContainerComponent(orderService) {
        _classCallCheck(this, OrdersContainerComponent);

        this.orderService = orderService;
        this.orders = [];
      }

      _createClass(OrdersContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.orderService.getOrders().subscribe({
            next: function next(orders) {
              _this8.orders = orders;
            }
          });
        }
      }]);

      return OrdersContainerComponent;
    }();

    OrdersContainerComponent.ɵfac = function OrdersContainerComponent_Factory(t) {
      return new (t || OrdersContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]));
    };

    OrdersContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersContainerComponent,
      selectors: [["app-orders-container"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [1, "d-flex", "flex-wrap"], ["style", "cursor: pointer;", "class", "d-flex justify-content-center p-3", 3, "order", "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "p-3", 2, "cursor", "pointer", 3, "order", "routerLink"]],
      template: function OrdersContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrdersContainerComponent_app_order_2_Template, 1, 4, "app-order", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".font-sm[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.font-lg[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: bold;\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n\n.btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n.bg-green-light[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n}\n\n.text-green-light[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('bg-slide-01.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 700px;\n  font-size: 12px;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 34px;\n}\n\n.categories-item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media (min-width: 576px) {\n  .bg-content[_ngcontent-%COMP%] {\n    width: 75%;\n    font-size: 13px;\n    padding-left: 65px;\n  }\n\n  .categories-item[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n@media (min-width: 768px) {\n  .bg-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 60%;\n  }\n}\n\n@media (min-width: 992px) {\n  .bg[_ngcontent-%COMP%] {\n    background-image: url('bg-slide-01.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    height: 700px;\n    font-size: 16px;\n  }\n  .bg-content[_ngcontent-%COMP%] {\n    margin-left: 80px;\n    width: 50%;\n  }\n\n  .categories-item[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy1jb250YWluZXIvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXGNvcmVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVycy9vcmRlcnMtY29udGFpbmVyL29yZGVycy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVycy9vcmRlcnMtY29udGFpbmVyL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJSTtFQUNJLG1EQUFBO0FDRFI7O0FER0k7RUFDSSxzQkFBQTtBQ0RSOztBREVRO0VBQ0ksMEJBQUE7QUNBWjs7QURLQTtFQUNJLHlCRXRCWTtBRG9CaEI7O0FESUE7RUFDSSxjRXpCWTtBRHdCaEI7O0FES0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRko7O0FER0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURLSTtFQUNJLFVBQUE7QUNGUjs7QURNQTtFQUVRO0lBQ0ksVUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0pWOztFRFFNO0lBQ0ksVUFBQTtFQ0xWO0FBQ0Y7O0FEUUE7RUFFUTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VDUFY7QUFDRjs7QURVQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0NBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ1JOO0VEU007SUFDSSxpQkFBQTtJQUNBLFVBQUE7RUNQVjs7RURXTTtJQUNJLFVBQUE7RUNSVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzL29yZGVycy1jb250YWluZXIvb3JkZXJzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnRcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLy91dGlsaXRpZXNcclxuLmZvbnQtc217XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufVxyXG4uZm9udC1sZ3tcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG57XHJcbiAgICBpe1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzMzO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJnLWdyZWVuLWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuLnRleHQtZ3JlZW4tbGlnaHR7XHJcbiAgICBjb2xvcjokcHJpbWFyeS1jb2xvcjtcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctc2xpZGUtMDEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAmLWNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcbi5jYXRlZ29yaWVze1xyXG4gICAgJi1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NTc2cHgpe1xyXG4gICAgLmJne1xyXG4gICAgICAgICYtY29udGVudHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXN7XHJcbiAgICAgICAgJi1pdGVte1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5iZ3tcclxuICAgICAgICAmLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1pbi13aWR0aDo5OTJweCl7XHJcbiAgICAuYmd7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctc2xpZGUtMDEuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgJi1jb250ZW50e1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcmllc3tcclxuICAgICAgICAmLWl0ZW17XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuZm9udC1zbSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uZm9udC1sZyB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG4gaSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuLmJ0bjpob3ZlciBpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG59XG5cbi5iZy1ncmVlbi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWIwM2Y7XG59XG5cbi50ZXh0LWdyZWVuLWxpZ2h0IHtcbiAgY29sb3I6ICM4MWIwM2Y7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1zbGlkZS0wMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJnLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xufVxuXG4uY2F0ZWdvcmllcy1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5iZy1jb250ZW50IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XG4gIH1cblxuICAuY2F0ZWdvcmllcy1pdGVtIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmJnLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctc2xpZGUtMDEuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5iZy1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNhdGVnb3JpZXMtaXRlbSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufSIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzgxYjAzZjtcclxuJHByaW1hcnktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gYnJlYWtwb2ludHNcclxuJHNtYWxsLXBob25lOiAzMjBweDtcclxuJGxhbmRzY2FwZTogNTc2cHg7XHJcbiR0YWJsZXQ6IDc2OHB4O1xyXG4kZGVza3RvcDogOTkycHg7XHJcbiRsYXJnZS1kZXNrdG9wOiAxMjAwcHg7XHJcblxyXG4vLyBCb290c3RyYXAgb3ZlcnJpZGRlbiB2YXJpYWJsZXNcclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgICAxOiAoJHNwYWNlciAqIC4yNSksICAgICAvLzRweFxyXG4gICAgIDI6ICgkc3BhY2VyICogLjUpLCAgICAgIC8vOHB4XHJcbiAgICAgMzogJHNwYWNlciwgICAgICAgICAgICAgLy8xNnB4XHJcbiAgICAgNDogKCRzcGFjZXIgKiAxLjUpLCAgICAgLy8yNHB4XHJcbiAgICAgNTogKCRzcGFjZXIgKiAzKSwgICAgICAgLy80OHB4XHJcbiAgICAgNjogKCRzcGFjZXIgKiA0KSwgICAgICAgLy82NHB4XHJcbiAgICAgNzogKCRzcGFjZXIgKiA1KSwgICAgICAgLy84MHB4XHJcbiAgICAgODogKCRzcGFjZXIgKiA2LjI1KSwgICAgLy8xMDBweFxyXG4gICAgIDk6ICgkc3BhY2VyICogNy41KSwgICAgIC8vMTIwcHhcclxuICAgICAxMDogKCRzcGFjZXIgKiA5LjM3NSksICAvLzE1MHB4XHJcbiAgICAgMTE6ICgkc3BhY2VyICogMTApLCAgICAgLy8xNjBweFxyXG4gICAgIDE2OiAoJHNwYWNlciAqIDE2KSwgICAgIC8vMjU2cHhcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders-container',
          templateUrl: './orders-container.component.html',
          styleUrls: ['./orders-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders-container/orders-container.component */
    "./src/app/orders/orders-container/orders-container.component.ts");
    /* harmony import */


    var _admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../admin/order-details/order-details.component */
    "./src/app/admin/order-details/order-details.component.ts");

    var routes = [{
      path: 'orders',
      component: _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_3__["OrdersContainerComponent"],
      children: [{
        path: '',
        component: _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_3__["OrdersContainerComponent"],
        pathMatch: 'full'
      }, {
        path: ':id',
        component: _admin_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsComponent"]
      }]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersRoutingModule
    });
    OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersRoutingModule_Factory(t) {
        return new (t || OrdersRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders-container/orders-container.component */
    "./src/app/orders/orders-container/orders-container.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/orders/order/order.component.ts");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-item/order-item.component */
    "./src/app/orders/order-item/order-item.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersModule
    });
    OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersModule_Factory(t) {
        return new (t || OrdersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, {
        declarations: [_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_2__["OrdersContainerComponent"], _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_6__["OrderItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        exports: [_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_2__["OrdersContainerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_2__["OrdersContainerComponent"], _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_6__["OrderItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
          exports: [_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_2__["OrdersContainerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/categories-list/categories-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/products/categories-list/categories-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CategoriesListComponent */

  /***/
  function srcAppProductsCategoriesListCategoriesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function () {
      return CategoriesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category/category.component */
    "./src/app/products/category/category.component.ts");

    function CategoriesListComponent_app_category_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category", 7);
      }

      if (rf & 2) {
        var category_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r2);
      }
    }

    var CategoriesListComponent = /*#__PURE__*/function () {
      // subscription: Subscription;
      function CategoriesListComponent(categoryService) {
        _classCallCheck(this, CategoriesListComponent);

        this.categoryService = categoryService;
        this.categoriesExpanded = false;
      }

      _createClass(CategoriesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.categoryService.getCategories().subscribe(function (c) {
            return _this9.categories = c;
          });
        }
      }, {
        key: "toggleCategories",
        value: function toggleCategories() {
          var categoriesList = document.getElementsByClassName('categoriesList-wrapper')[0];

          if (!this.categoriesExpanded) {
            categoriesList.style.transform = 'translateX(0)';
          } else {
            categoriesList.style.transform = 'translateX(-66.6%)';
          }

          this.categoriesExpanded = !this.categoriesExpanded;
        }
      }]);

      return CategoriesListComponent;
    }();

    CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) {
      return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]));
    };

    CategoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriesListComponent,
      selectors: [["app-categories-list"]],
      decls: 8,
      vars: 1,
      consts: [[1, "categoriesList-wrapper"], ["categoriesList", ""], [1, "container", "categories-container"], [1, "row"], [1, "col-12"], [1, "text-center", "pb-4"], [3, "category", 4, "ngFor", "ngForOf"], [3, "category"]],
      template: function CategoriesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Filter By Category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoriesListComponent_app_category_7_Template, 1, 1, "app-category", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]],
      styles: [".categoriesList-wrapper[_ngcontent-%COMP%]   .categories-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2F0ZWdvcmllcy1saXN0L0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxwcm9kdWN0c1xcY2F0ZWdvcmllcy1saXN0XFxjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NhdGVnb3JpZXMtbGlzdC9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jYXRlZ29yaWVzLWxpc3QvY2F0ZWdvcmllcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCSTtFQUNFLGNDakJVO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY2F0ZWdvcmllcy1saXN0L2NhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGlucyc7XHJcblxyXG5cclxuLy8gQGluY2x1ZGUgcmVzcG9uc2l2ZShwaG9uZSkge1xyXG4uY2F0ZWdvcmllc0xpc3Qtd3JhcHBlciB7XHJcbiAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vIHBhZGRpbmc6IDJlbSAxZW07XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIC8vIHotaW5kZXg6IDE7XHJcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTY2LjYlKTtcclxuICAvLyB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgLmNhdGVnb3JpZXMtY29udGFpbmVyIHtcclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLnRvZ2dsZS1zaWRlYmFyIHtcclxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAvLyB9XHJcbn1cclxuLy8gfVxyXG5cclxuLy8gQGluY2x1ZGUgcmVzcG9uc2l2ZSh0YWJsZXQpIHtcclxuLy8gICAuY2F0ZWdvcmllc0xpc3Qtd3JhcHBlciB7XHJcbi8vICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHJcbi8vICAgICAudG9nZ2xlLXNpZGViYXIge1xyXG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iLCIuY2F0ZWdvcmllc0xpc3Qtd3JhcHBlciAuY2F0ZWdvcmllcy1jb250YWluZXIgaDQge1xuICBjb2xvcjogIzgxYjAzZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categories-list',
          templateUrl: './categories-list.component.html',
          styleUrls: ['./categories-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/category/category.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/products/category/category.component.ts ***!
    \*********************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppProductsCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function CategoryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "/admin/categories/" + ctx_r0.category.id + "/edit"));
      }
    }

    var CategoryComponent = /*#__PURE__*/function () {
      function CategoryComponent(authService) {
        _classCallCheck(this, CategoryComponent);

        this.authService = authService;
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["app-category"]],
      inputs: {
        category: "category"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "row", "p-2", "justify-content-center"], ["class", "col-4", 4, "ngIf"], [1, "col-8"], ["routerLinkActive", "active-category", 1, "category-link", 2, "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "justify-content-around"], [1, "col-4"], [2, "cursor", "pointer", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_div_1_Template, 3, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/products/" + ctx.category.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".category-link[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.category-link[_ngcontent-%COMP%]:not(.active-category)::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-left: 0.1rem solid #c7c7c7;\n  border-bottom: 0.1rem solid #c7c7c7;\n  transform-origin: bottom left;\n  transform: scale(0);\n  transition: all 0.5s;\n}\n.category-link[_ngcontent-%COMP%]:not(.active-category)::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-top: 0.1rem solid #c7c7c7;\n  border-right: 0.1rem solid #c7c7c7;\n  transform-origin: top right;\n  transform: scale(0);\n  transition: all 0.5s;\n}\n.category-link[_ngcontent-%COMP%]:not(.active-category):hover {\n  color: #c7c7c7;\n  text-decoration: none;\n}\n.category-link[_ngcontent-%COMP%]:not(.active-category):hover::before, .category-link[_ngcontent-%COMP%]:not(.active-category):hover::after {\n  transform: scale(1);\n}\n.active-category[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n.active-category[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0.1rem solid #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2F0ZWdvcnkvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXHByb2R1Y3RzXFxjYXRlZ29yeVxcY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jYXRlZ29yeS9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNISjtBRE1RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNKWjtBRE1RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNKWjtBRE1RO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDSlY7QURLVTtFQUNFLG1CQUFBO0FDSFo7QURTQTtFQUNJLGNFOUNZO0FEd0NoQjtBRFFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21peGlucyc7XHJcblxyXG4uY2F0ZWdvcnktbGluayB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6bm90KC5hY3RpdmUtY2F0ZWdvcnkpIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAuMXJlbSBzb2xpZCAjYzdjN2M3O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2M3YzdjNztcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2M3YzdjNztcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI2M3YzdjNztcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2M3YzdjNztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZS1jYXRlZ29yeSB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiLmNhdGVnb3J5LWxpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5jYXRlZ29yeS1saW5rOm5vdCguYWN0aXZlLWNhdGVnb3J5KTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAwLjFyZW0gc29saWQgI2M3YzdjNztcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNjN2M3Yzc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jYXRlZ29yeS1saW5rOm5vdCguYWN0aXZlLWNhdGVnb3J5KTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNjN2M3Yzc7XG4gIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkICNjN2M3Yzc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY2F0ZWdvcnktbGluazpub3QoLmFjdGl2ZS1jYXRlZ29yeSk6aG92ZXIge1xuICBjb2xvcjogI2M3YzdjNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNhdGVnb3J5LWxpbms6bm90KC5hY3RpdmUtY2F0ZWdvcnkpOmhvdmVyOjpiZWZvcmUsIC5jYXRlZ29yeS1saW5rOm5vdCguYWN0aXZlLWNhdGVnb3J5KTpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uYWN0aXZlLWNhdGVnb3J5IHtcbiAgY29sb3I6ICM4MWIwM2Y7XG59XG4uYWN0aXZlLWNhdGVnb3J5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzgxYjAzZjtcbn0iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-details/product-details.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/products/product-details/product-details.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppProductsProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");

    function ProductDetailsComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r3);
      }
    }

    var _c0 = function _c0() {
      return {
        width: "25%",
        height: 200
      };
    };

    var ProductDetailsComponent = /*#__PURE__*/function () {
      // wait to test
      function ProductDetailsComponent(translate, route, products) {
        _classCallCheck(this, ProductDetailsComponent);

        this.translate = translate;
        this.route = route;
        this.products = products; // imgslider: string[]

        this.imageObject = [{
          image: 'assets/img/products/product1.jpeg',
          thumbImage: 'assets/img/products/product1.jpeg',
          title: 'one'
        }, {
          image: 'assets/img/products/product-1.jpg',
          thumbImage: 'assets/img/products/product-1.jpg',
          title: 'two'
        }, {
          image: 'assets/img/products/product-grey-9.jpg',
          thumbImage: 'assets/img/products/product-grey-9.jpg',
          title: 'three'
        }, {
          image: 'assets/img/products/product-grey-9.jpg',
          thumbImage: 'assets/img/products/product-grey-9.jpg',
          title: 'three'
        }, {
          image: 'assets/img/products/product-grey-9.jpg',
          thumbImage: 'assets/img/products/product-grey-9.jpg',
          title: 'three'
        }];
        translate.addLangs(['en', 'ar']);
        translate.setDefaultLang('en');
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          // this.product={id:11,name:'test Product',price:100,imgUrl:['assets/img/products/product1.jpeg',
          // 'assets/img/products/product-1.jpg',
          // 'assets/img/products/product-grey-9.jpg',
          // 'assets/img/products/product-grey-6.jpg']}
          // this.imgslider=this.product.imgUrl
          // wait to test
          this.route.params.subscribe(function (params) {
            _this10.x = +params['id'];

            _this10.products.getProductById(_this10.product.id).subscribe({
              next: function next(product) {
                return _this10.product = product;
              }
            });
          });
          console.log(this.x);
        }
      }, {
        key: "categoryName",
        value: function categoryName() {
          console.log(this.x);
          console.log('cate name');
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
      return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]));
    };

    ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDetailsComponent,
      selectors: [["app-product-details"]],
      decls: 41,
      vars: 26,
      consts: [[1, "container"], [3, "change"], ["languageselect", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "mb-4", "row"], [1, "productimg", "col-sm-6"], [1, "productimg__item"], [1, "product-details__info", "col-sm-6"], [1, "mb-5", "product-details__amount"], [1, "product-details__desc", "text-muted", "mb-5"], [1, "d-flex"], [1, "increment-control"], ["href", "#", 1, "increment-control__action"], ["type", "text", "title", "Qty", "value", "1", 1, "form-control"], ["href", "#", 1, "btn", "btn-lg", "add"], [1, "product-details__meta"], ["rel", "tag", "href", "#"], [2, "width", "840px", "text-align", "center", "margin", "0", "padding", "0"], ["slideImage", "1", 3, "images", "infinite", "autoSlide", "imageSize"], ["nav", ""], [3, "value"]],
      template: function ProductDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailsComponent_Template_select_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.translate.use(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailsComponent_option_7_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "xx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ng-image-slider", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, "productD.select"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.product.imgUrl[0] + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 17, "productD.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 19, "productD.Price"), " $", ctx.product.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 21, "productD.addbtn"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 23, "productD.cate"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.imageObject)("infinite", false)("autoSlide", 1)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_image_slider__WEBPACK_IMPORTED_MODULE_5__["NgImageSliderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".increment-control[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 1rem;\n}\n\n.increment-control__action[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 4.3rem;\n  height: 4.3rem;\n  color: #444;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  font-weight: 700;\n}\n\n.increment-control__action[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 0 4px 4px 0;\n  border-left-width: 0;\n}\n\n.increment-control__action[_ngcontent-%COMP%]:first-of-type {\n  border-radius: 4px 0 0 4px;\n  border-right-width: 0;\n}\n\n.increment-control__action[_ngcontent-%COMP%]:hover {\n  background-color: #F7F7F7;\n}\n\n.increment-control[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n  font-weight: 700;\n  width: 3.3rem;\n  height: 4.3rem;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  text-align: center;\n  font-size: 1.4rem;\n}\n\n.productimg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.productimg__item[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 100%;\n  padding-bottom: 100%;\n}\n\n.productimg__sitem[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 20%;\n  padding-bottom: 50%;\n}\n\n.product-details__info[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n\n.product-details__amount[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 400;\n  color: #444;\n}\n\n.product-details__desc[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 400;\n  line-height: 2.6rem;\n}\n\n.product-details__add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2.4rem;\n  margin-top: 2.4rem;\n}\n\n.product-details__meta[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #8dce8d;\n}\n\n.product-details__meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8dce8d;\n}\n\n.add[_ngcontent-%COMP%] {\n  background-color: #8dce8d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdC1kZXRhaWxzXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBRE9BO0VBQ0kseUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5jcmVtZW50LWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmluY3JlbWVudC1jb250cm9sX19hY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB3aWR0aDogNC4zcmVtO1xyXG4gICAgaGVpZ2h0OiA0LjNyZW07XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmluY3JlbWVudC1jb250cm9sX19hY3Rpb246bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pbmNyZW1lbnQtY29udHJvbF9fYWN0aW9uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pbmNyZW1lbnQtY29udHJvbF9fYWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcbi5pbmNyZW1lbnQtY29udHJvbD4uZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogMy4zcmVtO1xyXG4gICAgaGVpZ2h0OiA0LjNyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi8vIHByb2R1Y3RpbWdcclxuLnByb2R1Y3RpbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0aW1nX19pdGVtIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdGltZ19fc2l0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzX19pbmZvIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzX19hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHNfX2Rlc2Mge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsc19fYWRkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMi40cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzX19tZXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY29sb3I6ICM4ZGNlOGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbHNfX21ldGEgYSB7XHJcbiAgICBjb2xvcjogIzhkY2U4ZDtcclxufVxyXG5cclxuLy8gLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdGltZyB7XHJcbi8vICAgICBtaW4td2lkdGg6IDU0cmVtO1xyXG4vLyAgICAgcGFkZGluZzogMCAxLjVyZW07XHJcbi8vIH1cclxuLmFkZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRjZThkO1xyXG59IiwiLmluY3JlbWVudC1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaW5jcmVtZW50LWNvbnRyb2xfX2FjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB3aWR0aDogNC4zcmVtO1xuICBoZWlnaHQ6IDQuM3JlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaW5jcmVtZW50LWNvbnRyb2xfX2FjdGlvbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi5pbmNyZW1lbnQtY29udHJvbF9fYWN0aW9uOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xufVxuXG4uaW5jcmVtZW50LWNvbnRyb2xfX2FjdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5pbmNyZW1lbnQtY29udHJvbCA+IC5mb3JtLWNvbnRyb2wge1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMy4zcmVtO1xuICBoZWlnaHQ6IDQuM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnByb2R1Y3RpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdGltZ19faXRlbSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cblxuLnByb2R1Y3RpbWdfX3NpdGVtIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDUwJTtcbn1cblxuLnByb2R1Y3QtZGV0YWlsc19faW5mbyB7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzX19hbW91bnQge1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5wcm9kdWN0LWRldGFpbHNfX2Rlc2Mge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcbn1cblxuLnByb2R1Y3QtZGV0YWlsc19fYWRkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xuICBtYXJnaW4tdG9wOiAyLjRyZW07XG59XG5cbi5wcm9kdWN0LWRldGFpbHNfX21ldGEge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4ZGNlOGQ7XG59XG5cbi5wcm9kdWN0LWRldGFpbHNfX21ldGEgYSB7XG4gIGNvbG9yOiAjOGRjZThkO1xufVxuXG4uYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkY2U4ZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-details',
          templateUrl: './product-details.component.html',
          styleUrls: ['./product-details.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product-in-cart/product-in-cart.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/products/product-in-cart/product-in-cart.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductInCartComponent */

  /***/
  function srcAppProductsProductInCartProductInCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductInCartComponent", function () {
      return ProductInCartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");

    var ProductInCartComponent = /*#__PURE__*/function () {
      function ProductInCartComponent(productService) {
        _classCallCheck(this, ProductInCartComponent);

        this.productService = productService;
      }

      _createClass(ProductInCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeCartProduct",
        value: function removeCartProduct() {
          this.productService.removeCartProduct(this.product.id);
        }
      }, {
        key: "onQuantityChange",
        value: function onQuantityChange(quantityInput) {
          var newQuantity = Number(quantityInput.value);

          if (newQuantity <= 0) {
            quantityInput.value = this.product.quantity.toString();
            return;
          }

          this.product.quantity = newQuantity;
          this.productService.editCartProduct(this.product);
        }
      }]);

      return ProductInCartComponent;
    }();

    ProductInCartComponent.ɵfac = function ProductInCartComponent_Factory(t) {
      return new (t || ProductInCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]));
    };

    ProductInCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductInCartComponent,
      selectors: [["app-product-in-cart"]],
      inputs: {
        product: "product"
      },
      decls: 13,
      vars: 6,
      consts: [[1, "item-small-1"], [1, "item-small-1__image-box"], ["href", "#", 1, "item-small-1__image", "image"], [1, "item-small-1__data"], ["href", "", 1, "item-small-1__title", 3, "title"], [1, "item-small-1__description"], ["type", "number", "min", "1", 1, "item-small-1__quantity", 3, "value", "change"], ["quantity", ""], [3, "click"], [1, "item-small-1__delete-icon", "fa", "fa-trash"]],
      template: function ProductInCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductInCartComponent_Template_input_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.onQuantityChange(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductInCartComponent_Template_div_click_11_listener() {
            return ctx.removeCartProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.product.imgUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.quantity + " x $" + ctx.product.price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.product.quantity);
        }
      },
      styles: [".item-small-1[_ngcontent-%COMP%] {\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 19rem;\n  min-width: 13rem;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-small-1__delete-icon[_ngcontent-%COMP%] {\n  height: 1rem;\n  cursor: pointer;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n}\n.item-small-1__quantity[_ngcontent-%COMP%] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n          appearance: none;\n  border: none;\n  width: 2rem;\n  margin-left: 1rem;\n}\n.item-small-1__data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #999;\n  width: 11rem;\n  margin-left: 1rem;\n}\n.item-small-1__data[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.item-small-1__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: left;\n}\n.item-small-1__description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-left: 0.3rem;\n  min-width: 3.5rem;\n}\n.item-small-1__image-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.item-small-1__image[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  display: block;\n}\n.item-small-1__action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  top: -0.5rem;\n  right: -0.5rem;\n  background-color: white;\n  border-radius: 50%;\n  font-size: 1rem;\n  color: #000;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n}\n@media (min-width: 576px) {\n  .item-small-1[_ngcontent-%COMP%] {\n    max-width: 26rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1pbi1jYXJ0L0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdC1pbi1jYXJ0XFxwcm9kdWN0LWluLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtaW4tY2FydC9wcm9kdWN0LWluLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRE47QURJSTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGTjtBRE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNISjtBREtJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ0hOO0FET0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0pKO0FET0E7RUFDSSxrQkFBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNKSjtBRE9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ0pKO0FET0E7RUFDRTtJQUNFLGdCQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtaW4tY2FydC9wcm9kdWN0LWluLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLml0ZW0tc21hbGwtMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWF4LXdpZHRoOiAxOXJlbTtcclxuICAgIG1pbi13aWR0aDogMTNyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICZfX2RlbGV0ZS1pY29uIHtcclxuICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmX19xdWFudGl0eSB7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pdGVtLXNtYWxsLTFfX2RhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICB3aWR0aDogMTFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuXHJcbiAgICAqIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaXRlbS1zbWFsbC0xX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLml0ZW0tc21hbGwtMV9fZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgbWluLXdpZHRoOiAzLjVyZW07XHJcbn1cclxuXHJcbi5pdGVtLXNtYWxsLTFfX2ltYWdlLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pdGVtLXNtYWxsLTFfX2ltYWdlIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pdGVtLXNtYWxsLTFfX2FjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0uNXJlbTtcclxuICAgIHJpZ2h0OiAtLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJGxhbmRzY2FwZSkge1xyXG4gIC5pdGVtLXNtYWxsLTEge1xyXG4gICAgbWF4LXdpZHRoOiAyNnJlbTtcclxuICB9XHJcbn1cclxuIiwiLml0ZW0tc21hbGwtMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxOXJlbTtcbiAgbWluLXdpZHRoOiAxM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tc21hbGwtMV9fZGVsZXRlLWljb24ge1xuICBoZWlnaHQ6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLml0ZW0tc21hbGwtMV9fcXVhbnRpdHkge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaXRlbS1zbWFsbC0xX19kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzk5OTtcbiAgd2lkdGg6IDExcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5pdGVtLXNtYWxsLTFfX2RhdGEgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLml0ZW0tc21hbGwtMV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXRlbS1zbWFsbC0xX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICBtaW4td2lkdGg6IDMuNXJlbTtcbn1cblxuLml0ZW0tc21hbGwtMV9faW1hZ2UtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXRlbS1zbWFsbC0xX19pbWFnZSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1zbWFsbC0xX19hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjVyZW07XG4gIHJpZ2h0OiAtMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaXRlbS1zbWFsbC0xIHtcbiAgICBtYXgtd2lkdGg6IDI2cmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductInCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-in-cart',
          templateUrl: './product-in-cart.component.html',
          styleUrls: ['./product-in-cart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product/product.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/products/product/product.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductComponent_div_8_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_8_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r2.goToAdminEditProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_8_a_1_Template, 2, 0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_8_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addTocart();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(router, authService, productService) {
        _classCallCheck(this, ProductComponent);

        this.router = router;
        this.authService = authService;
        this.productService = productService;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // checks if the user who loggedin is admin to display edit icon

      }, {
        key: "isAdmin",
        value: function isAdmin() {
          // call auth service
          return this.authService.isAdmin();
        } // navigate to the admin panel to edit product

      }, {
        key: "goToAdminEditProduct",
        value: function goToAdminEditProduct() {
          this.router.navigate(["/admin/products/".concat(this.product.id)]);
        }
      }, {
        key: "addTocart",
        value: function addTocart() {
          this.productService.addCartProduct(Object.assign(Object.assign({}, this.product), {
            quantity: 1
          }));
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        product: "product"
      },
      decls: 9,
      vars: 4,
      consts: [[1, "col", "mb-4"], [1, "card", "product-card"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body", "text-center"], [1, "card-title"], [1, "product-card__price"], ["class", "product-card__icons", 4, "ngIf"], [1, "product-card__icons"], ["class", "product-card__icon", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Edit", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Add to Cart", 1, "product-card__icon", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "product-card__icon"], [1, "fa", "fa-heart-o"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Edit", 1, "product-card__icon", 3, "click"], [1, "fa", "fa-pencil-square-o"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_div_8_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".product-card[_ngcontent-%COMP%] {\n  font-size: 25px;\n  padding: 0 20px;\n  transition: all 0.4s;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  border-color: #81b03f;\n  box-shadow: 0 0px 13px 0px rgba(0, 0, 0, 0.15);\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-card__icons[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-card__price[_ngcontent-%COMP%] {\n  transform: scale(0);\n  opacity: 0;\n}\n\n.product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  transition: all 0.4s;\n  cursor: pointer;\n}\n\n.product-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover {\n  color: #81b03f;\n}\n\n.product-card__price[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 20px;\n  padding: 21px 0 0;\n  transition: all 0.4s;\n}\n\n.product-card__icons[_ngcontent-%COMP%] {\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.4s;\n  position: absolute;\n  bottom: 26px;\n  left: 0;\n  width: 100%;\n}\n\n.product-card__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  text-decoration: none;\n  border-radius: 50%;\n  margin: 0 5px;\n  background-color: #81b03f;\n  color: rgba(255, 255, 255, 0.897);\n  opacity: 0.5;\n  transition: opacity 0.4s;\n}\n\n.product-card__icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0UscUJFUGM7RUZRZCw4Q0FBQTtBQ0FGOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjRXhCYztBRDBCaEI7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkVsRGM7RUZtRGQsaUNFbERpQjtFRm1EakIsWUFBQTtFQUNBLHdCQUFBO0FDS0Y7O0FESEE7RUFDRSxVQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDEzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLnByb2R1Y3QtY2FyZF9faWNvbnMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWNhcmRfX3ByaWNlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4ucHJvZHVjdC1jYXJkIC5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvZHVjdC1jYXJkIC5jYXJkLXRpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuLnByb2R1Y3QtY2FyZF9fcHJpY2Uge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAyMXB4IDAgMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4ucHJvZHVjdC1jYXJkX19pY29ucyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI2cHg7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0LWNhcmRfX2ljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogJHByaW1hcnktYmctY29sb3I7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxufVxyXG4ucHJvZHVjdC1jYXJkX19pY29uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5wcm9kdWN0LWNhcmQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM4MWIwM2Y7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5wcm9kdWN0LWNhcmRfX2ljb25zIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9kdWN0LWNhcmQ6aG92ZXIgLnByb2R1Y3QtY2FyZF9fcHJpY2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtY2FyZCAuY2FyZC10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjODFiMDNmO1xufVxuXG4ucHJvZHVjdC1jYXJkX19wcmljZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIxcHggMCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnByb2R1Y3QtY2FyZF9faWNvbnMge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI2cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1jYXJkX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYjAzZjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbn1cblxuLnByb2R1Y3QtY2FyZF9faWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/products-container/products-container.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/products/products-container/products-container.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProductsContainerComponent */

  /***/
  function srcAppProductsProductsContainerProductsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsContainerComponent", function () {
      return ProductsContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../categories-list/categories-list.component */
    "./src/app/products/categories-list/categories-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/products/product/product.component.ts");

    function ProductsContainerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no products for this category. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductsContainerComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductsContainerComponent_app_product_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product", 10);
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r3);
      }
    }

    var ProductsContainerComponent = /*#__PURE__*/function () {
      function ProductsContainerComponent(productService, route, authService) {
        _classCallCheck(this, ProductsContainerComponent);

        this.productService = productService;
        this.route = route;
        this.authService = authService;
      }

      _createClass(ProductsContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.params.subscribe(function (p) {
            if (p['category-name']) {
              _this11.productService.getProductsByCategory(p['category-name']);
            }
          });
          this.productsSub = this.productService.getProductsSubject().subscribe(function (p) {
            return _this11.products = p;
          });
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.authService.isAdmin();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.productsSub.unsubscribe();
        }
      }]);

      return ProductsContainerComponent;
    }();

    ProductsContainerComponent.ɵfac = function ProductsContainerComponent_Factory(t) {
      return new (t || ProductsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ProductsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsContainerComponent,
      selectors: [["app-products-container"]],
      decls: 9,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row", "pt-5", "pb-5"], [1, "col-3"], [1, "col-9"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "btn add-product mb-2", 4, "ngIf"], [1, "row", "row-cols-md-2", "row-cols-lg-4"], [3, "product", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [1, "btn", "add-product", "mb-2"], [3, "product"]],
      template: function ProductsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-categories-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsContainerComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsContainerComponent_button_6_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsContainerComponent_app_product_8_Template, 1, 1, "app-product", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.products == null ? null : ctx.products.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
      styles: [".add-product[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n  color: rgba(255, 255, 255, 0.897);\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMtY29udGFpbmVyL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxwcm9kdWN0c1xccHJvZHVjdHMtY29udGFpbmVyXFxwcm9kdWN0cy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWNvbnRhaW5lci9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy1jb250YWluZXIvcHJvZHVjdHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRmM7RURHZCxpQ0NGaUI7RURHakIsZ0JBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLWNvbnRhaW5lci9wcm9kdWN0cy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkZC1wcm9kdWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogJHByaW1hcnktYmctY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iLCIuYWRkLXByb2R1Y3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFiMDNmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-container',
          templateUrl: './products-container.component.html',
          styleUrls: ['./products-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products-container/products-container.component */
    "./src/app/products/products-container/products-container.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/products/product-details/product-details.component.ts");
    /* harmony import */


    var _shared_configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/configs */
    "./src/app/shared/configs/index.ts");

    var routes = [{
      path: _shared_configs__WEBPACK_IMPORTED_MODULE_6__["CONFIG"].products.name,
      component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        component: _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_4__["ProductsContainerComponent"]
      }, {
        path: _shared_configs__WEBPACK_IMPORTED_MODULE_6__["CONFIG"].products.children.productsByCategory.name,
        component: _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_4__["ProductsContainerComponent"]
      }, {
        path: _shared_configs__WEBPACK_IMPORTED_MODULE_6__["CONFIG"].products.children.productDetails.name,
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
      }]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 1,
      vars: 0,
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule, facthttp */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "facthttp", function () {
      return facthttp;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
    /* harmony import */


    var angular_image_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-image-slider */
    "./node_modules/angular-image-slider/__ivy_ngcc__/fesm2015/angular-image-slider.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/products/product/product.component.ts");
    /* harmony import */


    var _product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./product-in-cart/product-in-cart.component */
    "./src/app/products/product-in-cart/product-in-cart.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/products/category/category.component.ts");
    /* harmony import */


    var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./categories-list/categories-list.component */
    "./src/app/products/categories-list/categories-list.component.ts");
    /* harmony import */


    var _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./products-container/products-container.component */
    "./src/app/products/products-container/products-container.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/products/product-details/product-details.component.ts");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/products/products.component.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_14__["ProductsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], angular_image_slider__WEBPACK_IMPORTED_MODULE_5__["SliderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: facthttp,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_9__["ProductInCartComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"], _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesListComponent"], _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_12__["ProductsContainerComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_14__["ProductsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], angular_image_slider__WEBPACK_IMPORTED_MODULE_5__["SliderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
        exports: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_12__["ProductsContainerComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_9__["ProductInCartComponent"], _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_9__["ProductInCartComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"], _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesListComponent"], _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_12__["ProductsContainerComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_14__["ProductsRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], angular_image_slider__WEBPACK_IMPORTED_MODULE_5__["SliderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useFactory: facthttp,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }
          })],
          exports: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _products_container_products_container_component__WEBPACK_IMPORTED_MODULE_12__["ProductsContainerComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _product_in_cart_product_in_cart_component__WEBPACK_IMPORTED_MODULE_9__["ProductInCartComponent"], _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]]
        }]
      }], null, null);
    })();

    function facthttp(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
    }
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/configs/api-routes */
    "./src/app/shared/configs/api-routes.ts");
    /* harmony import */


    var _models_user_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/user-role */
    "./src/app/models/user-role.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          var _this12 = this;

          return this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].login, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var loginResponse = response; // the log in api response from server is an object contains two keys, token and logged user object
            // console.log(loginResponse);

            if (loginResponse) {
              localStorage.setItem('authToken', loginResponse.token); // making a shallow copy of the retrieved user from the server

              _this12.currentUser = Object.assign({}, loginResponse.user);

              _this12.getCurrentUser();

              _this12.decodedToken = JSON.parse(atob(loginResponse.token.split('.')[1]));
              console.log(_this12.decodedToken);
            }
          }));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.currentUserSubject;
        } // getDecodedToken(): any{
        //   const token = localStorage.getItem('authToken');
        //   this.decodedToken = JSON.parse(atob(token.split('.')[1]));
        //   return this.decodedToken;
        // }

      }, {
        key: "register",
        value: function register(user) {
          var _this13 = this;

          this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].register, user).subscribe(function (res) {
            if (res.ok) {
              _this13.currentUser = res.body;

              _this13.currentUserSubject.next(_this13.currentUser);
            } else {// TODO: Show an error message
            }
          });
        } // check the token to decide whether the user logged in or not

      }, {
        key: "isLogged",
        value: function isLogged() {
          var token = localStorage.getItem('authToken'); // shorthand for if statement to return true or false

          return !!token;
        } // check if the current logged in user is an admin by checking the retrieved user role and by checking the role in the token

      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.currentUser && this.currentUser.role === _models_user_role__WEBPACK_IMPORTED_MODULE_4__["UserRole"].Admin;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].logout, this.currentUser);
          localStorage.removeItem('authToken');
          console.log('logged out');
          this.currentUserSubject.next(this.currentUser);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.categoryUrl = '../assets/categories.json';
      }

      _createClass(CategoryService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(this.categoryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        } // getCategoryById(id: number): Observable<Category> {
        //   return this.http.get<Category>(this.categoryUrl + `/${id}`).pipe(
        //     tap(data => console.log('getCategoryById: ' + JSON.stringify(data))),
        //     catchError(this.HandleError)
        //   );
        // }
        //lama est5dmt eli fo2 da msh rady ygeeb l category msh 3rfa leh 
        //bs eli t7t da shghal 3ady w 3amal kda brdo m3 l products wel orders

      }, {
        key: "getCategoryById",
        value: function getCategoryById(id) {
          return this.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (categories) {
            return categories.find(function (c) {
              return c.id === id;
            });
          }));
        }
      }, {
        key: "addCategory",
        value: function addCategory(category) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.categoryUrl, category, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('addCategory: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http["delete"](this.categoryUrl + "/".concat(id), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return console.log('deleteCategory: ' + id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(category) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.put(this.categoryUrl, category, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return console.log('updateCategory: ' + category.id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return category;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        }
      }, {
        key: "HandleError",
        value: function HandleError(err) {
          // console and throw error
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.message);
          }

          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http, activatedRoute) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.activatedRoute = activatedRoute;
        this.orderUrl = "../assets/orders.json";
      }

      _createClass(OrderService, [{
        key: "getOrders",
        value: function getOrders() {
          return this.http.get(this.orderUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('All Orders: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        } // getOrderById(id: number): Observable<Order> {
        //   return this.http.get<Order>(this.orderUrl + `/${id}`).pipe(
        //     tap(data => console.log('getOrderById: ' + JSON.stringify(data))),
        //     catchError(this.HandleError)
        //   );
        // }

      }, {
        key: "getOrderById",
        value: function getOrderById(id) {
          return this.getOrders().pipe( // map((orders:Order[]) => orders.find(o => o.id === id.toString()))
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (orders) {
            return orders.find(function (o) {
              return o.id === id;
            });
          }));
        }
      }, {
        key: "addOrder",
        value: function addOrder(order) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.orderUrl, order, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log('addOrder: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.HandleError));
        } // deleteOrder(id: number): Observable<Order> {
        //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //   return this.http.delete<Order>(this.orderUrl + `/${id}`, { headers }).pipe(
        //     tap(() => console.log('deleteOrder: ' + id)),
        //     catchError(this.HandleError)
        //   );
        // }

      }, {
        key: "HandleError",
        value: function HandleError(err) {
          // console and throw error
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.message);
          }

          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/configs/api-routes */
    "./src/app/shared/configs/api-routes.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http, route) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.route = route; // TODO: Remove static data.

        this.cartProducts = [{
          id: 1,
          name: 'something long long',
          price: 100,
          imgUrl: ['../assets/images/profile.jpg'],
          quantity: 1
        }, {
          id: 2,
          name: 'P2',
          price: 200,
          imgUrl: ['../assets/images/profile.jpg'],
          quantity: 1
        }];
        this.cartProductsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      } // Products CRUD operations


      _createClass(ProductService, [{
        key: "getProductsSubject",
        value: function getProductsSubject(apiRoute) {
          var _this14 = this;

          var route = apiRoute ? apiRoute : _shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].getProducts;
          this.http.get(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function (data) {
            return _this14.productsSubject.next(data);
          });
          return this.productsSubject;
        }
      }, {
        key: "getProductsBySearchBar",
        value: function getProductsBySearchBar(productSearch) {
          this.getProductsSubject(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].getProducts + "?product-name=".concat(productSearch.searchTerm, "&category-name=").concat(productSearch.selectedCategoryName));
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory(categoryName) {
          this.getProductsSubject(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].getProducts + "/".concat(categoryName));
        } // getProductById(id: number): Observable<Product> {
        //   return this.http.get<Product>(this.productUrl + `/${id}`).pipe(
        //     tap(data => console.log('getProductById: ' + JSON.stringify(data))),
        //     catchError(this.HandleError)
        //   );
        // }

      }, {
        key: "getProductById",
        value: function getProductById(id) {
          return this.http.get(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].getProducts + "".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        } // Cart products CRUD operations
        // TODO: get cart products from database.

      }, {
        key: "getCartProducts",
        value: function getCartProducts() {
          var _this15 = this;

          // const cartProducts$ = this.http.get<CartProduct[]>(apiRoutes.getCartProducts).
          //   pipe(catchError(this.HandleError));
          var cartProducts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cartProducts);
          cartProducts$.subscribe(function (data) {
            return _this15.cartProductsSubject.next(data);
          });
          return this.cartProductsSubject;
        }
      }, {
        key: "addCartProduct",
        value: function addCartProduct(product) {
          var _this16 = this;

          this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].addCartProduct, product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function (success) {
            if (success) {
              _this16.cartProducts.push(product);

              _this16.cartProductsSubject.next(_this16.cartProducts);
            }
          });
        }
      }, {
        key: "editCartProduct",
        value: function editCartProduct(product) {
          var editedIndex = this.cartProducts.findIndex(function (p) {
            return p.id === product.id;
          });
          this.cartProducts[editedIndex] = product;
          this.cartProductsSubject.next(this.cartProducts); // this.http.post<boolean>(apiRoutes.editCartProduct, product).
          //   pipe(catchError(this.HandleError)).
          //   subscribe(success => {
          //     if (success) {
          //       const editedIndex = this.cartProducts.findIndex(p => p.id === product.id);
          //       this.cartProducts[editedIndex] = product;
          //       this.cartProductsSubject.next(this.cartProducts);
          //     }
          //   });
        }
      }, {
        key: "removeCartProduct",
        value: function removeCartProduct(id) {
          var _this17 = this;

          this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].deleteCartProduct, {
            id: id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function (success) {
            if (success) {
              _this17.cartProducts = _this17.cartProducts.filter(function (p) {
                return p.id !== id;
              });

              _this17.cartProductsSubject.next(_this17.cartProducts);
            }
          });
        } // Admin panel products CRUD operations

      }, {
        key: "addProduct",
        value: function addProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].addProduct, product, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].deleteProduct, {
            id: id
          }, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.put(_shared_configs_api_routes__WEBPACK_IMPORTED_MODULE_3__["apiRoutes"].editProduct, product, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // console and throw error
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.message);
          }

          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/signal-r.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/signal-r.service.ts ***!
    \**********************************************/

  /*! exports provided: SignalRService */

  /***/
  function srcAppServicesSignalRServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignalRService", function () {
      return SignalRService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");

    var SignalRService = /*#__PURE__*/function () {
      function SignalRService() {
        var _this18 = this;

        _classCallCheck(this, SignalRService);

        this.orderReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.buildConnection = function () {
          _this18.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl("http://localhost:22459/orderHub").build();
        };

        this.startConnection = function () {
          _this18.hubConnection.start().then(function () {
            console.log("connection started...");

            _this18.registerOrders();
          })["catch"](function (err) {
            console.log("Error happened while starting connection: " + err);
          });
        };

        this.buildConnection();
        this.startConnection();
      }

      _createClass(SignalRService, [{
        key: "registerOrders",
        value: function registerOrders() {
          var _this19 = this;

          this.hubConnection.on("OrderReceived", function (order) {
            console.log(order);

            _this19.orderReceived.emit(order);
          });
        }
      }, {
        key: "userAddedOrder",
        value: function userAddedOrder(order) {
          if (this.hubConnection) {
            console.log(this.hubConnection);
            this.hubConnection.invoke("AddOrderToAdminPanel", order);
          }
        }
      }]);

      return SignalRService;
    }();

    SignalRService.ɵfac = function SignalRService_Factory(t) {
      return new (t || SignalRService)();
    };

    SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignalRService,
      factory: SignalRService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/configs/api-routes.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/configs/api-routes.ts ***!
    \**********************************************/

  /*! exports provided: apiRoutes */

  /***/
  function srcAppSharedConfigsApiRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiRoutes", function () {
      return apiRoutes;
    });

    var apiRoutes = {
      login: '/api/user/login',
      register: '/api/user/register',
      logout: '/api/user/logout',
      getProducts: '/api/products',
      getCartProducts: '/api/cart-products',
      addCartProduct: '/api/cart-products/add',
      editCartProduct: '/api/cart-products/edit',
      deleteCartProduct: '/api/cart-products/delete',
      addProduct: '/api/products/add',
      deleteProduct: '/api/products/delete',
      editProduct: '/api/products/edit'
    };
    /***/
  },

  /***/
  "./src/app/shared/configs/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/configs/index.ts ***!
    \*****************************************/

  /*! exports provided: CONFIG */

  /***/
  function srcAppSharedConfigsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _pages_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages-routes */
    "./src/app/shared/configs/pages-routes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CONFIG", function () {
      return _pages_routes__WEBPACK_IMPORTED_MODULE_0__["CONFIG"];
    });
    /***/

  },

  /***/
  "./src/app/shared/configs/pages-routes.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/configs/pages-routes.ts ***!
    \************************************************/

  /*! exports provided: CONFIG */

  /***/
  function srcAppSharedConfigsPagesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONFIG", function () {
      return CONFIG;
    });

    var CONFIG = {
      home: {
        name: 'home',
        route: '/home'
      },
      admin: {
        name: 'admin',
        route: '/admin',
        children: {
          productsList: {
            name: 'products',
            route: '/admin/products'
          },
          newProduct: {
            name: 'products/new',
            route: '/admin/products/new'
          },
          editProduct: {
            name: 'products/:id/edit',
            route: '/admin/products/:id/edit'
          },
          categoriesList: {
            name: 'categories',
            route: '/admin/categories'
          },
          newCategory: {
            name: 'categories/new',
            route: '/admin/categories/new'
          },
          editCategory: {
            name: 'categories/:id/edit',
            route: '/admin/categories/:id/edit'
          },
          ordersList: {
            name: 'orders',
            route: '/orders'
          },
          orderDetails: {
            name: 'orders/:id',
            route: '/orders/:id'
          }
        }
      },
      products: {
        name: 'products',
        route: '/products',
        children: {
          productsList: {
            name: 'products',
            route: '/products'
          },
          productsByCategory: {
            name: ':category-name',
            route: '/products/:category-name'
          },
          productDetails: {
            name: 'product/:id',
            route: '/products/product/:id'
          }
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/shared/dropdown-menu/dropdown-menu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/dropdown-menu/dropdown-menu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DropdownMenuComponent */

  /***/
  function srcAppSharedDropdownMenuDropdownMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownMenuComponent", function () {
      return DropdownMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", 8, "dropdown-button"]], [["", 8, "dropdown-items"]]];
    var _c1 = [".dropdown-button", ".dropdown-items"];
    /**
     * @input menuPosition: a string to determine the position of the menu.
     * Possible values are: left, middle, right, right is the default;
     * @example
     * <app-dropdown-menu>
     *    <div class="dropdown-button">Button</div>
     *    <div class="dropdown-items">
     *      <div>First</div>
     *    </div>
     *  </div>
     * </app-dropdown-menu>
     * @note
     * The classes in this example are required because their
     * elements replace `<ng-content></ng-content>`
     */

    var DropdownMenuComponent = /*#__PURE__*/function () {
      function DropdownMenuComponent() {
        _classCallCheck(this, DropdownMenuComponent);

        this.menuPosition = 'right';
        this.display = 'none';
        this.hasBeenClicked = false;
      }

      _createClass(DropdownMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleDisplay",
        value: function toggleDisplay(event) {
          this.hasBeenClicked = true;
          this.display = this.display === 'none' ? 'block' : 'none';
        }
      }, {
        key: "hide",
        value: function hide() {
          if (!this.hasBeenClicked) {
            this.display = 'none';
          }

          this.hasBeenClicked = false;
        }
      }]);

      return DropdownMenuComponent;
    }();

    DropdownMenuComponent.ɵfac = function DropdownMenuComponent_Factory(t) {
      return new (t || DropdownMenuComponent)();
    };

    DropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownMenuComponent,
      selectors: [["app-dropdown-menu"]],
      hostBindings: function DropdownMenuComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownMenuComponent_click_HostBindingHandler() {
            return ctx.hide();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        menuPosition: "menuPosition"
      },
      ngContentSelectors: _c1,
      decls: 5,
      vars: 4,
      consts: [[1, "dropdown", 3, "click"], ["type", "button", 1, "btn", "dropdown__btn", 3, "click"], [1, "dropdown__menu"]],
      template: function DropdownMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownMenuComponent_Template_div_click_0_listener() {
            return ctx.hasBeenClicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownMenuComponent_Template_button_click_1_listener($event) {
            return ctx.toggleDisplay($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("dropdown--" + ctx.menuPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.display);
        }
      },
      styles: [".dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 27rem;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.dropdown--left[_ngcontent-%COMP%]   .dropdown__menu[_ngcontent-%COMP%] {\n  right: 0;\n}\n.dropdown--middle[_ngcontent-%COMP%]   .dropdown__menu[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.dropdown__btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 500;\n}\n.dropdown__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  background: rgba(255, 255, 255, 0.897);\n  z-index: 1000;\n  border-radius: 5px;\n  display: none;\n  box-shadow: 0 0 1rem gray;\n  max-height: 27rem;\n  max-width: 27rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duLW1lbnUvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXHNoYXJlZFxcZHJvcGRvd24tbWVudVxcZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duLW1lbnUvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNERjtBRElJO0VBQ0UsUUFBQTtBQ0ZOO0FET0k7RUFDRSwyQkFBQTtBQ0xOO0FEU0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0NFekJlO0VGMEJmLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzJztcclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMjdyZW07XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAmLS1sZWZ0IHtcclxuICAgIC5kcm9wZG93bl9fbWVudSB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tbWlkZGxlIHtcclxuICAgIC5kcm9wZG93bl9fbWVudSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmX19tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJnLWNvbG9yO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSBncmF5O1xyXG4gICAgbWF4LWhlaWdodDogMjdyZW07XHJcbiAgICBtYXgtd2lkdGg6IDI3cmVtO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuIiwiLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDI3cmVtO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uZHJvcGRvd24tLWxlZnQgLmRyb3Bkb3duX19tZW51IHtcbiAgcmlnaHQ6IDA7XG59XG4uZHJvcGRvd24tLW1pZGRsZSAuZHJvcGRvd25fX21lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZHJvcGRvd25fX2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTAwO1xufVxuLmRyb3Bkb3duX19tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xuICB6LWluZGV4OiAxMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIGdyYXk7XG4gIG1heC1oZWlnaHQ6IDI3cmVtO1xuICBtYXgtd2lkdGg6IDI3cmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dropdown-menu',
          templateUrl: './dropdown-menu.component.html',
          styleUrls: ['./dropdown-menu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        menuPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/logo/logo.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/logo/logo.component.ts ***!
    \***********************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppSharedLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var LogoComponent = /*#__PURE__*/function () {
      function LogoComponent() {
        _classCallCheck(this, LogoComponent);
      }

      _createClass(LogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoComponent;
    }();

    LogoComponent.ɵfac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      inputs: {
        src: "src"
      },
      decls: 2,
      vars: 3,
      consts: [[3, "routerLink"], [1, "logo", 3, "src"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".logo[_ngcontent-%COMP%] {\n  max-width: 5rem;\n}\n@media (min-width: 576px) {\n  .logo[_ngcontent-%COMP%] {\n    max-width: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ28vSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXHNoYXJlZFxcbG9nb1xcbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUNERjtBREdFO0VBSEY7SUFJSSxlQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuLmxvZ28ge1xyXG4gIG1heC13aWR0aDogNXJlbTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRsYW5kc2NhcGUpIHtcclxuICAgIG1heC13aWR0aDogNnJlbTtcclxuICB9XHJcbn1cclxuIiwiLmxvZ28ge1xuICBtYXgtd2lkdGg6IDVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ28ge1xuICAgIG1heC13aWR0aDogNnJlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], function () {
        return [];
      }, {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/pagination/pagination.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/pagination/pagination.component.ts ***!
    \***********************************************************/

  /*! exports provided: PaginationComponent */

  /***/
  function srcAppSharedPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaginationComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var pageNumber_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onPageNumberClick(pageNumber_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pageNumber_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pageNumber_r1);
      }
    }
    /**
     * @input nrOfItems: the total number of items.
     * @input itemsPerPage: the number of items to be displayed in one page.
     * @output changePage: an event that fires when a page is selected and carries the selected page number.
     * @example
     * <app-pagination
     *   [nrOfItems]="10"
     *   [itemsPerPage]="5"
     *   (changePage)="changePageEventHandler(selectedPageNumber)">
     * </app-pagination>
     */


    var PaginationComponent = /*#__PURE__*/function () {
      function PaginationComponent() {
        _classCallCheck(this, PaginationComponent);

        this.currentPageNumber = 1;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPageNumbers",
        value: function getPageNumbers() {
          this.itemsPerPage = this.itemsPerPage <= 0 ? 10 : this.itemsPerPage;
          var nrOfPages = Math.ceil(this.nrOfItems / this.itemsPerPage);
          return Array(nrOfPages).fill(0).map(function (v, i) {
            return i + 1;
          });
        }
      }, {
        key: "onPageNumberClick",
        value: function onPageNumberClick(pageNumber) {
          this.currentPageNumber = pageNumber;
          this.changePage.emit(pageNumber);
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)();
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["app-pagination"]],
      inputs: {
        nrOfItems: "nrOfItems",
        itemsPerPage: "itemsPerPage"
      },
      outputs: {
        changePage: "changePage"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "pagination"], [1, "page-item"], [1, "page-link", 3, "disabled", "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_2_listener() {
            return ctx.onPageNumberClick(ctx.currentPageNumber - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_6_listener() {
            return ctx.onPageNumberClick(ctx.currentPageNumber + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentPageNumber <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getPageNumbers());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentPageNumber >= ctx.getPageNumbers().length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagination',
          templateUrl: './pagination.component.html',
          styleUrls: ['./pagination.component.scss']
        }]
      }], function () {
        return [];
      }, {
        nrOfItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/search-bar/search-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/search-bar/search-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppSharedSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["miniFormBtn"];
    var _c1 = ["searchForm"];

    function SearchBarComponent_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4, " ");
      }
    }
    /**
     * @input categoryNames: the names to be put in the HTML select element options.
     * @output searchSubmit: an event that fires with the following object:
     * ```{
     *  searchTerm: "",
     *  selectedCategoryName: ""
     * }```
     * The default value for selectedCategoryName is ```"all"```
     */


    var SearchBarComponent = /*#__PURE__*/function () {
      function SearchBarComponent() {
        _classCallCheck(this, SearchBarComponent);

        this.searchSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedCategoryName = 'all';
        this.hasBeenClicked = false;
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSearchForm",
        value: function toggleSearchForm(e) {
          this.searchForm.nativeElement.style.display = this.searchForm.nativeElement.style.display === 'block' ? null : 'block';
          this.hasBeenClicked = true;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var searchTerm = this.searchTerm;
          var selectedCategoryName = this.selectedCategoryName;
          this.searchSubmit.emit({
            searchTerm: searchTerm,
            selectedCategoryName: selectedCategoryName
          });
        }
      }, {
        key: "hideSearchForm",
        value: function hideSearchForm() {
          var miniFormBtnDisplay = window.getComputedStyle(this.miniFormBtn.nativeElement).display;

          if (miniFormBtnDisplay === 'block' && !this.hasBeenClicked) {
            this.searchForm.nativeElement.style.display = null;
          }

          this.hasBeenClicked = false;
        }
      }]);

      return SearchBarComponent;
    }();

    SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)();
    };

    SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["app-search-bar"]],
      viewQuery: function SearchBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.miniFormBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
        }
      },
      hostBindings: function SearchBarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_click_HostBindingHandler() {
            return ctx.hideSearchForm(ctx.event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        categoryNames: "categoryNames"
      },
      outputs: {
        searchSubmit: "searchSubmit"
      },
      decls: 16,
      vars: 2,
      consts: [[1, "search-form-container"], [1, "search-form", 3, "submit", "click"], ["searchForm", ""], ["name", "searchTerm", "id", "searchInput", "type", "text", "placeholder", "Search...", 1, "search-form__input", 3, "ngModel", "ngModelChange"], [1, "search-form__vl"], [1, "search-form__select", 3, "change"], ["categorySelect", ""], ["selected", "", "value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "search-form__btn"], [1, "fa", "fa-search"], [1, "search-form-mini", "btn", 3, "click"], ["miniFormBtn", ""], [3, "value"]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchBarComponent_Template_form_submit_1_listener() {
            return ctx.onSubmit();
          })("click", function SearchBarComponent_Template_form_click_1_listener() {
            return ctx.hasBeenClicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchTerm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarComponent_Template_select_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.selectedCategoryName = _r1.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchBarComponent_option_9_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_13_listener($event) {
            return ctx.toggleSearchForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryNames);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".search-form[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 5rem;\n  left: 50%;\n  right: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 0.3rem gray;\n  z-index: 1;\n  border: 1px solid white;\n  border-radius: 100px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-top: 1rem;\n  padding: 0.5rem;\n  background-color: white;\n}\n.search-form__input[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0 0.5rem;\n  max-width: 7rem;\n}\n.search-form__select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-image: url('html-select-arrow.png');\n  background-repeat: no-repeat;\n  background-size: 1rem;\n  background-position: right center;\n  color: black;\n  border: none;\n  min-width: 5rem;\n  max-width: 8rem;\n  padding-right: 1.5rem;\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n.search-form__btn[_ngcontent-%COMP%] {\n  all: unset;\n  width: 2rem;\n  text-align: center;\n  background-color: white;\n  color: black;\n  padding: 0.1rem;\n  cursor: pointer;\n}\n.search-form__vl[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: -1rem 0.5rem -1rem 0;\n  height: 2.8rem;\n  border-left: 1px solid gray;\n}\n.search-form-mini[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 576px) {\n  .search-form__input[_ngcontent-%COMP%] {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n  }\n}\n@media (min-width: 900px) {\n  .search-form-mini[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-form[_ngcontent-%COMP%] {\n    position: inherit;\n    display: block;\n    transform: unset;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC1iYXIvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXHNoYXJlZFxcc2VhcmNoLWJhclxcc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjtBREVFO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNGSjtBRE1BO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFFSTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtFQ0pKO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsYUFBQTtFQ05GOztFRFNBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXJlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3gtc2hhZG93OiAwIDAgMC4zcmVtIGdyYXk7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICZfX2lucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDdyZW07XHJcbiAgfVxyXG5cclxuICAmX19zZWxlY3Qge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9odG1sLXNlbGVjdC1hcnJvdy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICBhbGw6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDAuMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3ZsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogLTFyZW0gMC41cmVtIC0xcmVtIDA7XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1taW5pIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLnNlYXJjaC1mb3JtIHtcclxuICAgICZfX2lucHV0IHtcclxuICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgLnNlYXJjaC1mb3JtLW1pbmkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB1bnNldDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIiwiLnNlYXJjaC1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVyZW07XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjNyZW0gZ3JheTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc2VhcmNoLWZvcm1fX2lucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDAgMC41cmVtO1xuICBtYXgtd2lkdGg6IDdyZW07XG59XG4uc2VhcmNoLWZvcm1fX3NlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaHRtbC1zZWxlY3QtYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA4cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uc2VhcmNoLWZvcm1fX2J0biB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlYXJjaC1mb3JtX192bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAtMXJlbSAwLjVyZW0gLTFyZW0gMDtcbiAgaGVpZ2h0OiAyLjhyZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbn1cblxuLnNlYXJjaC1mb3JtLW1pbmkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zZWFyY2gtZm9ybV9faW5wdXQge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5zZWFyY2gtZm9ybS1taW5pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHVuc2V0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-bar',
          templateUrl: './search-bar.component.html',
          styleUrls: ['./search-bar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        miniFormBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['miniFormBtn']
        }],
        searchForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchForm']
        }],
        categoryNames: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        hideSearchForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:click', ['event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dropdown-menu/dropdown-menu.component */
    "./src/app/shared/dropdown-menu/dropdown-menu.component.ts");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logo/logo.component */
    "./src/app/shared/logo/logo.component.ts");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-bar/search-bar.component */
    "./src/app/shared/search-bar/search-bar.component.ts");
    /* harmony import */


    var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pagination/pagination.component */
    "./src/app/shared/pagination/pagination.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]],
          exports: [_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenuComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/validators/generic-validator-messages.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/validators/generic-validator-messages.ts ***!
    \*****************************************************************/

  /*! exports provided: GenericValidator */

  /***/
  function srcAppSharedValidatorsGenericValidatorMessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericValidator", function () {
      return GenericValidator;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Generic validator for Reactive forms
    // Implemented as a class, not a service, so it can retain state for multiple forms.
    // NOTE: This validator does NOT support validation of controls or groups within a FormArray.


    var GenericValidator = /*#__PURE__*/function () {
      // Provide the set of valid validation messages
      // Stucture:
      // controlName1: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // },
      // controlName2: {
      //     validationRuleName1: 'Validation Message.',
      //     validationRuleName2: 'Validation Message.'
      // }
      function GenericValidator(validationMessages) {
        _classCallCheck(this, GenericValidator);

        this.validationMessages = validationMessages;
      } // Processes each control within a FormGroup
      // And returns a set of validation messages to display
      // Structure
      // controlName1: 'Validation Message.',
      // controlName2: 'Validation Message.'


      _createClass(GenericValidator, [{
        key: "processMessages",
        value: function processMessages(container) {
          var _this20 = this;

          var messages = {};

          var _loop = function _loop(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
              var c = container.controls[controlKey]; // If it is a FormGroup, process its child controls.

              if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                var childMessages = _this20.processMessages(c);

                Object.assign(messages, childMessages);
              } else {
                // Only validate if there are validation messages for the control
                if (_this20.validationMessages[controlKey]) {
                  messages[controlKey] = '';

                  if ((c.dirty || c.touched) && c.errors) {
                    Object.keys(c.errors).map(function (messageKey) {
                      if (_this20.validationMessages[controlKey][messageKey]) {
                        messages[controlKey] += _this20.validationMessages[controlKey][messageKey] + ' ';
                      }
                    });
                  }
                }
              }
            }
          };

          for (var controlKey in container.controls) {
            _loop(controlKey);
          }

          return messages;
        }
      }, {
        key: "getErrorCount",
        value: function getErrorCount(container) {
          var errorCount = 0;

          for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
              if (container.controls[controlKey].errors) {
                errorCount += Object.keys(container.controls[controlKey].errors).length;
                console.log(errorCount);
              }
            }
          }

          return errorCount;
        }
      }]);

      return GenericValidator;
    }();
    /***/

  },

  /***/
  "./src/app/shared/validators/whitespace.validator.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/validators/whitespace.validator.ts ***!
    \***********************************************************/

  /*! exports provided: WhiteSpaceValidator */

  /***/
  function srcAppSharedValidatorsWhitespaceValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhiteSpaceValidator", function () {
      return WhiteSpaceValidator;
    });

    var WhiteSpaceValidator = /*#__PURE__*/function () {
      function WhiteSpaceValidator() {
        _classCallCheck(this, WhiteSpaceValidator);
      }

      _createClass(WhiteSpaceValidator, null, [{
        key: "checkWhiteSpace",
        value: function checkWhiteSpace(c) {
          if (c.value.indexOf(' ') >= 0) {
            return {
              'whiteSpace': true
            };
          }

          return null;
        }
      }]);

      return WhiteSpaceValidator;
    }();
    /***/

  },

  /***/
  "./src/app/users/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/users/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUsersLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/validators/whitespace.validator */
    "./src/app/shared/validators/whitespace.validator.ts");
    /* harmony import */


    var src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/validators/generic-validator-messages */
    "./src/app/shared/validators/generic-validator-messages.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1() {
      return ["/home"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, fb) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb; // Use with the generic validation message class

        this.displayMessage = {}; // create the data model define the data passed to back-end server.

        this.user = null; // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.

        this.validationMessages = {
          email: {
            required: 'Email is required.',
            whiteSpace: 'Email can not contain white spaces.'
          },
          password: {
            required: 'Password is required',
            minlength: 'Password must be at least four characters.'
          }
        }; // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.

        this.genericValidator = new src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_3__["GenericValidator"](this.validationMessages);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // create the form model that define formGroup and formControls that matchs up with the html form input elements
          this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__["WhiteSpaceValidator"].checkWhiteSpace]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, // validate password with white spaces
            src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__["WhiteSpaceValidator"].checkWhiteSpace, // validate password with minumum length 4 characters
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), // validate password to have at least: 1 uppercase letter, 1 lowercase letter, A number, A minimum length of 8.
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]]
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this21 = this;

          // Watch for the blur event from any input element on the form.
          // This is required because the valueChanges does not provide notification on blur
          var controlBlurs = this.formInputElements.map(function (formControl) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(formControl.nativeElement, 'blur');
          }); // Merge the blur event observable with the valueChanges observable
          // so we only need to subscribe once.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, [this.loginForm.valueChanges].concat(_toConsumableArray(controlBlurs))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000)).subscribe(function (value) {
            _this21.displayMessage = _this21.genericValidator.processMessages(_this21.loginForm);
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this22 = this;

          if (this.loginForm && this.loginForm.valid) {
            this.user.email = this.loginForm.value.email;
            this.user.password = this.loginForm.value.password;
          }

          this.authService.login(this.user).subscribe(function (next) {
            // console.log('looged in successfully');
            if (_this22.authService.currentUser !== null) {
              _this22.router.navigate(['/home']);
            }
          }, function (error) {
            return console.log(error);
          }); // implementing navigation to a redirect url

          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/home']);
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      decls: 26,
      vars: 15,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-2", "row"], ["for", "email", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["ngModel", "", "id", "email", "type", "text", "placeholder", "Email (required)", "formControlName", "email", 1, "form-control"], [1, "invalid-feedback"], ["for", "passwordId", 1, "col-md-2", "col-form-label"], ["ngModel", "", "id", "passwordId", "type", "password", "placeholder", "Password (required)", "formControlName", "password", 1, "form-control"], [1, "row"], [1, "col-md-4", "offset-md-2"], ["type", "submit", 1, "btn", "btn-primary", "mr-3", 3, "title", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log in! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.displayMessage.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.displayMessage.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.password, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.loginForm.valid ? "Log in" : "Disabled until the form data is valid")("disabled", !ctx.loginForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        formInputElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/users/logout/logout.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/users/logout/logout.component.ts ***!
    \**************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppUsersLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)();
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/users/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppUsersRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/validators/whitespace.validator */
    "./src/app/shared/validators/whitespace.validator.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/validators/generic-validator-messages */
    "./src/app/shared/validators/generic-validator-messages.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name Is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name can not contain whitespace. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1() {
      return ["/home"];
    };

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, fb, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.fb = fb;
        this.router = router; // Use with the generic validation message class

        this.displayMessage = {};
        this.user = null; // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.

        this.validationMessages = {
          firstName: {
            required: 'First name is required.',
            whiteSpace: 'First name can not contain white spaces'
          },
          lastName: {
            required: 'user code is required.',
            whiteSpace: 'Last name can not contain white spaces'
          },
          email: {
            required: 'Email address is required.',
            email: 'Please enter a valid email.'
          },
          password: {
            required: 'Password is required',
            minlength: 'Password must be at least four characters.',
            pattern: 'Password should have at least: 1 uppercase letter, 1 lowercase letter, A number, A minimum length of 8.'
          }
        }; // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.

        this.genericValidator = new src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_4__["GenericValidator"](this.validationMessages);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__["WhiteSpaceValidator"].checkWhiteSpace]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__["WhiteSpaceValidator"].checkWhiteSpace]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators_whitespace_validator__WEBPACK_IMPORTED_MODULE_2__["WhiteSpaceValidator"].checkWhiteSpace, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderInfo: false,
            address: '',
            phoneNumber: ''
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          // Watch for the blur event from any input element on the form.
          // This is required because the valueChanges does not provide notification on blur
          var controlBlurs = this.formInputElements.map(function (formControl) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(formControl.nativeElement, 'blur');
          }); // Merge the blur event observable with the valueChanges observable
          // so we only need to subscribe once.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, [this.registerForm.valueChanges].concat(_toConsumableArray(controlBlurs))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100)).subscribe(function (value) {
            _this23.displayMessage = _this23.genericValidator.processMessages(_this23.registerForm);
          });
        }
      }, {
        key: "register",
        value: function register() {// console.log(this.registerForm);
          // if (this.registerForm && this.registerForm.valid) {
          //   this.user.firstName = this.registerForm.value.firstName;
          //   this.user.lastName = this.registerForm.value.lastName;
          //   this.user.password = this.registerForm.value.password;
          //   this.user.email = this.registerForm.value.email;
          //   this.user.phoneNumber = this.registerForm.value.phoneNumber;
          //   this.user.address = this.registerForm.value.address;
          // }
          // console.log(this.user);
          // this.authService.register(this.user).subscribe(
          //   (next) => console.log('registration successful'),
          //   (error) => console.log(error),
          //   () => {
          //     this.authService.login(this.user).subscribe((next) => {
          //       if (this.authService.currentUser !== null) {
          //         this.router.navigate(['/home']);
          //       }
          //     });
          //   }
          // );
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      viewQuery: function RegisterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
        }
      },
      decls: 52,
      vars: 26,
      consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-2", "row"], ["for", "firstName", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["ngModel", "", "id", "firstName", "type", "text", "placeholder", "First Name (required)", "formControlName", "firstName", 1, "form-control"], [1, "invalid-feedback"], ["for", "lastName", 1, "col-md-2", "col-form-label"], ["ngModel", "", "id", "lastName", "type", "text", "placeholder", "Last Name (required)", "formControlName", "lastName", 1, "form-control"], [4, "ngIf"], ["for", "email", 1, "col-md-2", "col-form-label"], ["ngModel", "", "id", "email", "type", "email", "placeholder", "Email (required)", "formControlName", "email", 1, "form-control"], ["for", "passwordId", 1, "col-md-2", "col-form-label"], ["ngModel", "", "id", "passwordId", "type", "password", "placeholder", "Password (required)", "required", "", "minlength", "4", "formControlName", "password", 1, "form-control"], [1, "form-group", "row", "mb-2"], ["for", "addressId", 1, "col-md-2", "col-form-label"], ["id", "addressId", "type", "text", "placeholder", "Your address", "formControlName", "address", 1, "form-control"], ["for", "phoneNumberId", 1, "col-md-2", "col-form-label"], ["id", "phoneNumberId", "type", "text", "placeholder", "phone number", "formControlName", "phoneNumber", 1, "form-control"], [1, "row"], [1, "col-md-4", "offset-md-2"], ["type", "submit", 1, "btn", "btn-primary", "mr-3", 3, "title", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "routerLink"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_span_19_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_span_20_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.displayMessage.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, (ctx.registerForm.get("lastName").touched || ctx.registerForm.get("lastName").dirty) && !ctx.registerForm.get("lastName").valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lastName").errors == null ? null : ctx.registerForm.get("lastName").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lastName").errors == null ? null : ctx.registerForm.get("lastName").errors.whiteSpace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.displayMessage.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.displayMessage.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.password, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.registerForm.valid ? "Register" : "Disabled until the form data is valid")("disabled", !ctx.registerForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, {
        formInputElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/users/user-profile/user-profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/users/user-profile/user-profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUsersUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _orders_orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../orders/orders-container/orders-container.component */
    "./src/app/orders/orders-container/orders-container.component.ts");

    function UserProfileComponent_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.phoneNumber);
      }
    }

    function UserProfileComponent_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.address);
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(authService, router) {
        _classCallCheck(this, UserProfileComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.authService.currentUserSubject.asObservable().subscribe(function (data) {
            console.log(data);
            _this24.user = data;
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile() {//route to edit path
          // this.router.navigate([''])
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 24,
      vars: 5,
      consts: [[1, "container"], [1, "card", "account-details", "mt-5"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAMFBMVEXk5ueutLfh4+Sor7Ln6eq1ur3d4OHEyMqrsbXX2tvJzc/a3d65vsHM0NKxt7rQ09XLCNiwAAADMUlEQVR4nO2aXZOrIAxABcKHgvj//+0F2962u1YSatDZ4Tzt9GXPhBBIcBg6nU6n0+l0Op1Op9P5QwDAYBIy/3GmxyAXq3XM6DCN+ZeTRObglBMPnBJ2PCM2YKx7avzXEXP7yEzit8gqo8emLjDGbZGMCrKhzPRZZF2lZoEBu2uSZZZGLqFkkhapjQvCJMVl5ncpr849Luz5ArNCmaS4GGYXgxRJKoHXBDRaRTjLGRbYLyg/UJJTBZsoNxjDQgtKCotnU5EkkURgC8tCW58EV7ZQts8NNzGFxVNNhNA8KrDQkjajWEwGQJ2DP1R4Tmggiwi20kLePwmeg2isUYkc2xlmeqokDIcK8s70juOo/ZUqI4tKhUm6V/51lQst0HXS9jqb+UIlbpDXKfxXOg4D3YSpda7JW65WqOJCGZnuthCpJmzXbKA3HyxVJXOhlozaqLIcQA9oK8Q5YaEdiYotU1aXy4x6BhjxYdGcItllQo8FPfuIEtmuthgiS9wImavOvqMRg3XelH1SjEuLsfodu5+7zR4+hnwwfngjWxdHt3yaGkBuvRyuEYlzQ4+bzBjUxjOmsk1D8pCRVjv39rgb5rMevkH6OTyudtEu5qwn75tN/hDAey+HM78EyP9bSmOyifHGSDmc4QMgx9mGoGMUbiWtkA7BTkuKT6t1AjDLFIRSm7vZpd+1XTx7dFIwvNVip77dfJyIYZSMwYFUS+JGMflQdEVYeGID4K0j9kFOhfHw0MDgQ2lZNmWcXo6VgSXUDFdWVJyOk9n9RAQTGjEfczAB7ga5L3PI9zV1g8lfqPDtdwHgv1ubJ058d7Wj9uu7qC/mCilLqvfNFk7UdmlgEF0GkbpFAvz3IXiqekZKo05xofdqMHKIiIpRB/hDE/YVRewcDXkuiofWO8Lxe+fVhVB4Dyr2H4l4E/qomIZD113JmCh3F+RAt+aLDLILLiyGeXlWFdx8rOIFqgLMQxFfcXsFU3RbZEoG8dTKcR5v4ZaiSt3DdgXF2gJtklZgPg5rkrSrSulUrHrtr6Owhw694hcovKG1SxUhdGE7N1QpvPzKqNpROJ5lQ/ZNOp1Op9Npxj/NmCcYJSpF4QAAAABJRU5ErkJggg==", "alt", "", "srcset", ""], [1, "card-text"], ["class", "card-text", 4, "ngIf"], ["href", "#", 1, "btn", 3, "click"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserProfileComponent_p_19_Template, 4, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserProfileComponent_p_20_Template, 4, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_21_listener() {
            return ctx.editProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-orders-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.address);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _orders_orders_container_orders_container_component__WEBPACK_IMPORTED_MODULE_4__["OrdersContainerComponent"]],
      styles: [".card-title[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n  color: rgba(255, 255, 255, 0.897);\n}\n\n.account-details[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.account-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: #81b03f solid;\n  position: absolute;\n  right: 35px;\n  top: 50%;\n  transform: translateY(-40%);\n  width: 150px;\n}\n\n@media only screen and (max-width: 480px) {\n  img[_ngcontent-%COMP%] {\n    position: unset !important;\n    right: unset !important;\n    top: unset !important;\n    transform: unset !important;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1wcm9maWxlL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFx1c2Vyc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJzL3VzZXItcHJvZmlsZS9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91c2Vycy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0NEWTtBQ0NoQjs7QUZFQTtFQUNJLHlCQ0pZO0VES1osaUNDSmU7QUNLbkI7O0FGRUE7RUFDSSxrQkFBQTtBRUNKOztBRkFJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUVFUjs7QUZJQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxrQkFBQTtFRURGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzJztcclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6JHByaW1hcnktYmctY29sb3I7XHJcbn1cclxuXHJcbi5hY2NvdW50LWRldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogJHByaW1hcnktY29sb3Igc29saWQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OjM1cHg7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwJSk7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG59IFxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6dW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRvcDp1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbn0iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iLCIuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjODFiMDNmO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYjAzZjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xufVxuXG4uYWNjb3VudC1kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFjY291bnQtZGV0YWlscyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogIzgxYjAzZiBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGltZyB7XG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/users/users-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: UsersRoutingModule */

  /***/
  function srcAppUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
      return UsersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/users/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/users/register/register.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/users/user-profile/user-profile.component.ts");
    /* harmony import */


    var _guards_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../guards/user-profile.guard */
    "./src/app/guards/user-profile.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'profile/:id',
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
      canActivate: [_guards_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__["UserProfileGuard"]]
    }];

    var UsersRoutingModule = function UsersRoutingModule() {
      _classCallCheck(this, UsersRoutingModule);
    };

    UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UsersRoutingModule
    });
    UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UsersRoutingModule_Factory(t) {
        return new (t || UsersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.module.ts":
  /*!***************************************!*\
    !*** ./src/app/users/users.module.ts ***!
    \***************************************/

  /*! exports provided: UsersModule */

  /***/
  function srcAppUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/users/users-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/users/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/users/register/register.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/users/logout/logout.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/users/user-profile/user-profile.component.ts");
    /* harmony import */


    var _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../orders/orders.module */
    "./src/app/orders/orders.module.ts");

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UsersModule
    });
    UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UsersModule_Factory(t) {
        return new (t || UsersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__["OrdersModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__["OrdersModule"]],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__["OrdersModule"]],
          exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! H:\Code\ITI\Angular\grocery-store-webapp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map