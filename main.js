(self["webpackChunktext_morph"] = self["webpackChunktext_morph"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _pages_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found */ 8923);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ 8778);
/* harmony import */ var _pages_word_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/word-case */ 1957);
/* harmony import */ var _pages_numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/numbers */ 8294);
/* harmony import */ var _pages_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/password */ 4340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);









const routes = [
    {
        path: '',
        redirectTo: '/wordcase',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: _pages_about__WEBPACK_IMPORTED_MODULE_2__.AboutComponent,
    },
    {
        path: 'wordcase',
        component: _pages_word_case__WEBPACK_IMPORTED_MODULE_3__.WordCaseComponent,
    },
    {
        path: 'numbers',
        component: _pages_numbers__WEBPACK_IMPORTED_MODULE_4__.NumbersComponent,
    },
    {
        path: 'password',
        component: _pages_password__WEBPACK_IMPORTED_MODULE_5__.PasswordComponent,
    },
    // Must be last to catch all invalid routes.
    {
        path: '**',
        component: _pages_not_found__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
                preloadingStrategy: _services__WEBPACK_IMPORTED_MODULE_0__.SelectivePreloadingStrategyService,
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_shared_layout_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared/layout/sidebar.component */ 5425);
/* harmony import */ var _components_shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/layout/header.component */ 1255);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/layout/footer.component */ 5759);





class AppComponent {
    constructor() {
        this.title = 'text-morph';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "md:flex"], [1, "flex-grow", "bg-white", "dark:bg-gray-900"], [1, "flex", "flex-col", "min-h-screen"], [1, "flex-grow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-layout-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-layout-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_components_shared_layout_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _components_shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-markdown */ 2443);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared */ 1532);
/* harmony import */ var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.module */ 8114);
/* harmony import */ var _pages_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found */ 8923);
/* harmony import */ var _pages_word_case_word_case_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/word-case/word-case.module */ 166);
/* harmony import */ var _pages_numbers_numbers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/numbers/numbers.module */ 4623);
/* harmony import */ var _pages_password_password_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/password/password.module */ 2302);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);


















class AppModule {
    constructor(router) {
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_14__.MarkdownModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__.AboutModule,
            _pages_word_case_word_case_module__WEBPACK_IMPORTED_MODULE_5__.WordCaseModule,
            _pages_numbers_numbers_module__WEBPACK_IMPORTED_MODULE_6__.NumbersModule,
            _pages_password_password_module__WEBPACK_IMPORTED_MODULE_7__.PasswordModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _pages_not_found__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_14__.MarkdownModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _components_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__.AboutModule,
        _pages_word_case_word_case_module__WEBPACK_IMPORTED_MODULE_5__.WordCaseModule,
        _pages_numbers_numbers_module__WEBPACK_IMPORTED_MODULE_6__.NumbersModule,
        _pages_password_password_module__WEBPACK_IMPORTED_MODULE_7__.PasswordModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 1532:
/*!********************************************!*\
  !*** ./src/app/components/shared/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkToggleComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.DarkToggleComponent),
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent),
/* harmony export */   "SidebarComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ 3207);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ 4065);




/***/ }),

/***/ 3731:
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/layout/dark-toggle.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkToggleComponent": () => (/* binding */ DarkToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/theme.service */ 8140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



