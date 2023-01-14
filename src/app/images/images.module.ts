import { SharedModule } from './../shared/shared.module';
import { ImagesRoutingModule } from './images-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    SharedModule
  ]
})
export class ImagesModule { }
