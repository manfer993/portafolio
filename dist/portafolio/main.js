(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//rutas



var routes = [
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"] },
    { path: 'jobs', component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"] },
    // cualquier otro path sera redireccionado al portafolio
    { path: '**', pathMatch: 'full', redirectTo: 'perfil' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"content\" role=\"content\">\n  <router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1920px) {\n  .content {\n    min-height: 92.5vh;\n    padding: 64px 12rem 0px; } }\n\n@media (max-width: 1919px) {\n  .content {\n    min-height: 90vh;\n    padding: 64px 12rem 0px; } }\n\n@media (max-width: 1366px) {\n  .content {\n    min-height: 88.8vh;\n    padding: 64px 10rem 0px; } }\n\n@media (max-width: 945px) {\n  .content {\n    min-height: 86vh;\n    padding: 64px 6rem 0px; } }\n\n@media (max-width: 768px) {\n  .content {\n    min-height: 80vh;\n    padding: 64px 3rem 0px; } }\n\n@media (max-width: 425px) {\n  .content {\n    min-height: 78vh;\n    padding: 64px 1rem 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtbXVub3pnXFxEZXNrdG9wXFxnaXRodWJcXHBvcnRhZm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJO0lBQ0ksbUJBQWtCO0lBQ2xCLHdCQUF1QixFQUMxQixFQUFBOztBQUVMO0VBQ0k7SUFDSSxpQkFBZ0I7SUFDaEIsd0JBQXVCLEVBQzFCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQix3QkFBdUIsRUFDMUIsRUFBQTs7QUFFTDtFQUNJO0lBQ0ksaUJBQWdCO0lBQ2hCLHVCQUFzQixFQUN6QixFQUFBOztBQUdMO0VBQ0k7SUFDSSxpQkFBZ0I7SUFDaEIsdUJBQXNCLEVBQ3pCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLGlCQUFnQjtJQUNoQix1QkFBc0IsRUFDekIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Nhc3MvdmFyaWFibGVzJztcclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAuY29udGVudHsgICAgXHJcbiAgICAgICAgbWluLWhlaWdodDogOTIuNXZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDY0cHggMTJyZW0gMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgIC5jb250ZW50eyAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDY0cHggMTJyZW0gMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIC5jb250ZW50eyAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiA4OC44dmg7XHJcbiAgICAgICAgcGFkZGluZzogNjRweCAxMHJlbSAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NXB4KSB7XHJcbiAgICAuY29udGVudHsgICAgXHJcbiAgICAgICAgbWluLWhlaWdodDogODZ2aDtcclxuICAgICAgICBwYWRkaW5nOiA2NHB4IDZyZW0gMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50eyAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDY0cHggM3JlbSAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuY29udGVudHsgICAgXHJcbiAgICAgICAgbWluLWhlaWdodDogNzh2aDtcclxuICAgICAgICBwYWRkaW5nOiA2NHB4IDFyZW0gMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portafolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, PizzaPartyAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyAppModule", function() { return PizzaPartyAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _studies_studies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./studies/studies.component */ "./src/app/studies/studies.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Angular Material Modules










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
                _studies_studies_component__WEBPACK_IMPORTED_MODULE_12__["StudiesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = /** @class */ (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Empleos -->\r\n<div class=\"empleos\">\r\n  <ul class=\"timeline\">\r\n    <li class=\"event\">\r\n      <p class=\"dates\">Actualidad Mayo/2018</p>\r\n      <h1 class=\"position\">QA funcional</h1>\r\n      <h2 class=\"company\">Stefanini Software & Tecnologia</h2>\r\n      <p class=\"description\">\r\n        Diseñar escenarios de prueba, diseñar casos de prueba, ejecutar casos de prueba, realizar la documentación\r\n        pertinente, reportar defectos, administrar defectos, brindar soporte a la revisión de la aplicación por parte\r\n        del\r\n        cliente basado en el marco de trabajo <b>SCRUM</b>.<br><br>\r\n        Diseñar pruebas automatizadas utilizando la herramienta Selenium webdriver con JAVA para el proyecto regional\r\n        de\r\n        Claims-Web Colombia, Argentina y Mexico.\r\n      </p>\r\n    </li>\r\n    <li class=\"event\">\r\n      <p class=\"dates\">Mayo/2018 Septiembre/2016</p>\r\n      <h1 class=\"position\">Product Owner / QA Funcional</h1>\r\n      <h2 class=\"company\">Exsis Software & Soluciones</h2>\r\n      <p class=\"description\">\r\n        Interpretar, diseñar y priorizar los requerimientos del producto, diseñar historias de usuario, mockups y\r\n        wireframes basado en el marco de trabajo <b>SCRUM</b>.<br><br>\r\n        Coordinar las pruebas funcionales, diseñar escenarios de prueba, diseñar casos de prueba, ejecutar casos de\r\n        prueba, evaluar resultados obtenidos, realizar la documentación pertinente, reportar defectos, administrar\r\n        defectos, brindar soporte a la revisión de la aplicación por parte del cliente.<br><br>\r\n        Realizar el análisis, validación, verificación de los artefactos y su pertinente documentación para el proyecto\r\n        de Virtual Clinic basado en metodología <b>CMMI</b>.<br><br>\r\n        Colaborar en el lanzamiento de la plataforma Virtual Clinic y ser parte del equipo auditor en dos auditorias\r\n        internas de las normas <b>ISO 27001:2013</b> e <b>ISO 9001:2015</b>.\r\n      </p>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/jobs/jobs.component.scss":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empleos {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.timeline {\n  border-left: 8px solid #3700B3;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  margin: 10px 0px 10px 50px;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 1.4em;\n  padding: 20px;\n  list-style: none;\n  text-align: left; }\n\n.position {\n  font-size: 1.3em;\n  color: #000000; }\n\n.company {\n  font-size: 1em;\n  color: #666666;\n  -webkit-margin-after: 0.3em;\n          margin-block-end: 0.3em;\n  -webkit-margin-before: -0.5em;\n          margin-block-start: -0.5em; }\n\n.description {\n  text-align: justify;\n  color: #000000;\n  padding-top: 15px; }\n\n.event {\n  padding-bottom: 25px;\n  margin-bottom: 25px;\n  position: relative; }\n\n.event:last-of-type {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border: none; }\n\n.event:after {\n  position: absolute;\n  display: block;\n  top: 0; }\n\n.dates {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: -177.5px;\n  color: #000000;\n  text-align: right;\n  font-size: 16px;\n  max-width: 135px;\n  text-align: right; }\n\n.event:after {\n  box-shadow: 0 0 0 6px #3700B3;\n  left: -30px;\n  background: #f9f7f4;\n  border-radius: 50%;\n  height: 11px;\n  width: 11px;\n  content: \"\";\n  top: 5px; }\n\n@media (max-width: 945px) {\n  .timeline {\n    margin: 10px auto; }\n  .dates {\n    left: -5px;\n    top: -22px;\n    max-width: 450px;\n    font-size: 13px;\n    text-align: left; }\n  .position {\n    font-size: 1.15em; }\n  .company {\n    font-size: 14px; } }\n\n@media (max-width: 768px) {\n  .dates {\n    left: -5px;\n    top: -20px;\n    max-width: 450px;\n    font-size: 13px;\n    text-align: left; }\n  .position {\n    font-size: 1.15em; }\n  .company {\n    font-size: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXGFwcFxcam9ic1xcam9icy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvam9icy9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSwrQkNMbUI7RURNbkIsZ0NBQStCO0VBQy9CLDZCQUE0QjtFQUM1QiwyQkFBMEI7RUFDMUIsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsZUNWc0IsRURXekI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsZUNic0I7RURjdEIsNEJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2Qiw4QkFBMEI7VUFBMUIsMkJBQTBCLEVBQzdCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGVDcEJzQjtFRHFCdEIsa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0kscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGFBQVksRUFDZjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsT0FBTSxFQUNUOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxPQUFNO0VBQ04sZUFBYztFQUNkLGVDM0NzQjtFRDRDdEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLDhCQzFEbUI7RUQyRG5CLFlBQVc7RUFDWCxvQkNoRHFCO0VEaURyQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVc7RUFDWCxZQUFXO0VBQ1gsU0FBUSxFQUNYOztBQUNEO0VBQ0k7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUNJLFdBQVU7SUFDVixXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBQ0Q7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUNJLGdCQUFlLEVBQ2xCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLFdBQVU7SUFDVixXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBQ0Q7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUNJLGdCQUFlLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XHJcbi5lbXBsZW9ze1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4udGltZWxpbmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBvc2l0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGNvbG9yOiAkdGV4dC10aGlyZC1jb2xvcjtcclxufVxyXG4uY29tcGFueXtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICR0ZXh0LWZvdXJkLWNvbG9yO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC4zZW07XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC0wLjVlbTtcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgY29sb3I6ICR0ZXh0LXRoaXJkLWNvbG9yO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmV2ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZXZlbnQ6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZXZlbnQ6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLmRhdGVze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTc3LjVweDtcclxuICAgIGNvbG9yOiAkdGV4dC10aGlyZC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5ldmVudDphZnRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA2cHggJHByaW1hcnktY29sb3I7XHJcbiAgICBsZWZ0OiAtMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgd2lkdGg6IDExcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiA1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NXB4KSB7XHJcbiAgICAudGltZWxpbmV7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuZGF0ZXN7XHJcbiAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAucG9zaXRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kYXRlc3tcclxuICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5wb3NpdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgICB9XHJcbiAgICAuY29tcGFueSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59IiwiLy9EZWZpbmljaW9uIGRlIGNvbG9yZXNcclxuJHByaW1hcnktY29sb3I6ICMzNzAwQjM7XHJcbiRzZWNvbmQtY29sb3I6ICMwMTg3ODY7XHJcbiR0aGlyZC1jb2xvcjojQjAwMDIwO1xyXG4kZm91ci1jb2xvcjojZjA3YjA1O1xyXG5cclxuLy9Db2xvcmVzIHBhcmEgdGV4dG9zXHJcbiR0ZXh0LWZpcnN0LWNvbG9yOiNkMWQxZDE7XHJcbiR0ZXh0LXNlY29uZC1jb2xvcjogI2ZmZmZmZjtcclxuJHRleHQtdGhpcmQtY29sb3I6ICMwMDAwMDA7XHJcbiR0ZXh0LWZvdXJkLWNvbG9yOiAjNjY2NjY2O1xyXG5cclxuLy9Db2xvciBkZSBmb25kb1xyXG4kYmFja2dyb3VuZC1jb2xvcjojZjlmN2Y0O1xyXG4kYmFja2dyb3VuZC1zY3JvbGwtY29sb3I6I2Y5ZjdmNDtcclxuJHNjcm9sbC1jb2xvcjojNjE2MTYxO1xyXG5cclxuJGVycm9yLWNvbG9yOiAjZTcyZjM1O1xyXG4kaW5mby1jb2xvcjojZmRjMTMwO1xyXG4kc3VjY2Vzcy1jb2xvcjojNGU5NzAwO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
        this.fecha = "Actualidad Mayo/2018";
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.scss */ "./src/app/jobs/jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.component.html":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sobre mi</h1>\r\n<app-profile></app-profile>\r\n<h1>Experiencia</h1>\r\n<app-jobs></app-jobs>\r\n<h1>Informacion academica</h1>\r\n<app-studies></app-studies>\r\n<h1>Habilidades</h1>\r\n<app-skills></app-skills>\r\n"

/***/ }),

/***/ "./src/app/perfil/perfil.component.scss":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/perfil/perfil.component.ts":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/perfil/perfil.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- mi perfil -->\r\n<div class=\"row perfil\">\r\n  <div class=\"col-xs-6 col-sm-4 col-lg-4\">\r\n    <a>\r\n      <img class=\"own-image\" src=\"assets/images/iconos/phone-icon.svg\">\r\n    </a>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-8 col-lg-8 \">\r\n    <p class=\"description\" id=\"pPersonalDescription\">\r\n      <!-- Diseñador gráfico y web freelance desde 2016, momento desde el cual capitalizo mi tiempo aprendiendo sobre\r\n      nuevas tecnologías y lenguajes de programación.Cuento con sólidos conocimientos en HTML y CSS principalmente,\r\n      junto con fundamentos básicos e intermedios de JavaScript.<br><br>\r\n      Motivado a crecer profesionalmente, busco formar parte de una organización que me permita explotar mis\r\n      habilidades y potenciarlas. Adaptado a entornos dinámicos, hábil para ordenar, planificar, comunicar,\r\n      trabajar colaborativamente y bajo metodologías agiles, y establecer relaciones interpersonales. -->\r\n      <!-- {{texto}} -->\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".perfil {\n  padding-bottom: 10px; }\n\n.description {\n  text-align: justify;\n  color: #000000;\n  padding-top: 15px; }\n\n.own-image {\n  width: 160px;\n  margin-left: auto;\n  margin-right: auto;\n  height: 200px;\n  display: flex;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLG9CQUFtQjtFQUNuQixlQ0NzQjtFREF0QixrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsY0FBYTtFQUNiLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcclxuXHJcbi5wZXJmaWx7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGNvbG9yOiAkdGV4dC10aGlyZC1jb2xvcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5vd24taW1hZ2V7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSIsIi8vRGVmaW5pY2lvbiBkZSBjb2xvcmVzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMzcwMEIzO1xyXG4kc2Vjb25kLWNvbG9yOiAjMDE4Nzg2O1xyXG4kdGhpcmQtY29sb3I6I0IwMDAyMDtcclxuJGZvdXItY29sb3I6I2YwN2IwNTtcclxuXHJcbi8vQ29sb3JlcyBwYXJhIHRleHRvc1xyXG4kdGV4dC1maXJzdC1jb2xvcjojZDFkMWQxO1xyXG4kdGV4dC1zZWNvbmQtY29sb3I6ICNmZmZmZmY7XHJcbiR0ZXh0LXRoaXJkLWNvbG9yOiAjMDAwMDAwO1xyXG4kdGV4dC1mb3VyZC1jb2xvcjogIzY2NjY2NjtcclxuXHJcbi8vQ29sb3IgZGUgZm9uZG9cclxuJGJhY2tncm91bmQtY29sb3I6I2Y5ZjdmNDtcclxuJGJhY2tncm91bmQtc2Nyb2xsLWNvbG9yOiNmOWY3ZjQ7XHJcbiRzY3JvbGwtY29sb3I6IzYxNjE2MTtcclxuXHJcbiRlcnJvci1jb2xvcjogI2U3MmYzNTtcclxuJGluZm8tY29sb3I6I2ZkYzEzMDtcclxuJHN1Y2Nlc3MtY29sb3I6IzRlOTcwMDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        var description = "Diseñador gráfico y web freelance desde 2016, momento desde el cual capitalizo mi tiempo aprendiendo sobre nuevas tecnologías y lenguajes de programación.Cuento con sólidos conocimientos en HTML y CSS principalmente, junto con fundamentos básicos e intermedios de <b>JavaScript</b>. <br/><br/>Motivado a crecer profesionalmente, busco formar parte de una organización que me permita explotar mis habilidades y potenciarlas. Adaptado a entornos dinámicos, hábil para ordenar, planificar, comunicar, trabajar colaborativamente y bajo metodologías agiles, y establecer relaciones interpersonales.";
        window.onload = function what() {
            document.getElementById('pPersonalDescription').innerHTML = description;
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"row social-networks\">\r\n        <div class=\"col-md-4 col-xs-12\">\r\n            <a class=\"social-logo\">\r\n                <img class=\"icon\" src=\"assets/images/iconos/phone-icon.svg\">\r\n            </a>\r\n            <span class=\"social-text\">\r\n                (+57) 313 4729662\r\n            </span>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-12\">\r\n            <a class=\"social-logo\" href=\"mailto:manfer93@gmial.com\">\r\n                <img class=\"icon mail\" src=\"assets/images/iconos/mail-icon.svg\">\r\n            </a>\r\n            <a class=\"social-text\" href=\"mailto:manfer93@gmial.com\">\r\n                manfer93@gmail.com\r\n            </a>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-12\">\r\n            <a class=\"social-logo\" href=\"https://www.linkedin.com/in/manuel-fdo-munoz\">\r\n                <img class=\"icon linkedin\" src=\"assets/images/iconos/linkedin-icon.svg\">\r\n            </a>\r\n            <a class=\"social-text\" href=\"https://www.linkedin.com/in/manuel-fdo-munoz\">\r\n                manuel-fdo-munoz\r\n            </a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: block;\n  background-color: #018786;\n  color: #000000;\n  padding: .2em 0; }\n\n.social-text {\n  text-decoration: none;\n  color: #000000; }\n\na.social-text:hover {\n  color: #d1d1d1; }\n\n.icon {\n  padding-right: 16px;\n  width: 40px;\n  display: block; }\n\n.social-networks {\n  height: 55px;\n  width: 100%;\n  margin-right: 0px;\n  margin-left: 0px;\n  display: flex;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center; }\n\n.col-md-4 {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center; }\n\n.mail:hover {\n  content: url('mail-white-icon.svg');\n  width: 40px;\n  padding-right: 16px; }\n\n.linkedin:hover {\n  content: url('linkedin-white-icon.svg');\n  width: 40px;\n  padding-right: 16px; }\n\n@media (max-width: 595px) {\n  .social-networks {\n    display: contents; }\n  .col-xs-12 {\n    margin: 10px auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGVBQWM7RUFDZCwwQkNGcUI7RURHckIsZUNJeUI7RURIekIsZ0JBQWUsRUFDZjs7QUFDRDtFQUNDLHNCQUFxQjtFQUNyQixlQ0R5QixFREV6Qjs7QUFDRDtFQUNDLGVDTndCLEVET3hCOztBQUNEO0VBQ0ksb0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxlQUFjLEVBQ2pCOztBQUNEO0VBQ0MsYUFBVztFQUNYLFlBQVc7RUFDWCxrQkFBaUI7RUFDZCxpQkFBZ0I7RUFHbkIsY0FBWTtFQUNaLG9CQUFtQjtFQUNuQix5QkFBdUI7RUFDdkIsc0JBQW9CLEVBQ3BCOztBQUNEO0VBQ0MsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsd0JBQXNCLEVBQ3RCOztBQUNEO0VBQ0Msb0NBQWlFO0VBQ2pFLFlBQVc7RUFDWCxvQkFBbUIsRUFDbkI7O0FBQ0Q7RUFDQyx3Q0FBcUU7RUFDckUsWUFBVztFQUNYLG9CQUFtQixFQUNuQjs7QUFDRDtFQUNDO0lBQ0Msa0JBQWlCLEVBQ2pCO0VBQ0Q7SUFDQyxrQkFBaUIsRUFDakIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xyXG5cclxuZm9vdGVye1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmQtY29sb3I7XHJcblx0Y29sb3I6ICR0ZXh0LXRoaXJkLWNvbG9yO1xyXG5cdHBhZGRpbmc6IC4yZW0gMDtcclxufVxyXG4uc29jaWFsLXRleHR7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAkdGV4dC10aGlyZC1jb2xvcjtcclxufVxyXG5hLnNvY2lhbC10ZXh0OmhvdmVye1xyXG5cdGNvbG9yOiAkdGV4dC1maXJzdC1jb2xvcjtcclxufVxyXG4uaWNvbntcclxuICAgIHBhZGRpbmctcmlnaHQ6MTZweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNvY2lhbC1uZXR3b3JrcyB7XHJcblx0aGVpZ2h0OjU1cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG5cdGRpc3BsYXk6LXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTotbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtd2Via2l0LWJveC1wYWNrOmNlbnRlcjtcclxuXHQtbXMtZmxleC1wYWNrOmNlbnRlcjtcdFxyXG59XHJcbi5jb2wtbWQtNCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbi5tYWlsOmhvdmVye1xyXG5cdGNvbnRlbnQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm9zL21haWwtd2hpdGUtaWNvbi5zdmdcIik7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4ubGlua2VkaW46aG92ZXJ7XHJcblx0Y29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ub3MvbGlua2VkaW4td2hpdGUtaWNvbi5zdmdcIik7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTk1cHgpIHtcclxuXHQuc29jaWFsLW5ldHdvcmtze1xyXG5cdFx0ZGlzcGxheTogY29udGVudHM7XHJcblx0fVxyXG5cdC5jb2wteHMtMTIge1xyXG5cdFx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0fVxyXG59IiwiLy9EZWZpbmljaW9uIGRlIGNvbG9yZXNcclxuJHByaW1hcnktY29sb3I6ICMzNzAwQjM7XHJcbiRzZWNvbmQtY29sb3I6ICMwMTg3ODY7XHJcbiR0aGlyZC1jb2xvcjojQjAwMDIwO1xyXG4kZm91ci1jb2xvcjojZjA3YjA1O1xyXG5cclxuLy9Db2xvcmVzIHBhcmEgdGV4dG9zXHJcbiR0ZXh0LWZpcnN0LWNvbG9yOiNkMWQxZDE7XHJcbiR0ZXh0LXNlY29uZC1jb2xvcjogI2ZmZmZmZjtcclxuJHRleHQtdGhpcmQtY29sb3I6ICMwMDAwMDA7XHJcbiR0ZXh0LWZvdXJkLWNvbG9yOiAjNjY2NjY2O1xyXG5cclxuLy9Db2xvciBkZSBmb25kb1xyXG4kYmFja2dyb3VuZC1jb2xvcjojZjlmN2Y0O1xyXG4kYmFja2dyb3VuZC1zY3JvbGwtY29sb3I6I2Y5ZjdmNDtcclxuJHNjcm9sbC1jb2xvcjojNjE2MTYxO1xyXG5cclxuJGVycm9yLWNvbG9yOiAjZTcyZjM1O1xyXG4kaW5mby1jb2xvcjojZmRjMTMwO1xyXG4kc3VjY2Vzcy1jb2xvcjojNGU5NzAwO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <mat-toolbar class=\"menu mat-elevation-z8\">\r\n        <!-- <mat-icon>assignment_ind</mat-icon> -->\r\n        <div fxShow=\"true\" fxHide.lt-md>\r\n            <img alt=\"profile\" class=\"profile-logo\" src=\"assets/images/iconos/user-icon.svg\">\r\n        </div>\r\n        <div fxShow=\"true\" fxHide.lt-md>\r\n            <ul class=\"nav-list\" id=\"nav-perfil\">\r\n                <li class=\"nav-item\" [ngClass]=\"{'active': (ruta === '/perfil')}\">\r\n                    <a href=\"/perfil\" class=\"nav-link\">Perfil</a>\r\n                </li>\r\n                <li class=\"nav-item\" [ngClass]=\"{'active': (ruta === '/skills')}\">\r\n                    <a href=\"/skills\" class=\"nav-link\">Habilidades</a>\r\n                </li>\r\n                <li class=\"nav-item\" [ngClass]=\"{'active': (ruta === '/jobs')}\">\r\n                    <a href=\"/jobs\" class=\"nav-link\">Experiencia</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <span class=\"flex-spacer\" fxShow=\"true\" fxHide.lt-md></span>\r\n        <div fxShow=\"true\" fxHide.gt-sm>\r\n            <img alt=\"profile\" class=\"profile-logo-responsive\" src=\"assets/images/iconos/user-icon.svg\">\r\n        </div>\r\n        <span class=\"name\">Manuel Fernando Muñoz</span>\r\n        <span class=\"flex-spacer\" fxShow=\"true\" fxHide.gt-sm></span>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"appMenu\" fxShow=\"true\" fxHide.gt-sm>\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n    </mat-toolbar>\r\n    <mat-menu #appMenu=\"matMenu\" class=\"menu-list\">\r\n        <button mat-menu-item [ngClass]=\"{'active': (ruta === '/perfil')}\" onclick=\"window.location.href='/perfil'\">\r\n            Perfil\r\n        </button>\r\n        <button mat-menu-item [ngClass]=\"{'active': (ruta === '/skills')}\" onclick=\"window.location.href='/skills'\">\r\n            Habilidades\r\n        </button>\r\n        <button mat-menu-item [ngClass]=\"{'active': (ruta === '/jobs')}\" onclick=\"window.location.href='/jobs'\">\r\n            Experiencia\r\n        </button>\r\n    </mat-menu>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\na {\n  text-decoration: none;\n  background: transparent; }\n\n.profile-logo {\n  padding-left: 16px;\n  height: 30px;\n  display: block;\n  align-items: center; }\n\n.flex-spacer {\n  flex: 1 1 auto; }\n\n.menu {\n  background: #3700B3;\n  color: #d1d1d1;\n  position: fixed;\n  z-index: 100; }\n\n.nav-item {\n  display: inline-block; }\n\n.nav-link:hover {\n  color: #ffffff; }\n\n.active .nav-link {\n  color: #ffffff;\n  font-size: 22px; }\n\n.nav-link {\n  align-items: center;\n  font-size: 20px;\n  color: #d1d1d1;\n  display: inline-block;\n  line-height: 64px;\n  padding: 0 16px;\n  position: relative;\n  transition: color 0.1s cubic-bezier(0.4, 0, 0.2, 1); }\n\n.name {\n  color: #ffffff; }\n\n::ng-deep .cdk-overlay-pane {\n  right: 0 !important;\n  top: 56px !important; }\n\n::ng-deep .mat-menu-panel {\n  background: #3700B3;\n  width: 1000px;\n  border-radius: 0px !important;\n  max-width: none !important; }\n\n::ng-deep .mat-menu-panel .active {\n  color: #ffffff !important;\n  font-size: 22px !important; }\n\n.mat-menu-item {\n  font-size: 20px;\n  color: #d1d1d1;\n  height: 64px;\n  line-height: 64px;\n  padding: 0 16px;\n  text-align: center; }\n\n.profile-logo-responsive {\n  padding: 0 16px;\n  height: 30px;\n  display: block;\n  margin: auto;\n  align-items: center; }\n\n@media (max-width: 595px) {\n  .profile-logo-responsive {\n    padding: 0 8px;\n    height: 28px; }\n  .name {\n    font-size: 18px; }\n  ::ng-deep .mat-menu-panel .active {\n    font-size: 20px !important; }\n  .mat-menu-item {\n    font-size: 18px; } }\n\n@media (max-width: 375px) {\n  .profile-logo-responsive {\n    padding: 0 8px 0 0;\n    height: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFnQjtFQUNoQixVQUFTO0VBQ1QsV0FBVSxFQUNiOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osZUFBYztFQUNkLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkNuQm1CO0VEb0JuQixlQ2RxQjtFRGVyQixnQkFBZTtFQUNmLGFBQVksRUFDZjs7QUFDRDtFQUNJLHNCQUFxQixFQUN4Qjs7QUFDRDtFQUNJLGVDckJ1QixFRHNCMUI7O0FBQ0Q7RUFDSSxlQ3hCdUI7RUR5QnZCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsZUMvQnFCO0VEZ0NyQixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG9EQUE2QyxFQUNoRDs7QUFDRDtFQUNJLGVDdEN1QixFRHVDMUI7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIscUJBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksb0JDdERtQjtFRHVEbkIsY0FBWTtFQUNaLDhCQUE2QjtFQUM3QiwyQkFBMEIsRUFDN0I7O0FBQ0Q7RUFDSSwwQkFBb0M7RUFDcEMsMkJBQTBCLEVBQzdCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixlQzNEcUI7RUQ0RHJCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGFBQVk7RUFDWixlQUFjO0VBQ2QsYUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNDO0lBQ08sZUFBYztJQUNkLGFBQVksRUFDZjtFQUNEO0lBQ0ksZ0JBQWUsRUFDbEI7RUFDRDtJQUNJLDJCQUEwQixFQUM3QjtFQUNEO0lBQ0ksZ0JBQWUsRUFDbEIsRUFBQTs7QUFFTDtFQUNDO0lBQ08sbUJBQWtCO0lBQ2xCLGFBQVksRUFDZixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7ICAgIFxyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgICAgXHJcbn1cclxuLnByb2ZpbGUtbG9nb3tcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmxleC1zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4ubWVudXtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICR0ZXh0LWZpcnN0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5uYXYtaXRlbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kLWNvbG9yO1xyXG59XHJcbi5hY3RpdmUgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogJHRleHQtZmlyc3QtY29sb3I7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxufVxyXG4ubmFtZXtcclxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmQtY29sb3I7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZXtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6NTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVse1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICB3aWR0aDoxMDAwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIC5hY3RpdmV7XHJcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LW1lbnUtaXRlbSB7ICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LWZpcnN0LWNvbG9yO1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGUtbG9nby1yZXNwb25zaXZle1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTVweCkge1xyXG5cdC5wcm9maWxlLWxvZ28tcmVzcG9uc2l2ZXtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIC5hY3RpdmV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbSB7ICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuXHQucHJvZmlsZS1sb2dvLXJlc3BvbnNpdmV7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHggMCAwO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxufSIsIi8vRGVmaW5pY2lvbiBkZSBjb2xvcmVzXHJcbiRwcmltYXJ5LWNvbG9yOiAjMzcwMEIzO1xyXG4kc2Vjb25kLWNvbG9yOiAjMDE4Nzg2O1xyXG4kdGhpcmQtY29sb3I6I0IwMDAyMDtcclxuJGZvdXItY29sb3I6I2YwN2IwNTtcclxuXHJcbi8vQ29sb3JlcyBwYXJhIHRleHRvc1xyXG4kdGV4dC1maXJzdC1jb2xvcjojZDFkMWQxO1xyXG4kdGV4dC1zZWNvbmQtY29sb3I6ICNmZmZmZmY7XHJcbiR0ZXh0LXRoaXJkLWNvbG9yOiAjMDAwMDAwO1xyXG4kdGV4dC1mb3VyZC1jb2xvcjogIzY2NjY2NjtcclxuXHJcbi8vQ29sb3IgZGUgZm9uZG9cclxuJGJhY2tncm91bmQtY29sb3I6I2Y5ZjdmNDtcclxuJGJhY2tncm91bmQtc2Nyb2xsLWNvbG9yOiNmOWY3ZjQ7XHJcbiRzY3JvbGwtY29sb3I6IzYxNjE2MTtcclxuXHJcbiRlcnJvci1jb2xvcjogI2U3MmYzNTtcclxuJGluZm8tY29sb3I6I2ZkYzEzMDtcclxuJHN1Y2Nlc3MtY29sb3I6IzRlOTcwMDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(location, router) {
        var _this = this;
        this.ruta = null;
        this.visible = false;
        router.events.subscribe(function (val) {
            _this.ruta = location.path();
        });
        this.visible;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.showMenu = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Habilidades -->\r\n<div class=\"habilidades\">\r\n    <p>\r\n        Aquí van las habilidades por subir\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".habilidades {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcbW11bm96Z1xcRGVza3RvcFxcZ2l0aHViXFxwb3J0YWZvbGlvL3NyY1xcYXBwXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xyXG4uaGFiaWxpZGFkZXN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/studies/studies.component.html":
/*!************************************************!*\
  !*** ./src/app/studies/studies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Estudios -->\r\n<div class=\"estudios\">\r\n  <p>\r\n    studies works!\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/studies/studies.component.scss":
/*!************************************************!*\
  !*** ./src/app/studies/studies.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".estudios {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGllcy9DOlxcVXNlcnNcXG1tdW5vemdcXERlc2t0b3BcXGdpdGh1YlxccG9ydGFmb2xpby9zcmNcXGFwcFxcc3R1ZGllc1xcc3R1ZGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zdHVkaWVzL3N0dWRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XHJcbi5lc3R1ZGlvc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/studies/studies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/studies/studies.component.ts ***!
  \**********************************************/
/*! exports provided: StudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesComponent", function() { return StudiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudiesComponent = /** @class */ (function () {
    function StudiesComponent() {
    }
    StudiesComponent.prototype.ngOnInit = function () {
    };
    StudiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studies',
            template: __webpack_require__(/*! ./studies.component.html */ "./src/app/studies/studies.component.html"),
            styles: [__webpack_require__(/*! ./studies.component.scss */ "./src/app/studies/studies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mmunozg\Desktop\github\portafolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map