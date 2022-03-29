import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { EstimationsService } from '../../../services/estimations.service';

@Component({
  selector: 'app-notes-modal',
  templateUrl: './notes-modal.component.html',
  styleUrls: ['./notes-modal.component.scss'],
})
export class NotesModalComponent implements OnInit {

  @Input() notes: string[];
  @Input() estimationId: number;

  notesForm: FormGroup;
  constructor(
    private toastController: ToastController,
    private estimationsService: EstimationsService,
    private fb: FormBuilder,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.initNotesForm();
  }

  async toasSuccess() {
    const toast = await this.toastController.create({
      message: 'Nota guardada con Exito!.',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }
  async toasError() {
    const toast = await this.toastController.create({
      message: 'Hubo un error al guardar la nota!.',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  initNotesForm() {
    this.notesForm = this.fb.group({
      notes: ['', Validators.required],
    })
  }

  saveNote() {
    return this.estimationsService.saveNote(this.notesForm.value, this.estimationId)
    .subscribe((res) => {
      this.toasSuccess();
      this.modalController.dismiss(res);
    }, err => {
      console.log(err);
      this.toasError();
    })
  }
}
