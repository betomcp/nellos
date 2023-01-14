import { HistoryRoutingModule } from './history-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryCardComponent } from './history-card/history-card.component';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HistoryCardComponent, HistoryComponent],
  imports: [CommonModule, SharedModule, HistoryRoutingModule],
})
export class HistoryModule {}
