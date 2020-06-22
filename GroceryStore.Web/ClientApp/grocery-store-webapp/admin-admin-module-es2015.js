(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/add-or-edit-category/add-or-edit-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/add-or-edit-category/add-or-edit-category.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddOrEditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditCategoryComponent", function() { return AddOrEditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/validators/generic-validator-messages */ "./src/app/shared/validators/generic-validator-messages.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");









const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddOrEditCategoryComponent {
    constructor(fb, router, activatedRoute, categoryService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.title = 'Add Category';
        this.editMode = false;
        this.displayMessage = {};
        this.validationMessages = {
            name: {
                required: 'Product name is required.',
                minlength: 'Product name can not be less than 3 characters.',
            },
        };
        this.genericValidator = new src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"](this.validationMessages);
    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    ngAfterViewInit() {
        // Watch for the blur event from any input element on the form.
        // This is required because the valueChanges does not provide notification on blur
        const controlBlurs = this.formInputElements.map((formControl) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(formControl.nativeElement, 'blur'));
        // Merge the blur event observable with the valueChanges observable
        // so we only need to subscribe once.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.addOREditCategoryForm.valueChanges, ...controlBlurs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000))
            .subscribe((value) => {
            this.displayMessage = this.genericValidator.processMessages(this.addOREditCategoryForm);
        });
    }
    initForm() {
        if (this.editMode) {
            console.log(`form intialization`);
            this.categoryService.getCategoryById(this.id).subscribe({
                next: category => {
                    this.category = category;
                    this.title = `Edit Category: ${this.category.name}`;
                    //lama 3mlt new formGroup brdo gab nafs error wtf!
                    // this.addOREditCategoryForm = new FormGroup({
                    //   name:new FormControl(this.category.name)
                    // });
                    this.addOREditCategoryForm = this.fb.group({
                        name: [this.category.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]]
                    });
                }
            });
        }
        else {
            // this.addOREditCategoryForm = new FormGroup({
            //   name:new FormControl()
            // });
            this.title = 'Add Category';
            this.addOREditCategoryForm = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]]
            });
        }
    }
    saveCategory() {
        if (this.addOREditCategoryForm.valid) {
            if (this.addOREditCategoryForm.dirty) {
                const category = Object.assign(Object.assign({}, this.category), this.addOREditCategoryForm.value);
                if (!this.editMode) {
                    this.categoryService.addCategory(category).subscribe({
                        next: () => {
                            this.addOREditCategoryForm.reset();
                            this.router.navigate(['/admin/categories']);
                        }
                    });
                }
                else {
                    this.categoryService.updateCategory(category).subscribe({
                        next: () => {
                            this.addOREditCategoryForm.reset();
                            this.router.navigate(['/admin/categories']);
                        }
                    });
                }
            }
        }
    }
    onCancel() {
        this.router.navigate(['/admin/categories']);
    }
}
AddOrEditCategoryComponent.ɵfac = function AddOrEditCategoryComponent_Factory(t) { return new (t || AddOrEditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"])); };
AddOrEditCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddOrEditCategoryComponent, selectors: [["app-add-or-edit-category"]], viewQuery: function AddOrEditCategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
    } }, decls: 19, vars: 9, consts: [[1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "productNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "productNameId", "type", "text", "placeholder", "Name (required)", "formControlName", "name", 1, "form-control"], [1, "invalid-feedback"], [1, "row"], [1, "col-md-4", "offset-md-2"], ["type", "submit", 1, "btn", "bg-green-light", "text-white", "mr-4", 3, "disabled", "title"], [1, "btn", "btn-outline-secondary", 3, "click"]], template: function AddOrEditCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddOrEditCategoryComponent_Template_form_ngSubmit_5_listener() { return ctx.saveCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddOrEditCategoryComponent_Template_button_click_17_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addOREditCategoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.displayMessage.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addOREditCategoryForm.valid)("title", ctx.addOREditCategoryForm.valid ? "Save your entered data" : "Disabled until the form data is valid");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".bg-green-light[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLW9yLWVkaXQtY2F0ZWdvcnkvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXGFkbWluXFxhZGQtb3ItZWRpdC1jYXRlZ29yeVxcYWRkLW9yLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkZC1vci1lZGl0LWNhdGVnb3J5L0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkZC1vci1lZGl0LWNhdGVnb3J5L2FkZC1vci1lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDRlk7QUNDaEI7O0FGS0k7RUFDSSxzQkFBQTtBRUZSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLW9yLWVkaXQtY2F0ZWdvcnkvYWRkLW9yLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0XCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5iZy1ncmVlbi1saWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIiwiLmJnLWdyZWVuLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYjAzZjtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddOrEditCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-or-edit-category',
                templateUrl: './add-or-edit-category.component.html',
                styleUrls: ['./add-or-edit-category.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }]; }, { formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/add-or-edit-product/add-or-edit-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/add-or-edit-product/add-or-edit-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddOrEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditProductComponent", function() { return AddOrEditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/validators/generic-validator-messages */ "./src/app/shared/validators/generic-validator-messages.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");









const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddOrEditProductComponent {
    constructor(fb, router, activatedRoute, productService) {
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.title = 'Add Product';
        this.editMode = false;
        this.displayMessage = {};
        this.validationMessages = {
            name: {
                required: 'Product name is required.',
                minlength: 'Product name can not be less than 3 characters.',
            },
            price: {
                required: 'Price is required'
            },
        };
        this.genericValidator = new src_app_shared_validators_generic_validator_messages__WEBPACK_IMPORTED_MODULE_4__["GenericValidator"](this.validationMessages);
    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
        // this.addOREditProductForm = this.fb.group({
        //   name: ['', [Validators.required, Validators.minLength(3)]],
        //   price: ['', [Validators.required]],
        //   description: [''],
        //   categoryName: ['']
        // });
    }
    ngAfterViewInit() {
        // Watch for the blur event from any input element on the form.
        // This is required because the valueChanges does not provide notification on blur
        const controlBlurs = this.formInputElements.map((formControl) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(formControl.nativeElement, 'blur'));
        // Merge the blur event observable with the valueChanges observable
        // so we only need to subscribe once.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.addOREditProductForm.valueChanges, ...controlBlurs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe((value) => {
            this.displayMessage = this.genericValidator.processMessages(this.addOREditProductForm);
        });
    }
    initForm() {
        if (this.editMode) {
            console.log(`form intialization`);
            this.productService.getProductById(this.id).subscribe({
                next: product => {
                    this.product = product;
                    this.title = `Edit Product: ${this.product.name}`;
                    //lama 3mlt new formGroup brdo gab nafs error wtf!
                    // this.addOREditCategoryForm = new FormGroup({
                    //   name:new FormControl(this.category.name)
                    // });
                    this.addOREditProductForm = this.fb.group({
                        name: [this.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                        price: [this.product.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        description: [this.product.description],
                        categoryName: [this.product.categoryName]
                    });
                }
            });
        }
        else {
            // this.addOREditCategoryForm = new FormGroup({
            //   name:new FormControl()
            // });
            this.title = 'Add Product';
            this.addOREditProductForm = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                description: [''],
                categoryName: ['']
            });
        }
    }
    saveProduct() {
        if (this.addOREditProductForm.valid) {
            if (this.addOREditProductForm.dirty) {
                const product = Object.assign(Object.assign({}, this.product), this.addOREditProductForm.value);
                if (!this.editMode) {
                    this.productService.addProduct(product).subscribe({
                        next: () => {
                            this.addOREditProductForm.reset();
                            this.router.navigate(['admin/products']);
                        }
                    });
                }
                else {
                    this.productService.updateProduct(product).subscribe({
                        next: () => {
                            this.addOREditProductForm.reset();
                            this.router.navigate(['admin/products']);
                        }
                    });
                }
            }
        }
    }
    onCancel() {
        this.router.navigate(['admin/products']);
    }
}
AddOrEditProductComponent.ɵfac = function AddOrEditProductComponent_Factory(t) { return new (t || AddOrEditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"])); };
AddOrEditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddOrEditProductComponent, selectors: [["app-add-or-edit-product"]], viewQuery: function AddOrEditProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formInputElements = _t);
    } }, decls: 38, vars: 14, consts: [[1, "container"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "productNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "productNameId", "type", "text", "placeholder", "Name (required)", "formControlName", "name", 1, "form-control"], [1, "invalid-feedback"], ["for", "productPriceId", 1, "col-md-2", "col-form-label"], ["id", "productPriceId", "type", "text", "placeholder", "Price (required)", "formControlName", "price", 1, "form-control"], ["for", "productDescriptionId", 1, "col-md-2", "col-form-label"], ["id", "productDescriptionId", "type", "text", "placeholder", "Description", "formControlName", "description", 1, "form-control"], ["for", "productCategoryId", 1, "col-md-2", "col-form-label"], ["id", "productCategoryId", "type", "text", "placeholder", "Category", "formControlName", "categoryName", 1, "form-control"], [1, "row"], [1, "col-md-4", "offset-md-2"], ["type", "submit", 1, "btn", "bg-green-light", "text-white", "mr-4", 3, "disabled", "title"], [1, "btn", "btn-outline-secondary", 3, "click"]], template: function AddOrEditProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddOrEditProductComponent_Template_form_ngSubmit_5_listener() { return ctx.saveProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddOrEditProductComponent_Template_button_click_36_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addOREditProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.displayMessage.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.displayMessage.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayMessage.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addOREditProductForm.valid)("title", ctx.addOREditProductForm.valid ? "Save your entered data" : "Disabled until the form data is valid");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".bg-green-light[_ngcontent-%COMP%] {\n  background-color: #81b03f;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLW9yLWVkaXQtcHJvZHVjdC9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFwcFxcYWRtaW5cXGFkZC1vci1lZGl0LXByb2R1Y3RcXGFkZC1vci1lZGl0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkZC1vci1lZGl0LXByb2R1Y3QvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRkLW9yLWVkaXQtcHJvZHVjdC9hZGQtb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDRlk7QUNDaEI7O0FGS0k7RUFDSSxzQkFBQTtBRUZSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLW9yLWVkaXQtcHJvZHVjdC9hZGQtb3ItZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uYmctZ3JlZW4tbGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmJ0bntcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIH1cclxufSIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzgxYjAzZjtcclxuJHByaW1hcnktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gYnJlYWtwb2ludHNcclxuJHNtYWxsLXBob25lOiAzMjBweDtcclxuJGxhbmRzY2FwZTogNTc2cHg7XHJcbiR0YWJsZXQ6IDc2OHB4O1xyXG4kZGVza3RvcDogOTkycHg7XHJcbiRsYXJnZS1kZXNrdG9wOiAxMjAwcHg7XHJcblxyXG4vLyBCb290c3RyYXAgb3ZlcnJpZGRlbiB2YXJpYWJsZXNcclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgICAxOiAoJHNwYWNlciAqIC4yNSksICAgICAvLzRweFxyXG4gICAgIDI6ICgkc3BhY2VyICogLjUpLCAgICAgIC8vOHB4XHJcbiAgICAgMzogJHNwYWNlciwgICAgICAgICAgICAgLy8xNnB4XHJcbiAgICAgNDogKCRzcGFjZXIgKiAxLjUpLCAgICAgLy8yNHB4XHJcbiAgICAgNTogKCRzcGFjZXIgKiAzKSwgICAgICAgLy80OHB4XHJcbiAgICAgNjogKCRzcGFjZXIgKiA0KSwgICAgICAgLy82NHB4XHJcbiAgICAgNzogKCRzcGFjZXIgKiA1KSwgICAgICAgLy84MHB4XHJcbiAgICAgODogKCRzcGFjZXIgKiA2LjI1KSwgICAgLy8xMDBweFxyXG4gICAgIDk6ICgkc3BhY2VyICogNy41KSwgICAgIC8vMTIwcHhcclxuICAgICAxMDogKCRzcGFjZXIgKiA5LjM3NSksICAvLzE1MHB4XHJcbiAgICAgMTE6ICgkc3BhY2VyICogMTApLCAgICAgLy8xNjBweFxyXG4gICAgIDE2OiAoJHNwYWNlciAqIDE2KSwgICAgIC8vMjU2cHhcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcbiIsIi5iZy1ncmVlbi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWIwM2Y7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddOrEditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-or-edit-product',
                templateUrl: './add-or-edit-product.component.html',
                styleUrls: ['./add-or-edit-product.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }]; }, { formInputElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/configs */ "./src/app/shared/configs/index.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing-products/listing-products.component */ "./src/app/admin/listing-products/listing-products.component.ts");
/* harmony import */ var _add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-or-edit-product/add-or-edit-product.component */ "./src/app/admin/add-or-edit-product/add-or-edit-product.component.ts");
/* harmony import */ var _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listing-categories/listing-categories.component */ "./src/app/admin/listing-categories/listing-categories.component.ts");
/* harmony import */ var _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-or-edit-category/add-or-edit-category.component */ "./src/app/admin/add-or-edit-category/add-or-edit-category.component.ts");
/* harmony import */ var _listing_orders_listing_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing-orders/listing-orders.component */ "./src/app/admin/listing-orders/listing-orders.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/admin/order-details/order-details.component.ts");













/// add the isAdminAuthorized guard before every route
const routes = [
    {
        path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.productsList.route },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.productsList.name, component: _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_5__["ListingProductsComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.newProduct.name, component: _add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["AddOrEditProductComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.editProduct.name, component: _add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["AddOrEditProductComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.categoriesList.name, component: _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_7__["ListingCategoriesComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.newCategory.name, component: _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["AddOrEditCategoryComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.editCategory.name, component: _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_8__["AddOrEditCategoryComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.ordersList.name, component: _listing_orders_listing_orders_component__WEBPACK_IMPORTED_MODULE_9__["ListingOrdersComponent"] },
            { path: _shared_configs__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].admin.children.orderDetails.name, component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsComponent"] }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return ["/admin/products"]; };
const _c1 = function () { return ["/admin/products/new"]; };
const _c2 = function () { return ["/admin/categories"]; };
const _c3 = function () { return ["/admin/categories/new"]; };
class AdminComponent {
    constructor() {
        this.productMenuStatus = false;
        this.categoryMenuStatus = false;
    }
    ngOnInit() {
    }
    toggleSubMenu(subMenu) {
        if (subMenu.classList.contains('collapsed')) {
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            subMenu.classList.remove("collapsed");
        }
        else {
            subMenu.style.maxHeight = '0px';
            subMenu.classList.add("collapsed");
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 39, vars: 13, consts: [[1, "container-fluid"], [1, "row"], [1, "col-2", "p-4", "side-bar"], [1, "nav", "flex-column"], [1, "nav-item", "p-2"], [1, "nav-link", "text-light", 3, "routerLink", "click"], [1, "fa", "fa-caret-down", 3, "ngClass"], [1, "sub-link", "collapsed"], ["productsSubMenu", ""], [1, "flex-column", "pl-2", "nav"], [1, "nav-item"], [1, "nav-link", "text-light", "p-2", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "fa", "fa-list-ul"], ["categoriesSubMenu", ""], [1, "nav-link", "text-light", 3, "routerLink"], [1, "col-10", "p-4"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); ctx.toggleSubMenu(_r0); return ctx.productMenuStatus = !ctx.productMenuStatus; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " List Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); ctx.toggleSubMenu(_r1); return ctx.categoryMenuStatus = !ctx.categoryMenuStatus; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Add Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " List Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.productMenuStatus ? "fa-caret-up" : "fa-caret-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.categoryMenuStatus ? "fa-caret-up" : "fa-caret-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/admin/orders");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".side-bar[_ngcontent-%COMP%] {\n  background-color: darkcyan;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.sub-link[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcclxufVxyXG5cclxuLm5hdi1pdGVtIGEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdWItbGluayB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cztcclxufVxyXG4iLCIuc2lkZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcbn1cblxuLm5hdi1pdGVtIGEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Yi1saW5rIHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-or-edit-product/add-or-edit-product.component */ "./src/app/admin/add-or-edit-product/add-or-edit-product.component.ts");
/* harmony import */ var _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-or-edit-category/add-or-edit-category.component */ "./src/app/admin/add-or-edit-category/add-or-edit-category.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listing-products/listing-products.component */ "./src/app/admin/listing-products/listing-products.component.ts");
/* harmony import */ var _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listing-categories/listing-categories.component */ "./src/app/admin/listing-categories/listing-categories.component.ts");
/* harmony import */ var _listing_orders_listing_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing-orders/listing-orders.component */ "./src/app/admin/listing-orders/listing-orders.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/admin/order-details/order-details.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/admin/order/order.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");














class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_2__["AddOrEditProductComponent"], _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddOrEditCategoryComponent"], _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_7__["ListingProductsComponent"], _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_8__["ListingCategoriesComponent"], _listing_orders_listing_orders_component__WEBPACK_IMPORTED_MODULE_9__["ListingOrdersComponent"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_2__["AddOrEditProductComponent"],
        _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddOrEditCategoryComponent"],
        _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_8__["ListingCategoriesComponent"],
        _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_7__["ListingProductsComponent"],
        _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_2__["AddOrEditProductComponent"], _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddOrEditCategoryComponent"], _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_7__["ListingProductsComponent"], _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_8__["ListingCategoriesComponent"], _listing_orders_listing_orders_component__WEBPACK_IMPORTED_MODULE_9__["ListingOrdersComponent"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ],
                exports: [
                    _add_or_edit_product_add_or_edit_product_component__WEBPACK_IMPORTED_MODULE_2__["AddOrEditProductComponent"],
                    _add_or_edit_category_add_or_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddOrEditCategoryComponent"],
                    _listing_categories_listing_categories_component__WEBPACK_IMPORTED_MODULE_8__["ListingCategoriesComponent"],
                    _listing_products_listing_products_component__WEBPACK_IMPORTED_MODULE_7__["ListingProductsComponent"],
                    _admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/listing-categories/listing-categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/listing-categories/listing-categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListingCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingCategoriesComponent", function() { return ListingCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/admin/categories", a1, "edit"]; };
function ListingCategoriesComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cat_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.name);
} }
class ListingCategoriesComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.Categories = [];
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe({
            next: categories => {
                this.Categories = categories;
            },
        });
    }
}
ListingCategoriesComponent.ɵfac = function ListingCategoriesComponent_Factory(t) { return new (t || ListingCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"])); };
ListingCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingCategoriesComponent, selectors: [["app-listing-categories"]], decls: 10, vars: 1, consts: [[1, "table-responsive"], [1, "table", "table-hover", "table-striped"], ["style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "routerLink"]], template: function ListingCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListingCategoriesComponent_tr_9_Template, 5, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["thead[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbGlzdGluZy1jYXRlZ29yaWVzL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXBwXFxhZG1pblxcbGlzdGluZy1jYXRlZ29yaWVzXFxsaXN0aW5nLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2xpc3RpbmctY2F0ZWdvcmllcy9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hZG1pbi9saXN0aW5nLWNhdGVnb3JpZXMvbGlzdGluZy1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NGWTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpc3RpbmctY2F0ZWdvcmllcy9saXN0aW5nLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0XCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbnRoZWFke1xyXG4gICAgY29sb3I6JHByaW1hcnktY29sb3I7XHJcbn0iLCIvLyBDb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM4MWIwM2Y7XHJcbiRwcmltYXJ5LWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KTtcclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduIGJyZWFrcG9pbnRzXHJcbiRzbWFsbC1waG9uZTogMzIwcHg7XHJcbiRsYW5kc2NhcGU6IDU3NnB4O1xyXG4kdGFibGV0OiA3NjhweDtcclxuJGRlc2t0b3A6IDk5MnB4O1xyXG4kbGFyZ2UtZGVza3RvcDogMTIwMHB4O1xyXG5cclxuLy8gQm9vdHN0cmFwIG92ZXJyaWRkZW4gdmFyaWFibGVzXHJcbiRwcmltYXJ5OiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcclxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xyXG4kc3BhY2VyczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDA6IDAsXHJcbiAgICAgMTogKCRzcGFjZXIgKiAuMjUpLCAgICAgLy80cHhcclxuICAgICAyOiAoJHNwYWNlciAqIC41KSwgICAgICAvLzhweFxyXG4gICAgIDM6ICRzcGFjZXIsICAgICAgICAgICAgIC8vMTZweFxyXG4gICAgIDQ6ICgkc3BhY2VyICogMS41KSwgICAgIC8vMjRweFxyXG4gICAgIDU6ICgkc3BhY2VyICogMyksICAgICAgIC8vNDhweFxyXG4gICAgIDY6ICgkc3BhY2VyICogNCksICAgICAgIC8vNjRweFxyXG4gICAgIDc6ICgkc3BhY2VyICogNSksICAgICAgIC8vODBweFxyXG4gICAgIDg6ICgkc3BhY2VyICogNi4yNSksICAgIC8vMTAwcHhcclxuICAgICA5OiAoJHNwYWNlciAqIDcuNSksICAgICAvLzEyMHB4XHJcbiAgICAgMTA6ICgkc3BhY2VyICogOS4zNzUpLCAgLy8xNTBweFxyXG4gICAgIDExOiAoJHNwYWNlciAqIDEwKSwgICAgIC8vMTYwcHhcclxuICAgICAxNjogKCRzcGFjZXIgKiAxNiksICAgICAvLzI1NnB4XHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG4iLCJ0aGVhZCB7XG4gIGNvbG9yOiAjODFiMDNmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listing-categories',
                templateUrl: './listing-categories.component.html',
                styleUrls: ['./listing-categories.component.scss']
            }]
    }], function () { return [{ type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/listing-orders/listing-orders.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/listing-orders/listing-orders.component.ts ***!
  \******************************************************************/
/*! exports provided: ListingOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingOrdersComponent", function() { return ListingOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/signal-r.service */ "./src/app/services/signal-r.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order/order.component */ "./src/app/admin/order/order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function (a2) { return ["/admin", "orders", a2]; };
function ListingOrdersComponent_app_order_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-order", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", item_r1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id));
} }
class ListingOrdersComponent {
    constructor(orderService, signalRService) {
        this.orderService = orderService;
        this.signalRService = signalRService;
    }
    ngOnInit() {
        this.orderService.getOrders().subscribe({
            next: orders => this.orders = orders
        });
        this.signalRService.orderReceived.subscribe((order) => {
            this.orders.unshift(order);
        });
    }
}
ListingOrdersComponent.ɵfac = function ListingOrdersComponent_Factory(t) { return new (t || ListingOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__["SignalRService"])); };
ListingOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingOrdersComponent, selectors: [["app-listing-orders"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "d-flex", "flex-wrap"], ["style", "cursor: pointer;", "class", "d-flex justify-content-center p-3", 3, "order", "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "p-3", 2, "cursor", "pointer", 3, "order", "routerLink"]], template: function ListingOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListingOrdersComponent_app_order_2_Template, 1, 4, "app-order", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["thead[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbGlzdGluZy1vcmRlcnMvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhcHBcXGFkbWluXFxsaXN0aW5nLW9yZGVyc1xcbGlzdGluZy1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2xpc3Rpbmctb3JkZXJzL0g6XFxDb2RlXFxJVElcXEFuZ3VsYXJcXGdyb2Nlcnktc3RvcmUtd2ViYXBwL3NyY1xcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluL2xpc3Rpbmctb3JkZXJzL2xpc3Rpbmctb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NGWTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpc3Rpbmctb3JkZXJzL2xpc3Rpbmctb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG50aGVhZHtcclxuICAgIGNvbG9yOiRwcmltYXJ5LWNvbG9yO1xyXG59IiwiLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjODFiMDNmO1xyXG4kcHJpbWFyeS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5Nyk7XHJcblxyXG4vLyBSZXNwb25zaXZlIGRlc2lnbiBicmVha3BvaW50c1xyXG4kc21hbGwtcGhvbmU6IDMyMHB4O1xyXG4kbGFuZHNjYXBlOiA1NzZweDtcclxuJHRhYmxldDogNzY4cHg7XHJcbiRkZXNrdG9wOiA5OTJweDtcclxuJGxhcmdlLWRlc2t0b3A6IDEyMDBweDtcclxuXHJcbi8vIEJvb3RzdHJhcCBvdmVycmlkZGVuIHZhcmlhYmxlc1xyXG4kcHJpbWFyeTogJHByaW1hcnktY29sb3IgIWRlZmF1bHQ7XHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgIDE6ICgkc3BhY2VyICogLjI1KSwgICAgIC8vNHB4XHJcbiAgICAgMjogKCRzcGFjZXIgKiAuNSksICAgICAgLy84cHhcclxuICAgICAzOiAkc3BhY2VyLCAgICAgICAgICAgICAvLzE2cHhcclxuICAgICA0OiAoJHNwYWNlciAqIDEuNSksICAgICAvLzI0cHhcclxuICAgICA1OiAoJHNwYWNlciAqIDMpLCAgICAgICAvLzQ4cHhcclxuICAgICA2OiAoJHNwYWNlciAqIDQpLCAgICAgICAvLzY0cHhcclxuICAgICA3OiAoJHNwYWNlciAqIDUpLCAgICAgICAvLzgwcHhcclxuICAgICA4OiAoJHNwYWNlciAqIDYuMjUpLCAgICAvLzEwMHB4XHJcbiAgICAgOTogKCRzcGFjZXIgKiA3LjUpLCAgICAgLy8xMjBweFxyXG4gICAgIDEwOiAoJHNwYWNlciAqIDkuMzc1KSwgIC8vMTUwcHhcclxuICAgICAxMTogKCRzcGFjZXIgKiAxMCksICAgICAvLzE2MHB4XHJcbiAgICAgMTY6ICgkc3BhY2VyICogMTYpLCAgICAgLy8yNTZweFxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuIiwidGhlYWQge1xuICBjb2xvcjogIzgxYjAzZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listing-orders',
                templateUrl: './listing-orders.component.html',
                styleUrls: ['./listing-orders.component.scss']
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }, { type: _services_signal_r_service__WEBPACK_IMPORTED_MODULE_2__["SignalRService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/listing-products/listing-products.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/listing-products/listing-products.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListingProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingProductsComponent", function() { return ListingProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/admin/products", a1, "edit"]; };
function ListingProductsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, product_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, product_r1.price, "EGP", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.categoryName);
} }
class ListingProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        this.productsSub = this.productService.getProductsSubject().subscribe({
            next: products => {
                this.products = products;
            }
        });
    }
    ngOnDestroy() {
        this.productsSub.unsubscribe();
    }
}
ListingProductsComponent.ɵfac = function ListingProductsComponent_Factory(t) { return new (t || ListingProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ListingProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingProductsComponent, selectors: [["app-listing-products"]], decls: 15, vars: 1, consts: [[1, "table-responsive"], [1, "table", "table-hover", "table-striped"], ["style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "routerLink"]], template: function ListingProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListingProductsComponent_tr_14_Template, 10, 11, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["thead[_ngcontent-%COMP%] {\n  color: #81b03f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbGlzdGluZy1wcm9kdWN0cy9IOlxcQ29kZVxcSVRJXFxBbmd1bGFyXFxncm9jZXJ5LXN0b3JlLXdlYmFwcC9zcmNcXGFwcFxcYWRtaW5cXGxpc3RpbmctcHJvZHVjdHNcXGxpc3RpbmctcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2xpc3RpbmctcHJvZHVjdHMvSDpcXENvZGVcXElUSVxcQW5ndWxhclxcZ3JvY2VyeS1zdG9yZS13ZWJhcHAvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYWRtaW4vbGlzdGluZy1wcm9kdWN0cy9saXN0aW5nLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NGWTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpc3RpbmctcHJvZHVjdHMvbGlzdGluZy1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnRcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxudGhlYWR7XHJcbiAgICBjb2xvcjokcHJpbWFyeS1jb2xvcjtcclxufSIsIi8vIENvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzgxYjAzZjtcclxuJHByaW1hcnktYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTcpO1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBkZXNpZ24gYnJlYWtwb2ludHNcclxuJHNtYWxsLXBob25lOiAzMjBweDtcclxuJGxhbmRzY2FwZTogNTc2cHg7XHJcbiR0YWJsZXQ6IDc2OHB4O1xyXG4kZGVza3RvcDogOTkycHg7XHJcbiRsYXJnZS1kZXNrdG9wOiAxMjAwcHg7XHJcblxyXG4vLyBCb290c3RyYXAgb3ZlcnJpZGRlbiB2YXJpYWJsZXNcclxuJHByaW1hcnk6ICRwcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgICAxOiAoJHNwYWNlciAqIC4yNSksICAgICAvLzRweFxyXG4gICAgIDI6ICgkc3BhY2VyICogLjUpLCAgICAgIC8vOHB4XHJcbiAgICAgMzogJHNwYWNlciwgICAgICAgICAgICAgLy8xNnB4XHJcbiAgICAgNDogKCRzcGFjZXIgKiAxLjUpLCAgICAgLy8yNHB4XHJcbiAgICAgNTogKCRzcGFjZXIgKiAzKSwgICAgICAgLy80OHB4XHJcbiAgICAgNjogKCRzcGFjZXIgKiA0KSwgICAgICAgLy82NHB4XHJcbiAgICAgNzogKCRzcGFjZXIgKiA1KSwgICAgICAgLy84MHB4XHJcbiAgICAgODogKCRzcGFjZXIgKiA2LjI1KSwgICAgLy8xMDBweFxyXG4gICAgIDk6ICgkc3BhY2VyICogNy41KSwgICAgIC8vMTIwcHhcclxuICAgICAxMDogKCRzcGFjZXIgKiA5LjM3NSksICAvLzE1MHB4XHJcbiAgICAgMTE6ICgkc3BhY2VyICogMTApLCAgICAgLy8xNjBweFxyXG4gICAgIDE2OiAoJHNwYWNlciAqIDE2KSwgICAgIC8vMjU2cHhcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcbiIsInRoZWFkIHtcbiAgY29sb3I6ICM4MWIwM2Y7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listing-products',
                templateUrl: './listing-products.component.html',
                styleUrls: ['./listing-products.component.scss']
            }]
    }], function () { return [{ type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OrderComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], inputs: { order: "order" }, decls: 9, vars: 1, consts: [[1, "order"], [1, "card", "border-success", "text-center"], [1, "card-body", "text-success"], [1, "card-text"], [1, "text-center", "text-black-50"], [1, "fa", "fa-chevron-right", "font-sm", "font-weight-light"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Details .. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order #", ctx.order.id, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.scss']
            }]
    }], function () { return []; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map