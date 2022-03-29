import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, ModalController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { EstimationsService } from '../../services/estimations.service';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';
import { EstimateModalComponent } from './estimate-modal/estimate-modal.component';
import { NotesModalComponent } from './notes-modal/notes-modal.component';

@Component({
  selector: 'app-estimate-detail',
  templateUrl: './estimate-detail.page.html',
  styleUrls: ['./estimate-detail.page.scss'],
})
export class EstimateDetailPage implements OnInit {
  IMG_URL = environment.IMG_URL + '/'
  estimate: any;
  estimationId;
  sliderTwo: any;

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };

  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private estimationService: EstimationsService
  ) {

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
    });;
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: EstimateModalComponent,
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
    return await modal.present();
  }

  async presentNotesModal() {
    const modal = await this.modalController.create({
      component: NotesModalComponent,
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
    return await modal.present();
  }
  
  async presentLightboxModal(image: string) {
    const modal = await this.modalController.create({
      component: LightboxComponent,
      componentProps: {
        'image': image,
      },
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  getEstimation() {
    return this.estimationService.getById(this.estimationId).subscribe((res: any) => {
      console.log(res);
      this.estimate = res.data;
      console.log(res.data.images);
      
      this.sliderTwo.slidesItems = res.data.images.map(img => this.IMG_URL + img);
    })
  }
}
