import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  price: number = 0;
  quantity: number = 0;

  constructor() { }

}
