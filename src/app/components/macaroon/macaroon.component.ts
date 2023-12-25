import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MacaroonsType} from "../../types/macaroons.type";

@Component({
  selector: 'macaroon',
  templateUrl: './macaroon.component.html',
  styleUrls: ['./macaroon.component.less']
})
export class MacaroonComponent {

  @Input() macaroon!: MacaroonsType;
  @Output() addMacaroonToCartEvent: EventEmitter<MacaroonsType> = new EventEmitter<MacaroonsType>();

  addMacaroonToCart() {
    this.addMacaroonToCartEvent.emit(this.macaroon)
    alert(`${this.macaroon.name} добавлен в корзину!`)
  }
}