const _c0 = function (a0, a1) { return { "bg-indigo-400 dark:bg-indigo-500 text-white": a0, "hover:bg-gray-100 dark:hover:bg-gray-600": a1 }; };
class DarkToggleComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
    }
    getCurrentTheme() {
        return this.themeService.getCurrentTheme();
    }
    onToggleDark(enabled) {
        this.themeService.toggleTheme(enabled);
    }
    resetTheme() {
        this.themeService.resetTheme();
    }
}
DarkToggleComponent.ɵfac = function DarkToggleComponent_Factory(t) { return new (t || DarkToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
DarkToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DarkToggleComponent, selectors: [["app-dark-toggle"]], decls: 16, vars: 12, consts: [[1, "inline-flex", "items-center"], [1, "cursor-pointer", "p-2", "inline-flex", "justify-between", "items-center", "transition", "duration-100", "ease-in-out", "bg-white", "dark:bg-gray-700", "dark:text-white", "hover:bg-gray-100", "dark:hover:bg-gray-600", "border", "border-gray-300", "dark:border-gray-600", "focus:outline-none", 3, "ngClass", "click"], [1, "absolute", "top-0", "left-0", "z-[-10]", "w-full", "h-full"], ["type", "radio", 1, "form-radio", "w-0", "h-0", "opacity-0", "pointer-events-none"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z", "clip-rule", "evenodd"], [1, "cursor-pointer", "p-2", "inline-flex", "justify-between", "items-center", "transition", "duration-100", "ease-in-out", "bg-white", "dark:bg-gray-700", "dark:text-white", "border", "border-gray-300", "dark:border-gray-600", "focus:outline-none", 3, "ngClass", "click"], ["fill-rule", "evenodd", "d", "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clip-rule", "evenodd"], ["d", "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"]], template: function DarkToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DarkToggleComponent_Template_label_click_1_listener() { return ctx.resetTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DarkToggleComponent_Template_label_click_6_listener() { return ctx.onToggleDark(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DarkToggleComponent_Template_label_click_11_listener() { return ctx.onToggleDark(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx.getCurrentTheme() === "system", ctx.getCurrentTheme() !== "system"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx.getCurrentTheme() === "light", ctx.getCurrentTheme() !== "light"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.getCurrentTheme() === "dark", ctx.getCurrentTheme() !== "dark"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], encapsulation: 2 });


/***/ }),

/***/ 5759:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/layout/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class FooterComponent {
    constructor() {
        this.today = Date.now();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-layout-footer"]], decls: 10, vars: 4, consts: [[1, "bg-indigo-200", "dark:bg-indigo-900", "dark:text-gray-200"], ["routerLink", "/", 1, "logo-font"], ["href", "https://www.github.com/blai30/", 1, "text-pink-900", "dark:text-pink-300"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Text Morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "blai30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx.today, "yyyy"), ". Project by ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 1255:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/layout/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dark_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-toggle.component */ 3731);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class HeaderComponent {
    constructor() {
        this.menuOpen = false;
    }
    ngOnInit() {
        // TODO: Initialize the user.
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-layout-header"]], decls: 9, vars: 0, consts: [[1, "block", "relative", "w-full", "p-2", "bg-indigo-200", "dark:bg-indigo-900"], [1, "flex", "justify-between", "items-center"], [1, "flex", "justify-between", "items-center", "space-x-6"], [1, "px-4", "inline-flex", "items-center", "space-x-2"], [1, "inline-block"], ["routerLink", "/about", "routerLinkActive", "bg-indigo-100 dark:bg-indigo-500", 1, "block", "px-3", "py-2", "transition", "duration-100", "ease-in-out", "rounded", "dark:text-white", "hover:bg-indigo-50", "dark:hover:bg-indigo-600"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-dark-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_dark_toggle_component__WEBPACK_IMPORTED_MODULE_0__.DarkToggleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 3207:
/*!***************************************************!*\
  !*** ./src/app/components/shared/layout/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkToggleComponent": () => (/* reexport safe */ _dark_toggle_component__WEBPACK_IMPORTED_MODULE_0__.DarkToggleComponent),
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent),
/* harmony export */   "SidebarComponent": () => (/* reexport safe */ _sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent)
/* harmony export */ });
/* harmony import */ var _dark_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-toggle.component */ 3731);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ 5759);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ 1255);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ 5425);






/***/ }),

