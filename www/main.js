(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 6224:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu [ngClass]=\"{'d-none': !globalService.logged}\" contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header>Autoestimados</ion-list-header>\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n\r\n          <ion-menu-toggle\r\n            auto-hide=\"false\"\r\n            *ngFor=\"let p of appPages; let i = index\"\r\n          >\r\n            <ion-item\r\n              routerDirection=\"root\"\r\n              [routerLink]=\"[p.url]\"\r\n              lines=\"none\"\r\n              detail=\"false\"\r\n              routerLinkActive=\"selected\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [ios]=\"p.icon + '-outline'\"\r\n                [md]=\"p.icon + '-sharp'\"\r\n              ></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    \r\n    \r\n    <ion-content id=\"main-content\">\r\n      <app-header></app-header>\r\n      <ion-router-outlet id=\"container\"></ion-router-outlet>\r\n    </ion-content>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ 9555:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/create-estimate-modale/create-estimate-modale.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <form\n    [formGroup]=\"estimationForm\"\n    (ngSubmit)=\"requestEstimation()\"\n    id=\"getQuoteFrm\"\n    name=\"getQuoteFrm\"\n    class=\"sign-up-form\"\n  >\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h3 class=\"ion-text-center\">Crear Estimado</h3>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\">Nombre</ion-label>\n          <ion-input type=\"text\" ngDefaultControl formControlName=\"name\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Teléfono</ion-label>\n          <ion-input type=\"number\" ngDefaultControl formControlName=\"phone\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input ngDefaultControl formControlName=\"email\" type=\"email\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">Marca</ion-label>\n          <ion-input ngDefaultControl formControlName=\"make\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">Modelo</ion-label>\n          <ion-input ngDefaultControl formControlName=\"model\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">Año</ion-label>\n          <ion-input ngDefaultControl formControlName=\"year\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <!-- <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\">Description</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-col> -->\n\n      <ion-col size=\"12\">\n        <!-- <ion-item> -->\n          <div\n            ngx-dropzone\n            class=\"pictures-dropzone\"\n            (change)=\"onDropzoneChange($event)\"\n            accept=\"image/jpeg,image/jpg,image/png,image/JPEG,image/JPG,image/PNG\"\n            [multiple]=\"true\"\n          >\n            <ngx-dropzone-label>Fotos del vehiculo</ngx-dropzone-label>\n            <ngx-dropzone-image-preview\n              ngProjectAs=\"ngx-dropzone-preview\"\n              *ngFor=\"let f of dropzoneFiles\"\n              [file]=\"f\"\n              [removable]=\"true\"\n              (removed)=\"onDropzoneRemove(f)\"\n            >\n              <ngx-dropzone-label\n                >{{ f.name }} ({{ f.type }})</ngx-dropzone-label\n              >\n            </ngx-dropzone-image-preview>\n          </div>\n        <!-- </ion-item> -->\n      </ion-col>\n\n      <ion-col style=\"margin-left: auto\" size=\"4\">\n        <ion-item>\n          <ion-label position=\"floating\">Presupuesto</ion-label>\n          <ion-input ngDefaultControl formControlName=\"budget\" type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"form-buttons\">\n        <ion-button color=\"medium\" (click)=\"cancel()\">\n          Cancelar\n        </ion-button>\n        <ion-button type=\"submit\">\n          Crear\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 6607:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/header/header.component.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>  </ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ 2123:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/lightbox/lightbox.component.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"content\">\n  <img [src]=\"image\">\n</div>");

/***/ }),

