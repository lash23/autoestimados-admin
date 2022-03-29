"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_estimate-detail_estimate-detail_module_ts"],{

/***/ 7156:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/estimate-detail/estimate-detail.page.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <!-- THUMBNAIL -->\n      <ion-col size=\"4\">\n        <ion-card>\n          <ion-card-content>\n            <img [src]=\"IMG_URL + estimate?.images[0]\" />\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <!-- SUMARY DETAILS -->\n      <ion-col size=\"8\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-row>\n              <!-- CONTACT -->\n              <ion-col size=\"12\">\n                <ion-card>\n                  <ion-card-content>\n                    <h1>{{ estimate?.name }}</h1>\n                    <h3>{{ estimate?.phone }} | {{ estimate?.email }}</h3>\n                    <a href=\"https://api.whatsapp.com/send?phone=1{{estimate?.phone}}\" target=\"_blank\">\n                      <ion-icon\n                      name=\"logo-whatsapp\"\n                      color=\"success\"\n                      size=\"large\"\n                      class=\"ion-margin-top\"\n                    ></ion-icon>\n                    </a>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n              <!-- MODEL -->\n              <ion-col size=\"12\">\n                <ion-card>\n                  <ion-card-content>\n                    <h3>\n                      <ion-chip color=\"primary\" mode=\"android\">\n                        <ion-label>{{ estimate?.make }}</ion-label>\n                      </ion-chip>\n                      <ion-chip color=\"primary\" mode=\"android\">\n                        <ion-label>{{ estimate?.model }}</ion-label>\n                      </ion-chip>\n                      <ion-chip color=\"primary\" mode=\"android\">\n                        <ion-label>{{ estimate?.year }}</ion-label>\n                      </ion-chip>\n                    </h3>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-card\n              *ngIf=\"!estimate?.status\"\n              class=\"status-action-card\"\n            >\n              <ion-card-content>\n                <h3>Aun no se ha realizado esta estimacion</h3>\n                <br />\n                <ion-button\n                  expand=\"block\"\n                  shape=\"round\"\n                  (click)=\"presentModal()\"\n                >\n                  Estimar\n                </ion-button>\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card\n              *ngIf=\"estimate?.status == true\"\n              class=\"status-action-card\"\n            >\n              <ion-card-content>\n                <h1>\n                  Presupuesto\n                  <ion-chip color=\"success\">\n                    <ion-label>\n                      <h1>$ {{ estimate?.budget }}</h1>\n                    </ion-label>\n                  </ion-chip>\n                </h1>\n                <br />\n                <ion-button\n                  expand=\"block\"\n                  shape=\"round\"\n                  (click)=\"presentNotesModal()\"\n                >\n                  Ver Notas\n                </ion-button>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- MORE DETAILS -->\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-card-content>\n            Detalles sobre el estado del vehiculo Detalles sobre el estado del\n            vehiculo Detalles sobre el estado del vehiculo Detalles sobre el\n            estado del vehiculo\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <!-- CAROUSEL -->\n      <ion-col\n        size=\"12\"\n        class=\"ion-text-center ion-margin-top ion-margin-bottom\"\n      >\n        <h2>Imagenes del vehiculo</h2>\n      </ion-col>\n      <ion-col size=\"1\">\n        <span\n          class=\"slider-nav arrow-prev\"\n          (click)=\"slidePrev(sliderTwo,slideWithNav2)\"\n        >\n          <div\n            class=\"prev-icon-custom custon-nav\"\n            [class.disabled]=\"sliderTwo.isBeginningSlide\"\n          ></div>\n        </span>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-slides\n          pager=\"false\"\n          [options]=\"slideOptsTwo\"\n          #slideWithNav2\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\"\n        >\n          <ion-slide *ngFor=\"let item of sliderTwo.slidesItems\">\n            <img (click)=\"presentLightboxModal(item)\" [src]=\"item\" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n      <ion-col size=\"1\">\n        <span\n          class=\"slider-nav arrow-next\"\n          (click)=\"slideNext(sliderTwo,slideWithNav2)\"\n        >\n          <div\n            class=\"next-icon-custom custon-nav\"\n            [class.disabled]=\"sliderTwo.isEndSlide\"\n          ></div>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 7322:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/estimate-detail/estimate-modal/estimate-modal.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"estimate-form\">\n  <h3>Estimación para</h3>\n  <form [formGroup]=\"budgetForm\" (ngSubmit)=\"createBudget()\">\n      <ion-item>\n        <ion-label>Presupuesto: $</ion-label>\n        <ion-input formControlName=\"budget\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Agregar nota (opcional):</ion-label>\n        <ion-textarea formControlName=\"notes\" rows=\"6\" cols=\"20\"></ion-textarea>\n      </ion-item>\n      <ion-button type=\"submit\" [disabled]=\"budgetForm.invalid\">\n        Guardar\n      </ion-button>\n  </form>\n</div>");

/***/ }),

