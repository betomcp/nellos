import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryCardComponent } from './history-card/history-card.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    HistoryCardComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HistoryModule { }
