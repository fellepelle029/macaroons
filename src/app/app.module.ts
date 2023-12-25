import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './components/cart/cart.component';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { MacaroonComponent } from './components/macaroon/macaroon.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FormatPricePipe,
    AdvantagesComponent,
    MacaroonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