/***/ 8104:
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/estimate-detail/notes-modal/notes-modal.component.html ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"notes-modal-content\">\n  <div class=\"notes-content\">\n    <ion-card *ngFor=\"let note of notes\">\n      <ion-card-content>\n        <p>\n          {{ note }}\n        </p>\n        <small>\n          2022 / Marzo / 15\n        </small>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-text-center\" *ngIf=\"notes.length === 0\">\n      <h1>Aun no hay notas guardadas</h1>\n    </ion-card>\n  </div>\n\n  <form [formGroup]=\"notesForm\" (ngSubmit)=\"saveNote()\">\n    <ion-item>\n      <ion-label>Agregar nota:</ion-label>\n      <ion-textarea formControlName=\"notes\" rows=\"6\" cols=\"20\" ></ion-textarea>\n    </ion-item>\n    <div class=\"ion-text-center ion-margin\">\n      <ion-button type=\"submit\" class=\"ion-margin-auto\" [disabled]=\"notesForm.invalid\">\n        Guardar nota\n      </ion-button>\n    </div>\n  </form>\n\n</div>");

/***/ }),

/***/ 5127:
/*!*************************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-detail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateDetailPageRoutingModule": () => (/* binding */ EstimateDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _estimate_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimate-detail.page */ 6248);




const routes = [
    {
        path: '',
        component: _estimate_detail_page__WEBPACK_IMPORTED_MODULE_0__.EstimateDetailPage
    }
];
let EstimateDetailPageRoutingModule = class EstimateDetailPageRoutingModule {
};
EstimateDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstimateDetailPageRoutingModule);



/***/ }),

/***/ 4050:
/*!*****************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateDetailPageModule": () => (/* binding */ EstimateDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _estimate_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimate-detail-routing.module */ 5127);
/* harmony import */ var _estimate_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimate-detail.page */ 6248);
/* harmony import */ var _notes_modal_notes_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-modal/notes-modal.component */ 4635);
/* harmony import */ var _estimate_modal_estimate_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estimate-modal/estimate-modal.component */ 4008);









let EstimateDetailPageModule = class EstimateDetailPageModule {
};
EstimateDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _estimate_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstimateDetailPageRoutingModule,
        ],
        declarations: [
            _estimate_detail_page__WEBPACK_IMPORTED_MODULE_1__.EstimateDetailPage,
            _notes_modal_notes_modal_component__WEBPACK_IMPORTED_MODULE_2__.NotesModalComponent,
            _estimate_modal_estimate_modal_component__WEBPACK_IMPORTED_MODULE_3__.EstimateModalComponent
        ]
    })
], EstimateDetailPageModule);



/***/ }),

/***/ 6248:
/*!***************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-detail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateDetailPage": () => (/* binding */ EstimateDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimate_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./estimate-detail.page.html */ 7156);
/* harmony import */ var _estimate_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimate-detail.page.scss */ 9009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 1251);
/* harmony import */ var _services_estimations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estimations.service */ 3504);
/* harmony import */ var _shared_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/lightbox/lightbox.component */ 6212);
/* harmony import */ var _estimate_modal_estimate_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate-modal/estimate-modal.component */ 4008);
/* harmony import */ var _notes_modal_notes_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes-modal/notes-modal.component */ 4635);











let EstimateDetailPage = class EstimateDetailPage {
    constructor(activatedRoute, modalController, estimationService) {
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.estimationService = estimationService;
        this.IMG_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.IMG_URL + '/';
        this.slideOptsTwo = {
            initialSlide: 1,
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 20
        };
        //Item object for Food
        this.sliderTwo =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: []
            };
    }
    ngOnInit() {
        this.estimationId = this.activatedRoute.snapshot.paramMap.get('id');
        this.getEstimation();
    }
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
        ;
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _estimate_modal_estimate_modal_component__WEBPACK_IMPORTED_MODULE_5__.EstimateModalComponent,
                cssClass: 'my-custom-class',
                componentProps: {
                    estimationId: this.estimationId
                },
            });
            modal.onDidDismiss()
                .then((data) => {
                console.log('data', data.data.status);
                if (data.data.status === 'success') {
                    this.getEstimation();
                }
            });
            return yield modal.present();
        });
    }
    presentNotesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _notes_modal_notes_modal_component__WEBPACK_IMPORTED_MODULE_6__.NotesModalComponent,
                componentProps: {
                    estimationId: this.estimationId,
                    'notes': this.estimate.notes,
                },
                cssClass: 'my-custom-class',
            });
            modal.onDidDismiss()
                .then((data) => {
                console.log('data', data.data.status);
                if (data.data.status === 'success') {
                    this.getEstimation();
                }
            });
            return yield modal.present();
        });
    }
    presentLightboxModal(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_4__.LightboxComponent,
                componentProps: {
                    'image': image,
                },
                cssClass: 'my-custom-class',
            });
            return yield modal.present();
        });
    }
    getEstimation() {
        return this.estimationService.getById(this.estimationId).subscribe((res) => {
            console.log(res);
            this.estimate = res.data;
            console.log(res.data.images);
            this.sliderTwo.slidesItems = res.data.images.map(img => this.IMG_URL + img);
        });
    }
};
EstimateDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _services_estimations_service__WEBPACK_IMPORTED_MODULE_3__.EstimationsService }
];
EstimateDetailPage.propDecorators = {
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['slideWithNav2', { static: false },] }]
};
EstimateDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-estimate-detail',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimate_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_estimate_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstimateDetailPage);