/***/ 5425:
/*!***************************************************************!*\
  !*** ./src/app/components/shared/layout/sidebar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



const _c0 = function (a0) { return { hidden: a0 }; };
const _c1 = function (a0, a1) { return { block: a0, hidden: a1 }; };
class SidebarComponent {
    constructor() {
        this.open = false;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-layout-sidebar"]], decls: 39, vars: 10, consts: [[1, "md:flex", "md:flex-row", "w-full", "h-full"], [1, "w-full", "md:w-64", "text-gray-700", "bg-gray-100", "dark:text-gray-200", "dark:bg-gray-800"], [1, "block", "flex", "p-4", "items-center", "justify-between"], ["routerLink", "/", 1, "block", "flex", "px-2", "text-lg", "font-semibold", "tracking-widest", "text-gray-900", "uppercase", "rounded-lg", "dark:text-white", "focus:outline-none", "focus:shadow-outline"], [1, "text-indigo-800", "dark:text-indigo-300"], [1, "md:hidden", "focus:outline-none", "focus:shadow-outline", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-6", "h-6"], ["fill-rule", "evenodd", "d", "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule", "evenodd", 3, "ngClass"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd", 3, "ngClass"], [1, "md:block", "px-4", "pt-2", "pb-4", "md:pb-0", "md:overflow-y-auto", 3, "ngClass"], [1, "space-y-3"], ["routerLink", "/wordcase", "routerLinkActive", "bg-indigo-200 dark:bg-indigo-700", 1, "block", "flex", "items-center", "space-x-3", "px-3", "py-2", "transition", "duration-100", "ease-in-out", "text-sm", "font-semibold", "text-gray-900", "rounded-lg", "dark:hover:bg-indigo-900", "dark:focus:text-white", "dark:hover:text-white", "dark:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-indigo-100", "focus:outline-none", "focus:shadow-outline"], [1, "bi-type", "text-2xl"], ["routerLink", "/numbers", "routerLinkActive", "bg-indigo-200 dark:bg-indigo-700", 1, "block", "flex", "items-center", "space-x-3", "px-3", "py-2", "transition", "duration-100", "ease-in-out", "text-sm", "font-semibold", "text-gray-900", "rounded-lg", "dark:hover:bg-indigo-900", "dark:focus:text-white", "dark:hover:text-white", "dark:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-indigo-100", "focus:outline-none", "focus:shadow-outline"], [1, "bi-calculator-fill", "text-2xl"], [1, "cursor-not-allowed", "opacity-40"], ["routerLinkActive", "bg-indigo-200 dark:bg-indigo-700", 1, "block", "flex", "items-center", "space-x-3", "px-3", "py-2", "transition", "duration-100", "ease-in-out", "text-sm", "font-semibold", "text-gray-900", "rounded-lg", "dark:hover:bg-indigo-900", "dark:focus:text-white", "dark:hover:text-white", "dark:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-indigo-100", "focus:outline-none", "focus:shadow-outline"], [1, "bi-calendar3", "text-2xl"], [1, "bi-credit-card", "text-2xl"], ["routerLink", "/password", "routerLinkActive", "bg-indigo-200 dark:bg-indigo-700", 1, "block", "flex", "items-center", "space-x-3", "px-3", "py-2", "transition", "duration-100", "ease-in-out", "text-sm", "font-semibold", "text-gray-900", "rounded-lg", "dark:hover:bg-indigo-900", "dark:focus:text-white", "dark:hover:text-white", "dark:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-indigo-100", "focus:outline-none", "focus:shadow-outline"], [1, "bi-key", "text-2xl"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_8_listener() { return ctx.open = !ctx.open; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Word Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date and Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Password Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.open));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.open));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx.open, !ctx.open));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 4065:
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ 3207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_layout__WEBPACK_IMPORTED_MODULE_0__.DarkToggleComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_layout__WEBPACK_IMPORTED_MODULE_0__.DarkToggleComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _layout__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent] }); })();


/***/ }),

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 2443);


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
    onLoad($event) {
    }
    onError($event) {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 3, vars: 1, consts: [[1, "container", "mx-auto", "px-6", "py-4"], [1, "prose", "prose-lg", "prose-indigo", "max-w-none", "dark:prose-dark"], [3, "src", "load", "error"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function AboutComponent_Template_markdown_load_2_listener($event) { return ctx.onLoad($event); })("error", function AboutComponent_Template_markdown_error_2_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/markdown/about.md");
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent], encapsulation: 2 });


/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 3794);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 2443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);






class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule.forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule] }); })();


/***/ }),

/***/ 8778:
/*!**************************************!*\
  !*** ./src/app/pages/about/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* reexport safe */ _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent)
/* harmony export */ });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 3794);



/***/ }),

/***/ 8923:
/*!******************************************!*\
  !*** ./src/app/pages/not-found/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* reexport safe */ _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 9473);



/***/ }),

/***/ 9473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "prose"], [1, "dark:text-white"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 - PAGE NOT FOUND ! owo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 8294:
/*!****************************************!*\
  !*** ./src/app/pages/numbers/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumbersComponent": () => (/* reexport safe */ _numbers_component__WEBPACK_IMPORTED_MODULE_0__.NumbersComponent),
