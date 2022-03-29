import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimateDetailPageRoutingModule } from './estimate-detail-routing.module';

import { EstimateDetailPage } from './estimate-detail.page';
import { NotesModalComponent } from './notes-modal/notes-modal.component';
import { EstimateModalComponent } from './estimate-modal/estimate-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EstimateDetailPageRoutingModule,
  ],
  declarations: [
    EstimateDetailPage,
    NotesModalComponent,
    EstimateModalComponent
  ]
})
export class EstimateDetailPageModule {}
