import {Component, EventEmitter, LOCALE_ID, Input, OnInit, Output} from '@angular/core';
import {MacaroonsType} from "../../types/macaroons.type";
import '@angular/common/locales/ru';



@Component({
  selector: 'macaroon',
  templateUrl: './macaroon.component.html',
  styleUrls: ['./macaroon.component.less']
})
export class MacaroonComponent implements OnInit {

  @Input() macaroon!: MacaroonsType;
  @Output() addMacaroonToCartEvent: EventEmitter<MacaroonsType> = new EventEmitter<MacaroonsType>();

  ngOnInit() {
    this.setLocale('ru');
  }

  addMacaroonToCart() {
    this.addMacaroonToCartEvent.emit(this.macaroon)
    alert(`${this.macaroon.name} добавлен в корзину!`)
  }

  setLocale(locale: string) {
    if (locale) {
      document.documentElement.lang = locale;
      this.setLocaleId(locale);
    }
  }

  setLocaleId(locale: string) {
    if (locale) {
      document.documentElement.lang = locale;
      document.documentElement.setAttribute('lang', locale);
      document.documentElement.setAttribute('xml:lang', locale);
    }
  }
}
