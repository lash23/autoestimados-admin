import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { EstimationsService } from '../../services/estimations.service'

@Component({
  selector: 'app-create-estimate-modale',
  templateUrl: './create-estimate-modale.component.html',
  styleUrls: ['./create-estimate-modale.component.scss'],
})
export class CreateEstimateModaleComponent implements OnInit {
  dropzoneFiles: File[] = [];
  estimationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private estimationServicesService: EstimationsService,
    private modalCtrl: ModalController,
    private toastController: ToastController
  ) {
  }
  
  ngOnInit() {
    this.initEstimationForm();
  }

  onDropzoneChange(event: any) {
    console.log('event.addedFiles', event.addedFiles);
    
    this.dropzoneFiles.push(...event.addedFiles);
    this.estimationForm.controls.images.setValue(this.dropzoneFiles)
    console.log('estimationForm', this.estimationForm.controls.images.value);
    
  }

  initEstimationForm() {
    this.estimationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      images: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      budget: [''],
    })
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
    })
  }

  cancel() {
    console.log('cancel');
    this.modalCtrl.dismiss();
  }

  async showSuccess() {
    const toast = await this.toastController.create({
      message: `Estimado para ${this.estimationForm.controls.name.value} creado con exito.`,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  onDropzoneRemove(file) {
    console.log('remove', file);
    
  }
}
