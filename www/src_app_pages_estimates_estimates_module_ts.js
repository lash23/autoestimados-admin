"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_estimates_estimates_module_ts"],{

/***/ 6168:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/estimates/estimates.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <ion-button (click)=\"goToCreate()\">\n    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n    Crear estimado\n  </ion-button>\n  <ion-searchbar\n    placeholder=\"Buscar\"\n    inputmode=\"decimal\"\n    type=\"decimal\"\n    color=\"medium\"\n    (ionChange)=\"search($event)\" \n  ></ion-searchbar>\n\n  <ion-card *ngIf=\"estimations.length === 0\">\n    <ion-card-header>\n      <ion-card-title color=\"medium\">\n        <h1 class=\"ion-text-center\">\n          <ion-icon slot=\"start\" name=\"warning-outline\" color=\"warning\" size=\"lg\"></ion-icon>\n          <span>Parece que aun no hay datos para mostrar</span>\n        </h1>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngFor=\"let estimation of estimationsShowed\">\n    <ion-card-header>\n      <ion-card-title>{{ estimation.name }}</ion-card-title>\n      <ion-card-subtitle>\n        <ion-chip *ngIf=\"estimation.status\" color=\"secondary\">\n          <ion-label>Enviado</ion-label>\n        </ion-chip>\n        <ion-chip *ngIf=\"!estimation.status\" color=\"warning\">\n          <ion-label>Pendiente</ion-label>\n        </ion-chip>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"9\">\n            {{ estimation.make }} {{ estimation.model }} {{ estimation.year }} .\n            {{ estimation.email }} . {{ estimation.phone }}\n            <!-- <ion-button color=\"tertiary\">Tertiary</ion-button> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <img\n      [src]=\"IMG_URL+estimation.images[0]\"\n      alt=\"\"\n    />\n    <ion-button shape=\"round\" class=\"details-button\" [routerLink]=\"['/estimate-detail/', estimation.id]\">\n      Click para ver detalles\n    </ion-button>\n  </ion-card>\n\n  <div class=\"pagination\" *ngIf=\"false\">\n    <ion-button> < </ion-button>\n    <ion-button> 1 </ion-button>\n    <ion-button> 2 </ion-button>\n    <ion-button> 3 </ion-button>\n    <ion-button> > </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 5381:
/*!*************************************************************!*\
  !*** ./src/app/pages/estimates/estimates-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimatesPageRoutingModule": () => (/* binding */ EstimatesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _estimates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimates.page */ 1966);




const routes = [
    {
        path: '',
        component: _estimates_page__WEBPACK_IMPORTED_MODULE_0__.EstimatesPage
    }
];
let EstimatesPageRoutingModule = class EstimatesPageRoutingModule {
};
EstimatesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstimatesPageRoutingModule);



/***/ }),

/***/ 9277:
/*!*****************************************************!*\
  !*** ./src/app/pages/estimates/estimates.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimatesPageModule": () => (/* binding */ EstimatesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _estimates_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimates-routing.module */ 5381);
/* harmony import */ var _estimates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimates.page */ 1966);







let EstimatesPageModule = class EstimatesPageModule {
};
EstimatesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _estimates_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstimatesPageRoutingModule
        ],
        declarations: [_estimates_page__WEBPACK_IMPORTED_MODULE_1__.EstimatesPage]
    })
], EstimatesPageModule);



/***/ }),

/***/ 1966:
/*!***************************************************!*\
  !*** ./src/app/pages/estimates/estimates.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimatesPage": () => (/* binding */ EstimatesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimates_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./estimates.page.html */ 6168);
/* harmony import */ var _estimates_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimates.page.scss */ 5306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 1251);
/* harmony import */ var _services_estimations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estimations.service */ 3504);
/* harmony import */ var _shared_create_estimate_modale_create_estimate_modale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/create-estimate-modale/create-estimate-modale.component */ 1542);








let EstimatesPage = class EstimatesPage {
    constructor(estimationService, modalController) {
        this.estimationService = estimationService;
        this.modalController = modalController;
        this.estimations = [];
        this.estimationsShowed = [];
        this.IMG_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.IMG_URL + '/';
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.estimationService.getAll().subscribe((res) => {
            this.estimations = res.data;
            this.estimationsShowed = [...this.estimations];
        });
    }
    search(event) {
        if (event.detail.value != '') {
            this.estimationsShowed = this.estimations.filter(e => {
                return e.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.estimationsShowed = [...this.estimations];
        }
    }
    goToCreate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('creando estimado');
            const modal = yield this.modalController.create({
                component: _shared_create_estimate_modale_create_estimate_modale_component__WEBPACK_IMPORTED_MODULE_4__.CreateEstimateModaleComponent,
                cssClass: 'custom-modal',
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getAll();
            }
        });
    }
};
EstimatesPage.ctorParameters = () => [
    { type: _services_estimations_service__WEBPACK_IMPORTED_MODULE_3__.EstimationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
EstimatesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-estimates',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimates_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_estimates_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstimatesPage);



/***/ }),

/***/ 5306:
/*!*****************************************************!*\
  !*** ./src/app/pages/estimates/estimates.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "img {\n  bottom: 0;\n  height: 100%;\n  max-width: 225px;\n  position: absolute;\n  right: 0;\n  object-fit: cover;\n}\n\nion-button {\n  float: right;\n}\n\n.details-button {\n  display: none;\n  position: absolute;\n  top: calc(50% - 20px);\n  left: calc(50% - 125px);\n  width: 250px;\n  height: 40px;\n}\n\nion-card:hover .details-button {\n  display: block !important;\n}\n\n.pagination {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: center;\n  margin: 25px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGltYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQURGIiwiZmlsZSI6ImVzdGltYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRldGFpbHMtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQ6aG92ZXIge1xyXG4gIC5kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweCAwO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_estimates_estimates_module_ts.js.map