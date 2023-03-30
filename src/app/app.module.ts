import { AwardsModule } from './awards/awards.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './home/components/history/history.component';
import { MenuComponent } from './home/components/menu/menu.component';
import { EventsComponent } from './home/components/events/events.component';
import { DeliveryComponent } from './home/components/delivery/delivery.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    MenuComponent,
    EventsComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AwardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
