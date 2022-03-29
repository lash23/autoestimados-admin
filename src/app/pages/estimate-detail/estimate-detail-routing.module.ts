import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimateDetailPage } from './estimate-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EstimateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimateDetailPageRoutingModule {}
