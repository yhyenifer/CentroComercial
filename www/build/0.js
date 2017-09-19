webpackJsonp([0],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientePageModule", function() { return HomeClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_cliente__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeClientePageModule = (function () {
    function HomeClientePageModule() {
    }
    return HomeClientePageModule;
}());
HomeClientePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_cliente__["a" /* HomeClientePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_cliente__["a" /* HomeClientePage */]),
        ],
    })
], HomeClientePageModule);

//# sourceMappingURL=home-cliente.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomeClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomeClientePage = (function () {
    function HomeClientePage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
    }
    HomeClientePage.prototype.ionViewDidLoad = function () {
    };
    return HomeClientePage;
}());
HomeClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home-cliente',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\CentroComercial\src\pages\home-cliente\home-cliente.html"*/'<!--\n\n  Generated template for the HomeClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Menú\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div class="text-center"> \n\n<h4 class="text-center">Súbe aquí tú factura para que acumules puntos y redimas por grandes premios.</h4>\n\n<img class="gana" src="../../assets/img/gana.png">\n\n<p>Tómale una foto a tú factura</p>\n\n<button ion-button icon-only class="camara">\n\n    <ion-icon name="camera"></ion-icon>\n\n  </button>\n\n  <p>O súbela desde tus imágenes</p>\n\n  <button ion-button icon-only class="camara">\n\n      <ion-icon name="image"></ion-icon>\n\n  </button>\n\n</div>\n\n<div class="slide_eventos">\n\n  \n\n    <ion-slides pager  autoplay="2000" loop="true" speed="1000">\n\n        \n\n          <ion-slide >\n\n              <div class="row">\n\n                <img src="../../assets/img/evento.png">\n\n                <p class="letra12">Descripción del evento1</p>\n\n              </div>\n\n          </ion-slide>\n\n        \n\n          <ion-slide >\n\n              <div class="row">\n\n                  <img src="../../assets/img/evento.png">\n\n                  <p class="letra12">Descripción del evento2</p>\n\n                </div>\n\n          </ion-slide>\n\n        \n\n          <ion-slide >\n\n              <div class="row">\n\n                  <img src="../../assets/img/evento.png">\n\n                  <p class="letra12">Descripción del evento3</p>\n\n                </div>\n\n          </ion-slide>\n\n        \n\n        </ion-slides>\n\n      \n\n</div> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\CentroComercial\src\pages\home-cliente\home-cliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomeClientePage);

//# sourceMappingURL=home-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map