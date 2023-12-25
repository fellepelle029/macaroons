import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  commonPrice: number = 0;
  macaroonsQuantity: number = 0;

  constructor() { }

}