/* harmony export */   "WordMode": () => (/* reexport safe */ _numbers_component__WEBPACK_IMPORTED_MODULE_0__.WordMode)
/* harmony export */ });
/* harmony import */ var _numbers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers.component */ 8809);



/***/ }),

/***/ 8809:
/*!****************************************************!*\
  !*** ./src/app/pages/numbers/numbers.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordMode": () => (/* binding */ WordMode),
/* harmony export */   "NumbersComponent": () => (/* binding */ NumbersComponent)
/* harmony export */ });
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! number-to-words */ 4285);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! millify */ 2840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





const _c0 = function (a0, a1) { return { "bg-indigo-400 dark:bg-indigo-500 text-white": a0, "hover:bg-gray-100 dark:hover:bg-gray-600": a1 }; };
function NumbersComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NumbersComponent_label_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.selectedWordMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wordMode_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, wordMode_r1 === ctx_r0.selectedWordMode, wordMode_r1 !== ctx_r0.selectedWordMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", wordMode_r1)("ngModel", ctx_r0.selectedWordMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](wordMode_r1);
} }
const _c1 = function (a0) { return { "cursor-not-allowed": a0 }; };
var WordMode;
(function (WordMode) {
    WordMode["Unchanged"] = "Unchanged";
    WordMode["Ordinal"] = "Ordinal";
    WordMode["Words"] = "Words";
    WordMode["OrdinalWords"] = "Ordinal words";
    WordMode["RomanNumerals"] = "Roman numerals";
    WordMode["Metrics"] = "Metrics";
})(WordMode || (WordMode = {}));
class NumbersComponent {
    constructor() {
        this.inputText = 0;
        this.outputText = '';
        this.wordModes = [];
        this.selectedWordMode = WordMode.Unchanged;
    }
    ngOnInit() {
        this.wordModes = Object.values(WordMode);
    }
    onTransform() {
        if (!this.inputText && this.inputText !== 0) {
            return;
        }
        let text = this.inputText.toString();
        switch (this.selectedWordMode) {
            case WordMode.Ordinal:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toOrdinal(this.inputText);
                break;
            case WordMode.Words:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toWords(this.inputText);
                text = text.replace(/hundred /ig, 'hundred and ');
                break;
            case WordMode.OrdinalWords:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toWordsOrdinal(this.inputText);
                text = text.replace(/hundred /ig, 'hundred and ');
                break;
            case WordMode.RomanNumerals:
                text = this.toRoman(this.inputText);
                break;
            case WordMode.Metrics:
                text = (0,millify__WEBPACK_IMPORTED_MODULE_1__.default)(this.inputText);
                break;
            case WordMode.Unchanged:
            default:
                break;
        }
        this.outputText = text;
    }
    toRoman(input) {
        if (input < 1 || input > 3999) {
            return 'Input integer limited to 1 through 3,999';
        }
        const numerals = [
            // 1 - 9
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            // 10 - 90
            ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            // 100 - 900
            ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            // 1000 - 3000
            ['M', 'MM', 'MMM'],
        ];
        const digits = input.toString().split('');
        let position = digits.length - 1;
        return digits.reduce((roman, digit) => {
            if (digit !== '0') {
                roman += numerals[position][parseInt(digit) - 1];
            }
            position--;
            return roman;
        }, '');
    }
}
NumbersComponent.ɵfac = function NumbersComponent_Factory(t) { return new (t || NumbersComponent)(); };
NumbersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NumbersComponent, selectors: [["app-numbers"]], decls: 19, vars: 7, consts: [[1, "container", "mx-auto", "px-6", "py-4"], [1, "space-y-6"], [1, "block", "w-full"], [1, "dark:text-white"], ["type", "number", "inputmode", "decimal", "name", "inputText", "placeholder", "Number to transform", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "inline-flex"], [1, "grid", "grid-cols-2", "lg:grid-cols-3"], ["class", "cursor-pointer select-none px-4 py-2 block text-center justify-between items-center transition duration-100 ease-in-out dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 focus:outline-none", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "h-12", "transition", "duration-100", "ease-in-out", "font-semibold", "text-white", "bg-green-500", "hover:bg-green-700", "disabled:bg-green-500", "disabled:opacity-50", "focus:outline-none", 3, "ngClass", "disabled", "click"], ["name", "outputText", "rows", "4", "placeholder", "Result", "onclick", "this.focus();this.select()", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "cursor-pointer", "select-none", "px-4", "py-2", "block", "text-center", "justify-between", "items-center", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:text-white", "hover:bg-gray-100", "dark:hover:bg-gray-600", "border", "border-gray-300", "dark:border-gray-600", "focus:outline-none", 3, "ngClass"], [1, "absolute", "top-0", "left-0", "z-[-10]", "w-full", "h-full"], ["type", "radio", 1, "form-radio", "w-0", "h-0", "opacity-0", "pointer-events-none", 3, "value", "ngModel", "ngModelChange"]], template: function NumbersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Input text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NumbersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NumbersComponent_label_10_Template, 5, 7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NumbersComponent_Template_button_click_12_listener() { return ctx.onTransform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Transform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Output text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NumbersComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.outputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.wordModes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, !ctx.inputText && ctx.inputText !== 0))("disabled", !ctx.inputText && ctx.inputText !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.outputText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 4623:
/*!*************************************************!*\
  !*** ./src/app/pages/numbers/numbers.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumbersModule": () => (/* binding */ NumbersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _numbers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers.component */ 8809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class NumbersModule {
}
NumbersModule.ɵfac = function NumbersModule_Factory(t) { return new (t || NumbersModule)(); };
NumbersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NumbersModule });
NumbersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NumbersModule, { declarations: [_numbers_component__WEBPACK_IMPORTED_MODULE_0__.NumbersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 4340:
/*!*****************************************!*\
  !*** ./src/app/pages/password/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* reexport safe */ _password_component__WEBPACK_IMPORTED_MODULE_0__.PasswordComponent),
/* harmony export */   "WordMode": () => (/* reexport safe */ _password_component__WEBPACK_IMPORTED_MODULE_0__.WordMode)
/* harmony export */ });
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.component */ 5117);



