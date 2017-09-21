webpackJsonp([0],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirFacturaPageModule", function() { return SubirFacturaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subir_factura__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubirFacturaPageModule = (function () {
    function SubirFacturaPageModule() {
    }
    return SubirFacturaPageModule;
}());
SubirFacturaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__subir_factura__["a" /* SubirFacturaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subir_factura__["a" /* SubirFacturaPage */]),
        ],
    })
], SubirFacturaPageModule);

//# sourceMappingURL=subir-factura.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubirFacturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
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
 * Generated class for the SubirFacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubirFacturaPage = (function () {
    function SubirFacturaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubirFacturaPage.prototype.ionViewDidLoad = function () {
    };
    SubirFacturaPage.prototype.agregar = function () {
    };
    SubirFacturaPage.prototype.subir = function () {
        this.navCtrl.push('HomeClientePage');
    };
    return SubirFacturaPage;
}());
SubirFacturaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subir-factura',template:/*ion-inline-start:"C:\Users\yenifer\Documents\uniquindio\SOFT2\CentroComercial\src\pages\subir-factura\subir-factura.html"*/'<!--\n\n  Generated template for the SubirFacturaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Subir Factura\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="text-center"> \n\n        <!-- aqui va la imagen -->\n\n\n\n    <img class="factura" src="base64Image">\n\n        \n\n    </div>\n\n    <div class="text-center"> \n\n        <h4>¿Nombre estas seguro de subir esta factura?</h4>\n\n    </div>\n\n    <div class="text-center">\n\n        <button ion-button icon-only class="botones si" (click)="agregar()" >\n\n            Si\n\n        </button>\n\n        <button ion-button icon-only class="botones no" (click)="subir()" >\n\n            No\n\n        </button>\n\n    </div>\n\n    <div class="text-center">\n\n    <img class="gana" src="https://firebasestorage.googleapis.com/v0/b/tiendq-3d47a.appspot.com/o/img%2Fadmin%2Fgana.png?alt=media&token=c6d87ebf-ca83-40a6-a5e6-a54e0dba188f">\n\n    <p>Súbe tú factura para que acumules puntos y redimas por grandes premios.</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yenifer\Documents\uniquindio\SOFT2\CentroComercial\src\pages\subir-factura\subir-factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SubirFacturaPage);

//# sourceMappingURL=subir-factura.js.map

/***/ })

});
//# sourceMappingURL=0.js.map