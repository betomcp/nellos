import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HistoryComponent } from './home/components/history/history.component';
import { MenuComponent } from './home/components/menu/menu.component';
import { EventsComponent } from './home/components/events/events.component';
import { DeliveryComponent } from './home/components/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HistoryComponent,
    MenuComponent,
    EventsComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