/***/ }),

/***/ 4008:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-modal/estimate-modal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimateModalComponent": () => (/* binding */ EstimateModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimate_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./estimate-modal.component.html */ 7322);
/* harmony import */ var _estimate_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimate-modal.component.scss */ 8514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/estimations.service */ 3504);







let EstimateModalComponent = class EstimateModalComponent {
    constructor(toastController, estimationsService, fb, modalController) {
        this.toastController = toastController;
        this.estimationsService = estimationsService;
        this.fb = fb;
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log('estimationId', this.estimationId);
        this.initBudgetForm();
    }
    createBudget() {
        this.estimationsService.createBudget(this.budgetForm.value, this.estimationId)
            .subscribe((res) => {
            this.toasSuccess();
            this.modalController.dismiss(res);
        }, err => {
            console.log(err);
            this.toasError();
        });
    }
    toasSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Estimado creado con Exito!.',
                duration: 2000,
                position: 'top',
                color: 'primary'
            });
            toast.present();
        });
    }
    toasError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Hubo un error al crear el estimado!.',
                duration: 2000,
                position: 'top',
                color: 'danger'
            });
            toast.present();
        });
    }
    initBudgetForm() {
        this.budgetForm = this.fb.group({
            budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            notes: [''],
        });
        console.log('init', this.budgetForm);
    }
};
EstimateModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__.EstimationsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
EstimateModalComponent.propDecorators = {
    estimationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EstimateModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-estimate-modal',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_estimate_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_estimate_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstimateModalComponent);



/***/ }),

/***/ 4635:
/*!****************************************************************************!*\
  !*** ./src/app/pages/estimate-detail/notes-modal/notes-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesModalComponent": () => (/* binding */ NotesModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notes_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notes-modal.component.html */ 8104);
/* harmony import */ var _notes_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-modal.component.scss */ 5311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/estimations.service */ 3504);







let NotesModalComponent = class NotesModalComponent {
    constructor(toastController, estimationsService, fb, modalController) {
        this.toastController = toastController;
        this.estimationsService = estimationsService;
        this.fb = fb;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.initNotesForm();
    }
    toasSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Nota guardada con Exito!.',
                duration: 2000,
                position: 'top',
                color: 'primary'
            });
            toast.present();
        });
    }
    toasError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Hubo un error al guardar la nota!.',
                duration: 2000,
                position: 'top',
                color: 'danger'
            });
            toast.present();
        });
    }
    initNotesForm() {
        this.notesForm = this.fb.group({
            notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    saveNote() {
        return this.estimationsService.saveNote(this.notesForm.value, this.estimationId)
            .subscribe((res) => {
            this.toasSuccess();
            this.modalController.dismiss(res);
        }, err => {
            console.log(err);
            this.toasError();
        });
    }
};
NotesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__.EstimationsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
NotesModalComponent.propDecorators = {
    notes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    estimationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
NotesModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notes-modal',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notes_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notes_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotesModalComponent);



/***/ }),

/***/ 9009:
/*!*****************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-detail.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\n.status-action-card {\n  height: 90%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGltYXRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBREY7O0FBR0E7RUFDRSx1R0FBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLHlHQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFFO0VBQ0ksWUFBQTtBQUdOOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoiZXN0aW1hdGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNsaWRlciBTdHlsZSBTVEFSVCBcclxuLmN1c3Rvbi1uYXZ7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5wcmV2LWljb24tY3VzdG9te1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XHJcbn1cclxuLnByZXYtaWNvbi1jdXN0b20uZGlzYWJsZWR7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4ubmV4dC1pY29uLWN1c3RvbXtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XHJcbn1cclxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWR7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uc2xpZGVyLW5hdntcclxuICBpb24taWNvbntcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLXRleHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi8vIFNsaWRlciBTdHlsZSBTVE9QXHJcblxyXG5cclxuLnN0YXR1cy1hY3Rpb24tY2FyZCB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 8514:
/*!************************************************************************************!*\
  !*** ./src/app/pages/estimate-detail/estimate-modal/estimate-modal.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".estimate-form {\n  text-align: center;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.estimate-form div {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGltYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJlc3RpbWF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3RpbWF0ZS1mb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 5311:
/*!******************************************************************************!*\
  !*** ./src/app/pages/estimate-detail/notes-modal/notes-modal.component.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".notes-modal-content {\n  display: contents;\n}\n.notes-modal-content .notes-content {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSiIsImZpbGUiOiJub3Rlcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rlcy1tb2RhbC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxuICAubm90ZXMtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_estimate-detail_estimate-detail_module_ts.js.map