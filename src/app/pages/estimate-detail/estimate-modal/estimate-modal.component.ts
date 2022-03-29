import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { EstimationsService } from '../../../services/estimations.service';

@Component({
  selector: 'app-estimate-modal',
  templateUrl: './estimate-modal.component.html',
  styleUrls: ['./estimate-modal.component.scss'],
})
export class EstimateModalComponent implements OnInit {

  @Input() estimationId: number;
  budgetForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private estimationsService: EstimationsService,
    private fb: FormBuilder,
    public modalController: ModalController,
    ) { }

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
    })
  }

  async toasSuccess() {
    const toast = await this.toastController.create({
      message: 'Estimado creado con Exito!.',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }
  async toasError() {
    const toast = await this.toastController.create({
      message: 'Hubo un error al crear el estimado!.',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  initBudgetForm() {
    
    this.budgetForm = this.fb.group({
      budget: ['', Validators.required],
      notes: [''],
    })
    console.log('init', this.budgetForm);
  }
}
