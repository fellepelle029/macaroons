import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './components/cart/cart.component';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { MacaroonComponent } from './components/macaroon/macaroon.component';
import { ButtonBgDirective } from './directives/button-bg.directive';
import { ReductionPipePipe } from './pipes/reduction.pipe.pipe';
import { PhoneNumberFormatPipePipe } from './pipes/phone-number-format.pipe.pipe';

registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FormatPricePipe,
    AdvantagesComponent,
    MacaroonComponent,
    ButtonBgDirective,
    ReductionPipePipe,
    PhoneNumberFormatPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
