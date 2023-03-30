import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsComponent } from './awards/awards.component';
import { AwardsRoutingModule } from './awards-routing.module';



@NgModule({
  declarations: [
    AwardsComponent
  ],
  imports: [
    CommonModule,
    AwardsRoutingModule,
    SharedModule
  ],
  exports: [
    AwardsComponent
  ]
})
export class AwardsModule { }