/***/ 8880:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-list id=\"inbox-list\">\n    <ion-list-header>Autoestimados</ion-list-header>\n    <!-- <ion-note>hi@ionicframework.com</ion-note> -->\n\n    <ion-menu-toggle\n      auto-hide=\"false\"\n      *ngFor=\"let p of appPages; let i = index\"\n    >\n      <ion-item\n        routerDirection=\"root\"\n        [routerLink]=\"[p.url]\"\n        lines=\"none\"\n        detail=\"false\"\n        routerLinkActive=\"selected\"\n      >\n        <ion-icon\n          slot=\"start\"\n          [ios]=\"p.icon + '-outline'\"\n          [md]=\"p.icon + '-sharp'\"\n        ></ion-icon>\n        <ion-label>{{ p.title }}</ion-label>\n      </ion-item>\n    </ion-menu-toggle>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 8438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: '',
        redirectTo: 'estimates',
        pathMatch: 'full'
    },
    {
        path: 'folder',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 1064)).then(m => m.FolderPageModule)
    },
    {
        path: 'estimates',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_estimates_estimates_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/estimates/estimates.module */ 9277)).then(m => m.EstimatesPageModule)
    },
    {
        path: 'estimate-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_estimate-detail_estimate-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/estimate-detail/estimate-detail.module */ 4050)).then(m => m.EstimateDetailPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 1454)).then(m => m.LoginPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 6104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 6224);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/global.service */ 639);





let AppComponent = class AppComponent {
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(globalService) {
        this.globalService = globalService;
        this.appPages = [
            { title: 'Estimaciones', url: '/estimates', icon: 'mail' },
            // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        const isLogged = localStorage.getItem('logged');
        if (isLogged) {
            globalService.login();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 2014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6104);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 8438);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 2187);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3504:
/*!*************************************************!*\
  !*** ./src/app/services/estimations.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimationsService": () => (/* binding */ EstimationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 1251);




let EstimationsService = class EstimationsService {
    constructor(http) {
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/estimations';
    }
    getAll() {
        return this.http.get(`${this.API_URL}/get-all`);
    }
    getById(id) {
        return this.http.get(`${this.API_URL}/${id}`);
    }
    createBudget(data, id) {
        return this.http.patch(`${this.API_URL}/estimate/${id}`, data);
    }
    saveNote(data, id) {
        return this.http.patch(`${this.API_URL}/add-note/${id}`, data);
    }
    requestEstimation(data) {
        const formData = new FormData();
        for (const key in data) {
            if (key == 'images') {
                for (const img of data[key]) {
                    formData.append(key, img);
                }
            }
            else {
                formData.append(key, data[key]);
            }
        }
        return this.http.post(`${this.API_URL}/create`, formData);
    }
};
EstimationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EstimationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EstimationsService);



/***/ }),

/***/ 639:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let GlobalService = class GlobalService {
    constructor() {
        this.logged = false;
    }
    login() {
        this.logged = true;
        localStorage.setItem('logged', 'true');
    }
    logout() {
        this.logged = false;
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 1542:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/create-estimate-modale/create-estimate-modale.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEstimateModaleComponent": () => (/* binding */ CreateEstimateModaleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_estimate_modale_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-estimate-modale.component.html */ 9555);
/* harmony import */ var _create_estimate_modale_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-estimate-modale.component.scss */ 6555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/estimations.service */ 3504);







let CreateEstimateModaleComponent = class CreateEstimateModaleComponent {
    constructor(fb, estimationServicesService, modalCtrl, toastController) {
        this.fb = fb;
        this.estimationServicesService = estimationServicesService;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.dropzoneFiles = [];
    }
    ngOnInit() {
        this.initEstimationForm();
    }
    onDropzoneChange(event) {
        console.log('event.addedFiles', event.addedFiles);
        this.dropzoneFiles.push(...event.addedFiles);
        this.estimationForm.controls.images.setValue(this.dropzoneFiles);
        console.log('estimationForm', this.estimationForm.controls.images.value);
    }
    initEstimationForm() {
        this.estimationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            images: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            budget: [''],
        });
    }
    requestEstimation() {
        console.log('this.estimationForm.value', this.estimationForm.value);
        // return
        return this.estimationServicesService.requestEstimation(this.estimationForm.value).subscribe((res) => {
            console.log('res', res);
            this.showSuccess();
            this.modalCtrl.dismiss(true);
        }, err => {
            console.log('err', err);
        });
    }
    cancel() {
        console.log('cancel');
        this.modalCtrl.dismiss();
    }
    showSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Estimado para ${this.estimationForm.controls.name.value} creado con exito.`,
                duration: 2000,
                position: 'top',
                color: 'success'
            });
            toast.present();
        });
    }
    onDropzoneRemove(file) {
        console.log('remove', file);
    }
};
CreateEstimateModaleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_estimations_service__WEBPACK_IMPORTED_MODULE_2__.EstimationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CreateEstimateModaleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-create-estimate-modale',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_estimate_modale_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_estimate_modale_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateEstimateModaleComponent);



/***/ }),

/***/ 4608:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 6607);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 7561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6212:
/*!*******************************************************!*\
  !*** ./src/app/shared/lightbox/lightbox.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightboxComponent": () => (/* binding */ LightboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lightbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lightbox.component.html */ 2123);
/* harmony import */ var _lightbox_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox.component.scss */ 7157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let LightboxComponent = class LightboxComponent {
    constructor() { }
    ngOnInit() { }
};
LightboxComponent.ctorParameters = () => [];
LightboxComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
LightboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-lightbox',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lightbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lightbox_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LightboxComponent);



/***/ }),

/***/ 2187:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 9752);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 4608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightbox/lightbox.component */ 6212);
/* harmony import */ var _create_estimate_modale_create_estimate_modale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-estimate-modale/create-estimate-modale.component */ 1542);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone */ 5396);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8058);











let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_2__.LightboxComponent,
            _create_estimate_modale_create_estimate_modale_component__WEBPACK_IMPORTED_MODULE_3__.CreateEstimateModaleComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent,
            _lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_2__.LightboxComponent,
            _create_estimate_modale_create_estimate_modale_component__WEBPACK_IMPORTED_MODULE_3__.CreateEstimateModaleComponent,
        ]
    })
], SharedModule);



/***/ }),

/***/ 9752:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar.component.html */ 8880);
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ 8110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let SidebarComponent = class SidebarComponent {
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor() {
        this.appPages = [
            { title: 'Estimaciones', url: '/folder/estimates', icon: 'mail' },
            // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
    }
    ngOnInit() { }
};
SidebarComponent.ctorParameters = () => [];
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sidebar',
        template: _C_Users_lsuar_Documents_Lashcode_05_proyectos_groobay_projects_autoestimados_autoestimadosAdmin_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarComponent);



/***/ }),

/***/ 1251:
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
    production: false,
    API_URL: 'http://localhost:3030/api',
    IMG_URL: 'http://localhost:3030',
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

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 1251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		5429,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		9115,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3969,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5882,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		4548,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8751,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		430,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8762,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		6232,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2541,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		298,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9171,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		1502,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		9396,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5194,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		9491,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9420,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		978,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8860,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1389,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		1872,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		8040,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		6326,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		4614,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		1673,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		3596,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7415,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5316,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7363,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6266,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		8939,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		8906,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7743,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5470,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4541,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		4160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		1580,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		530,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		1167,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5869,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		6056,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n  margin-bottom: 35px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n@media (min-width: 991px) {\n  ion-menu {\n    max-width: 300px;\n  }\n}\n\n#container {\n  margin: 70px 25px;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.custom-modal {\n  width: 700px;\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLHNEQUFBO0FBUEY7O0FBVUE7RUFDRSwrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSwrQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0FBUEY7O0FBVUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBUkY7O0FBV0E7RUFDRSxpQ0FBQTtBQVJGOztBQVdBO0VBQ0U7SUFDRSxnQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRSxpQkFBQTtBQVRGOztBQVdBO0VBQ0Usd0JBQUE7QUFSRjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBVEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbi8vIH1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweFxufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgaW9uLW1lbnUge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuI2NvbnRhaW5lciB7XG4gIG1hcmdpbjogNzBweCAyNXB4O1xufVxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4uY3VzdG9tLW1vZGFsIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 6555:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/create-estimate-modale/create-estimate-modale.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-col {\n  margin: 8px 0;\n}\n\n.input-wrapper {\n  justify-content: center;\n}\n\n.form-buttons {\n  text-align: center;\n}\n\n.form-buttons ion-button {\n  width: 200px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lc3RpbWF0ZS1tb2RhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBR0oiLCJmaWxlIjoiY3JlYXRlLWVzdGltYXRlLW1vZGFsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 7561:
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7157:
/*!*********************************************************!*\
  !*** ./src/app/shared/lightbox/lightbox.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div.content {\n  height: 100%;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0Ym94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJsaWdodGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8110:
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map