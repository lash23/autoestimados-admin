import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LightboxComponent } from './lightbox/lightbox.component';
import { CreateEstimateModaleComponent } from './create-estimate-modale/create-estimate-modale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LightboxComponent,
    CreateEstimateModaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LightboxComponent,
    CreateEstimateModaleComponent,
  ]
})
export class SharedModule { }