/***/ }),

/***/ 5117:
/*!******************************************************!*\
  !*** ./src/app/pages/password/password.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordMode": () => (/* binding */ WordMode),
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! number-to-words */ 4285);
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! millify */ 2840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





const _c0 = function (a0, a1) { return { "bg-indigo-400 dark:bg-indigo-500 text-white": a0, "hover:bg-gray-100 dark:hover:bg-gray-600": a1 }; };
function PasswordComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PasswordComponent_label_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.selectedWordMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wordMode_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, wordMode_r1 === ctx_r0.selectedWordMode, wordMode_r1 !== ctx_r0.selectedWordMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", wordMode_r1)("ngModel", ctx_r0.selectedWordMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](wordMode_r1);
} }
const _c1 = function (a0) { return { "cursor-not-allowed": a0 }; };
var WordMode;
(function (WordMode) {
    WordMode["Unchanged"] = "Unchanged";
    WordMode["Ordinal"] = "Ordinal";
    WordMode["Words"] = "Words";
    WordMode["OrdinalWords"] = "Ordinal words";
    WordMode["RomanNumerals"] = "Roman numerals";
    WordMode["Metrics"] = "Metrics";
})(WordMode || (WordMode = {}));
class PasswordComponent {
    constructor() {
        this.inputText = 0;
        this.outputText = '';
        this.wordModes = [];
        this.selectedWordMode = WordMode.Unchanged;
    }
    ngOnInit() {
        this.wordModes = Object.values(WordMode);
    }
    onTransform() {
        if (!this.inputText && this.inputText !== 0) {
            return;
        }
        let text = this.inputText.toString();
        switch (this.selectedWordMode) {
            case WordMode.Ordinal:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toOrdinal(this.inputText);
                break;
            case WordMode.Words:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toWords(this.inputText);
                text = text.replace(/hundred /ig, 'hundred and ');
                break;
            case WordMode.OrdinalWords:
                text = number_to_words__WEBPACK_IMPORTED_MODULE_0__.toWordsOrdinal(this.inputText);
                text = text.replace(/hundred /ig, 'hundred and ');
                break;
            case WordMode.RomanNumerals:
                text = this.toRoman(this.inputText);
                break;
            case WordMode.Metrics:
                text = (0,millify__WEBPACK_IMPORTED_MODULE_1__.default)(this.inputText);
                break;
            case WordMode.Unchanged:
            default:
                break;
        }
        this.outputText = text;
    }
    toRoman(input) {
        if (input < 1 || input > 3999) {
            return 'Input integer limited to 1 through 3,999';
        }
        const numerals = [
            // 1 - 9
            ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            // 10 - 90
            ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            // 100 - 900
            ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            // 1000 - 3000
            ['M', 'MM', 'MMM'],
        ];
        const digits = input.toString().split('');
        let position = digits.length - 1;
        return digits.reduce((roman, digit) => {
            if (digit !== '0') {
                roman += numerals[position][parseInt(digit) - 1];
            }
            position--;
            return roman;
        }, '');
    }
}
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(); };
PasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["app-password"]], decls: 19, vars: 7, consts: [[1, "container", "mx-auto", "px-6", "py-4"], [1, "space-y-6"], [1, "block", "w-full"], [1, "dark:text-white"], ["type", "number", "inputmode", "decimal", "name", "inputText", "placeholder", "Number to transform", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "inline-flex"], [1, "grid", "grid-cols-2", "lg:grid-cols-3"], ["class", "cursor-pointer select-none px-4 py-2 block text-center justify-between items-center transition duration-100 ease-in-out dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 focus:outline-none", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "h-12", "transition", "duration-100", "ease-in-out", "font-semibold", "text-white", "bg-green-500", "hover:bg-green-700", "disabled:bg-green-500", "disabled:opacity-50", "focus:outline-none", 3, "ngClass", "disabled", "click"], ["name", "outputText", "rows", "4", "placeholder", "Result", "onclick", "this.focus();this.select()", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "cursor-pointer", "select-none", "px-4", "py-2", "block", "text-center", "justify-between", "items-center", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:text-white", "hover:bg-gray-100", "dark:hover:bg-gray-600", "border", "border-gray-300", "dark:border-gray-600", "focus:outline-none", 3, "ngClass"], [1, "absolute", "top-0", "left-0", "z-[-10]", "w-full", "h-full"], ["type", "radio", 1, "form-radio", "w-0", "h-0", "opacity-0", "pointer-events-none", 3, "value", "ngModel", "ngModelChange"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Input text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PasswordComponent_label_10_Template, 5, 7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordComponent_Template_button_click_12_listener() { return ctx.onTransform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Transform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Output text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PasswordComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.outputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.wordModes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, !ctx.inputText && ctx.inputText !== 0))("disabled", !ctx.inputText && ctx.inputText !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.outputText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 2302:
/*!***************************************************!*\
  !*** ./src/app/pages/password/password.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordModule": () => (/* binding */ PasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.component */ 5117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class PasswordModule {
}
PasswordModule.ɵfac = function PasswordModule_Factory(t) { return new (t || PasswordModule)(); };
PasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PasswordModule });
PasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PasswordModule, { declarations: [_password_component__WEBPACK_IMPORTED_MODULE_0__.PasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 1957:
/*!******************************************!*\
  !*** ./src/app/pages/word-case/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextCase": () => (/* reexport safe */ _word_case_component__WEBPACK_IMPORTED_MODULE_0__.TextCase),
/* harmony export */   "WordCaseComponent": () => (/* reexport safe */ _word_case_component__WEBPACK_IMPORTED_MODULE_0__.WordCaseComponent)
/* harmony export */ });
/* harmony import */ var _word_case_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-case.component */ 3735);



/***/ }),

/***/ 3735:
/*!********************************************************!*\
  !*** ./src/app/pages/word-case/word-case.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextCase": () => (/* binding */ TextCase),
/* harmony export */   "WordCaseComponent": () => (/* binding */ WordCaseComponent)
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 1196);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




const _c0 = function (a0, a1) { return { "bg-indigo-400 dark:bg-indigo-500 text-white": a0, "hover:bg-gray-100 dark:hover:bg-gray-600": a1 }; };
function WordCaseComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_label_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectedCaseType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const textCase_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, textCase_r1 === ctx_r0.selectedCaseType, textCase_r1 !== ctx_r0.selectedCaseType));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", textCase_r1)("ngModel", ctx_r0.selectedCaseType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](textCase_r1);
} }
const _c1 = function (a0, a1) { return { "opacity-40": a0, "cursor-not-allowed": a1 }; };
const _c2 = function (a0) { return { "cursor-not-allowed": a0 }; };
var TextCase;
(function (TextCase) {
    TextCase["Unchanged"] = "Unchanged";
    TextCase["UpperCase"] = "UPPER CASE";
    TextCase["LowerCase"] = "lower case";
    TextCase["SentenceCase"] = "Sentence case";
    TextCase["TitleCase"] = "Title Case";
    TextCase["CamelCase"] = "camelCase";
    TextCase["PascalCase"] = "PascalCase";
    TextCase["SnakeCase"] = "snake_case";
    TextCase["KebabCase"] = "kebab-case";
    TextCase["RandomCase"] = "rAnDOm caSe";
})(TextCase || (TextCase = {}));
class WordCaseComponent {
    constructor() {
        this.inputText = '';
        this.outputText = '';
        this.textCases = [];
        this.selectedCaseType = TextCase.Unchanged;
        this.trimWhitespace = true;
        this.clapItUp = false;
        this.charLimit = null;
    }
    ngOnInit() {
        this.textCases = Object.values(TextCase);
    }
    isClappable() {
        switch (this.selectedCaseType) {
            case TextCase.CamelCase:
            case TextCase.PascalCase:
            case TextCase.SnakeCase:
            case TextCase.KebabCase:
                this.clapItUp = false;
                return false;
            default:
                return true;
        }
    }
    onTransform() {
        if (!this.inputText) {
            return;
        }
        let text = this.inputText;
        if (this.trimWhitespace) {
            // Trim trailing whitespace and shrink excess whitespace between words.
            text = text.trim().replace(/\s+/g, ' ');
        }
        switch (this.selectedCaseType) {
            case TextCase.UpperCase:
                text = text.toUpperCase();
                break;
            case TextCase.LowerCase:
                text = text.toLowerCase();
                break;
            case TextCase.SentenceCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.capitalize(text, true);
                break;
            case TextCase.TitleCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.titleCase(text);
                break;
            case TextCase.CamelCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.camelCase(text);
                break;
            case TextCase.PascalCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.capitalize(voca__WEBPACK_IMPORTED_MODULE_0__.camelCase(text));
                break;
            case TextCase.SnakeCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.snakeCase(text);
                break;
            case TextCase.KebabCase:
                text = voca__WEBPACK_IMPORTED_MODULE_0__.kebabCase(text);
                break;
            case TextCase.RandomCase:
                text = this.randomCase(text);
                break;
            case TextCase.Unchanged:
            default:
                break;
        }
        if (this.clapItUp) {
            text = text.replace(/ /g, ' 👏 ');
        }
        if (this.charLimit) {
            text = text.slice(0, this.charLimit);
        }
        this.outputText = text;
    }
    randomCase(text) {
        let result = '';
        do {
            const chars = [...text];
            for (const c of chars) {
                const next = Math.floor(Math.random() * 2);
                result += next === 0 ? c.toUpperCase() : c.toLowerCase();
            }
        } while (result == text);
        return result;
    }
}
WordCaseComponent.ɵfac = function WordCaseComponent_Factory(t) { return new (t || WordCaseComponent)(); };
WordCaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WordCaseComponent, selectors: [["app-home"]], decls: 34, vars: 18, consts: [[1, "container", "mx-auto", "px-6", "py-4"], [1, "space-y-6"], [1, "block", "w-full"], [1, "dark:text-white"], ["name", "inputText", "rows", "4", "placeholder", "Text to transform", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "inline-flex"], [1, "grid", "grid-cols-2", "lg:grid-cols-5"], ["class", "cursor-pointer select-none px-4 py-2 block text-center justify-between items-center transition duration-100 ease-in-out dark:bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 focus:outline-none", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "inline-flex", "items-center", "dark:text-white"], ["type", "checkbox", 1, "form-checkbox", "cursor-pointer", "w-8", "h-8", "transition", "duration-100", "ease-in-out", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "ml-4"], [1, "cursor-pointer", "inline-flex", "items-center", "dark:text-white", 3, "ngClass"], ["type", "checkbox", 1, "form-checkbox", "cursor-pointer", "w-8", "h-8", "transition", "duration-100", "ease-in-out", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngClass", "disabled", "ngModelChange"], ["type", "number", "placeholder", "No limit", "min", "0", 1, "form-input", "transition", "duration-100", "ease-in-out", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "w-full", "h-12", "transition", "duration-100", "ease-in-out", "font-semibold", "text-white", "bg-green-500", "hover:bg-green-700", "disabled:bg-green-500", "disabled:opacity-50", "focus:outline-none", 3, "ngClass", "disabled", "click"], ["name", "outputText", "rows", "4", "placeholder", "Result", "onclick", "this.focus();this.select()", 1, "form-textarea", "w-full", "mt-2", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:placeholder-gray-300", "border-gray-300", "dark:border-gray-600", "dark:text-white", "focus:bg-gray-100", "hover:bg-gray-100", "dark:focus:bg-gray-600", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring", "focus:ring-offset-0", "focus:ring-indigo-500", 3, "ngModel", "ngModelChange"], [1, "cursor-pointer", "select-none", "px-4", "py-2", "block", "text-center", "justify-between", "items-center", "transition", "duration-100", "ease-in-out", "dark:bg-gray-700", "dark:text-white", "hover:bg-gray-100", "dark:hover:bg-gray-600", "border", "border-gray-300", "dark:border-gray-600", "focus:outline-none", 3, "ngClass"], [1, "absolute", "top-0", "left-0", "z-[-10]", "w-full", "h-full"], ["type", "radio", 1, "form-radio", "w-0", "h-0", "opacity-0", "pointer-events-none", 3, "value", "ngModel", "ngModelChange"]], template: function WordCaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Input text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.inputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WordCaseComponent_label_10_Template, 5, 7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_Template_input_ngModelChange_13_listener($event) { return ctx.trimWhitespace = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Trim whitespace");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_Template_input_ngModelChange_18_listener($event) { return ctx.clapItUp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Clap \uD83D\uDC4F it \uD83D\uDC4F up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_Template_input_ngModelChange_23_listener($event) { return ctx.charLimit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Character limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WordCaseComponent_Template_button_click_27_listener() { return ctx.onTransform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Transform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Output text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WordCaseComponent_Template_textarea_ngModelChange_33_listener($event) { return ctx.outputText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.textCases);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.trimWhitespace);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, !ctx.isClappable(), !ctx.isClappable()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.clapItUp)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, !ctx.isClappable()))("disabled", !ctx.isClappable());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.charLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, !ctx.inputText))("disabled", !ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.outputText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 166:
/*!*****************************************************!*\
  !*** ./src/app/pages/word-case/word-case.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordCaseModule": () => (/* binding */ WordCaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _word_case_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-case.component */ 3735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class WordCaseModule {
}
WordCaseModule.ɵfac = function WordCaseModule_Factory(t) { return new (t || WordCaseModule)(); };
WordCaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WordCaseModule });
WordCaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WordCaseModule, { declarations: [_word_case_component__WEBPACK_IMPORTED_MODULE_0__.WordCaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectivePreloadingStrategyService": () => (/* reexport safe */ _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_0__.SelectivePreloadingStrategyService)
/* harmony export */ });
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ 9851);



/***/ }),

/***/ 9851:
/*!*******************************************************************!*\
  !*** ./src/app/services/selective-preloading-strategy.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectivePreloadingStrategyService": () => (/* binding */ SelectivePreloadingStrategyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class SelectivePreloadingStrategyService {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data.preload) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
}
SelectivePreloadingStrategyService.ɵfac = function SelectivePreloadingStrategyService_Factory(t) { return new (t || SelectivePreloadingStrategyService)(); };
SelectivePreloadingStrategyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SelectivePreloadingStrategyService, factory: SelectivePreloadingStrategyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ThemeService {
    constructor() {
        this.initTheme();
        // Watch for change in system theme preference.
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            }
            else {
                document.documentElement.classList.remove('dark');
            }
        });
    }
    getCurrentTheme() {
        if ('theme' in localStorage) {
            return localStorage.theme;
        }
        return 'system';
    }
    initTheme() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }
    toggleTheme(enabled) {
        if (enabled) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
    resetTheme() {
        localStorage.removeItem('theme');
        this.initTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map