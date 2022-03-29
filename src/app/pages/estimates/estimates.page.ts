import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EstimationsService } from '../../services/estimations.service';
import { CreateEstimateModaleComponent } from '../../shared/create-estimate-modale/create-estimate-modale.component';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.page.html',
  styleUrls: ['./estimates.page.scss'],
})
export class EstimatesPage implements OnInit {

  estimations: any[] = [];
  estimationsShowed: any[] = [];
  constructor(
    private estimationService: EstimationsService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.estimationService.getAll().subscribe((res: any) => {
      this.estimations = res.data;
      this.estimationsShowed = [...this.estimations];
    })
  }

  search(event) {
    if (event.detail.value != '') {
      this.estimationsShowed = this.estimations.filter(e => {
        return e.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
      });
    } else {
      this.estimationsShowed = [...this.estimations];
    }
  }

  async goToCreate() {
    console.log('creando estimado');
      const modal = await this.modalController.create({
        component: CreateEstimateModaleComponent,
        cssClass: 'custom-modal',

      })

      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data) {
        this.getAll();
      }
  }
}
