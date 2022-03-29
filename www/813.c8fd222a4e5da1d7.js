"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[813],{813:(U,d,r)=>{r.r(d),r.d(d,{EstimatesPageModule:()=>P});var c=r(6019),s=r(7816),n=r(1700),g=r(184),p=r(1855),f=r(1251),e=r(3245),Z=r(3504),u=r(6699);function h(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ngx-dropzone-image-preview",21),e.NdJ("removed",function(){const m=e.CHM(t).$implicit;return e.oxw().onDropzoneRemove(m)}),e.TgZ(1,"ngx-dropzone-label"),e._uU(2),e.qZA(),e.qZA()}if(2&o){const t=a.$implicit;e.Q6J("file",t)("removable",!0),e.xp6(2),e.AsE("",t.name," (",t.type,")")}}let _=(()=>{class o{constructor(t,i,l,m){this.fb=t,this.estimationServicesService=i,this.modalCtrl=l,this.toastController=m,this.dropzoneFiles=[]}ngOnInit(){this.initEstimationForm()}onDropzoneChange(t){console.log("event.addedFiles",t.addedFiles),this.dropzoneFiles.push(...t.addedFiles),this.estimationForm.controls.images.setValue(this.dropzoneFiles),console.log("estimationForm",this.estimationForm.controls.images.value)}initEstimationForm(){this.estimationForm=this.fb.group({name:["",s.kI.required],email:["",s.kI.required],phone:["",s.kI.required],images:["",s.kI.required],make:["",s.kI.required],model:["",s.kI.required],year:["",s.kI.required],budget:[""]})}requestEstimation(){return console.log("this.estimationForm.value",this.estimationForm.value),this.estimationServicesService.requestEstimation(this.estimationForm.value).subscribe(t=>{console.log("res",t),this.showSuccess(),this.modalCtrl.dismiss(!0)},t=>{console.log("err",t)})}cancel(){console.log("cancel"),this.modalCtrl.dismiss()}showSuccess(){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:`Estimado para ${this.estimationForm.controls.name.value} creado con exito.`,duration:2e3,position:"top",color:"success"})).present()})}onDropzoneRemove(t){console.log("remove",t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(s.qu),e.Y36(Z.Q),e.Y36(n.IN),e.Y36(n.yF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-estimate-modale"]],decls:52,vars:3,consts:[[1,"ion-padding"],["id","getQuoteFrm","name","getQuoteFrm",1,"sign-up-form",3,"formGroup","ngSubmit"],["fixed",""],["size","12"],[1,"ion-text-center"],["position","floating"],["type","text","ngDefaultControl","","formControlName","name"],["size","6"],["type","number","ngDefaultControl","","formControlName","phone"],["ngDefaultControl","","formControlName","email","type","email"],["size","4"],["ngDefaultControl","","formControlName","make","type","text"],["ngDefaultControl","","formControlName","model","type","text"],["ngDefaultControl","","formControlName","year","type","number"],["ngx-dropzone","","accept","image/jpeg,image/jpg,image/png,image/JPEG,image/JPG,image/PNG",1,"pictures-dropzone",3,"multiple","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],["size","4",2,"margin-left","auto"],["ngDefaultControl","","formControlName","budget","type","number"],["size","12",1,"form-buttons"],["color","medium",3,"click"],["type","submit"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return i.requestEstimation()}),e.TgZ(2,"ion-grid",2),e.TgZ(3,"ion-row"),e.TgZ(4,"ion-col",3),e.TgZ(5,"h3",4),e._uU(6,"Crear Estimado"),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",3),e.TgZ(8,"ion-item"),e.TgZ(9,"ion-label",5),e._uU(10,"Nombre"),e.qZA(),e._UZ(11,"ion-input",6),e.qZA(),e.qZA(),e.TgZ(12,"ion-col",7),e.TgZ(13,"ion-item"),e.TgZ(14,"ion-label",5),e._uU(15,"Tel\xe9fono"),e.qZA(),e._UZ(16,"ion-input",8),e.qZA(),e.qZA(),e.TgZ(17,"ion-col",7),e.TgZ(18,"ion-item"),e.TgZ(19,"ion-label",5),e._uU(20,"Email"),e.qZA(),e._UZ(21,"ion-input",9),e.qZA(),e.qZA(),e.TgZ(22,"ion-col",10),e.TgZ(23,"ion-item"),e.TgZ(24,"ion-label",5),e._uU(25,"Marca"),e.qZA(),e._UZ(26,"ion-input",11),e.qZA(),e.qZA(),e.TgZ(27,"ion-col",10),e.TgZ(28,"ion-item"),e.TgZ(29,"ion-label",5),e._uU(30,"Modelo"),e.qZA(),e._UZ(31,"ion-input",12),e.qZA(),e.qZA(),e.TgZ(32,"ion-col",10),e.TgZ(33,"ion-item"),e.TgZ(34,"ion-label",5),e._uU(35,"A\xf1o"),e.qZA(),e._UZ(36,"ion-input",13),e.qZA(),e.qZA(),e.TgZ(37,"ion-col",3),e.TgZ(38,"div",14),e.NdJ("change",function(m){return i.onDropzoneChange(m)}),e.TgZ(39,"ngx-dropzone-label"),e._uU(40,"Fotos del vehiculo"),e.qZA(),e.YNc(41,h,3,4,"ngx-dropzone-image-preview",15),e.qZA(),e.qZA(),e.TgZ(42,"ion-col",16),e.TgZ(43,"ion-item"),e.TgZ(44,"ion-label",5),e._uU(45,"Presupuesto"),e.qZA(),e._UZ(46,"ion-input",17),e.qZA(),e.qZA(),e.TgZ(47,"ion-col",18),e.TgZ(48,"ion-button",19),e.NdJ("click",function(){return i.cancel()}),e._uU(49," Cancelar "),e.qZA(),e.TgZ(50,"ion-button",20),e._uU(51," Crear "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",i.estimationForm),e.xp6(37),e.Q6J("multiple",!0),e.xp6(3),e.Q6J("ngForOf",i.dropzoneFiles))},directives:[n.W2,s._Y,s.JL,s.sg,n.jY,n.Nd,n.wI,n.Ie,n.Q$,n.pK,n.j9,s.Fj,s.JJ,s.u,n.as,u._f,u.Jj,c.sg,n.YG,u.sv],styles:["ion-col[_ngcontent-%COMP%]{margin:8px 0}.input-wrapper[_ngcontent-%COMP%]{justify-content:center}.form-buttons[_ngcontent-%COMP%]{text-align:center}.form-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:200px;margin:5px}"]}),o})();function T(o,a){1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title",7),e.TgZ(3,"h1",8),e._UZ(4,"ion-icon",9),e.TgZ(5,"span"),e._uU(6,"Parece que aun no hay datos para mostrar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())}function A(o,a){1&o&&(e.TgZ(0,"ion-chip",16),e.TgZ(1,"ion-label"),e._uU(2,"Enviado"),e.qZA(),e.qZA())}function C(o,a){1&o&&(e.TgZ(0,"ion-chip",17),e.TgZ(1,"ion-label"),e._uU(2,"Pendiente"),e.qZA(),e.qZA())}const q=function(o){return["/estimate-detail/",o]};function v(o,a){if(1&o&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-card-subtitle"),e.YNc(5,A,3,0,"ion-chip",10),e.YNc(6,C,3,0,"ion-chip",11),e.qZA(),e.qZA(),e.TgZ(7,"ion-card-content"),e.TgZ(8,"ion-grid",12),e.TgZ(9,"ion-row"),e.TgZ(10,"ion-col",13),e._uU(11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(12,"img",14),e.TgZ(13,"ion-button",15),e._uU(14," Click para ver detalles "),e.qZA(),e.qZA()),2&o){const t=a.$implicit,i=e.oxw();e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",t.status),e.xp6(1),e.Q6J("ngIf",!t.status),e.xp6(5),e.xDo(" ",t.make," ",t.model," ",t.year," . ",t.email," . ",t.phone," "),e.xp6(1),e.Q6J("src",i.IMG_URL+t.images[0],e.LSH),e.xp6(1),e.Q6J("routerLink",e.VKq(10,q,t.id))}}function x(o,a){1&o&&(e.TgZ(0,"div",18),e.TgZ(1,"ion-button"),e._uU(2," < "),e.qZA(),e.TgZ(3,"ion-button"),e._uU(4," 1 "),e.qZA(),e.TgZ(5,"ion-button"),e._uU(6," 2 "),e.qZA(),e.TgZ(7,"ion-button"),e._uU(8," 3 "),e.qZA(),e.TgZ(9,"ion-button"),e._uU(10," > "),e.qZA(),e.qZA())}const b=[{path:"",component:(()=>{class o{constructor(t,i){this.estimationService=t,this.modalController=i,this.estimations=[],this.estimationsShowed=[],this.IMG_URL=f.N.IMG_URL+"/"}ngOnInit(){this.getAll()}getAll(){this.estimationService.getAll().subscribe(t=>{this.estimations=t.data,this.estimationsShowed=[...this.estimations]})}search(t){this.estimationsShowed=""!=t.detail.value?this.estimations.filter(i=>i.name.toLowerCase().indexOf(t.detail.value.toLowerCase())>-1):[...this.estimations]}goToCreate(){return(0,p.mG)(this,void 0,void 0,function*(){console.log("creando estimado");const t=yield this.modalController.create({component:_,cssClass:"custom-modal"});yield t.present();const{data:i}=yield t.onDidDismiss();i&&this.getAll()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.Q),e.Y36(n.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-estimates"]],decls:8,vars:4,consts:[[3,"fullscreen"],[3,"click"],["slot","start","name","add-circle"],["placeholder","Buscar","inputmode","decimal","type","decimal","color","medium",3,"ionChange"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","pagination",4,"ngIf"],["color","medium"],[1,"ion-text-center"],["slot","start","name","warning-outline","color","warning","size","lg"],["color","secondary",4,"ngIf"],["color","warning",4,"ngIf"],["fixed",""],["size","9"],["alt","",3,"src"],["shape","round",1,"details-button",3,"routerLink"],["color","secondary"],["color","warning"],[1,"pagination"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-button",1),e.NdJ("click",function(){return i.goToCreate()}),e._UZ(2,"ion-icon",2),e._uU(3," Crear estimado "),e.qZA(),e.TgZ(4,"ion-searchbar",3),e.NdJ("ionChange",function(m){return i.search(m)}),e.qZA(),e.YNc(5,T,7,0,"ion-card",4),e.YNc(6,v,15,12,"ion-card",5),e.YNc(7,x,11,0,"div",6),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngIf",0===i.estimations.length),e.xp6(1),e.Q6J("ngForOf",i.estimationsShowed),e.xp6(1),e.Q6J("ngIf",!1))},directives:[n.W2,n.YG,n.gu,n.VI,n.j9,c.O5,c.sg,n.PM,n.Zi,n.Dq,n.tO,n.FN,n.jY,n.Nd,n.wI,n.YI,g.rH,n.hM,n.Q$],styles:["img[_ngcontent-%COMP%]{bottom:0;height:100%;max-width:225px;position:absolute;right:0;object-fit:cover}ion-button[_ngcontent-%COMP%]{float:right}.details-button[_ngcontent-%COMP%]{display:none;position:absolute;top:calc(50% - 20px);left:calc(50% - 125px);width:250px;height:40px}ion-card[_ngcontent-%COMP%]:hover   .details-button[_ngcontent-%COMP%]{display:block!important}.pagination[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:nowrap;align-content:center;justify-content:center;margin:25px 0}"]}),o})()}];let E=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(b)],g.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,s.u5,n.Pc,E]]}),o})()}}]);