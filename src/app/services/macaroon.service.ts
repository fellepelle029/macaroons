import { Injectable } from '@angular/core';
import {MacaroonsType} from "../types/macaroons.type";

@Injectable({
  providedIn: 'root'
})
export class MacaroonService {

  constructor() { }

  getMacaroons(): MacaroonsType[] {
    return [
      {
        image: '1.png',
        name: 'Макарун с малиной',
        quantity: 1,
        price: 1.70,
      },
      {
        image: '2.png',
        name: 'Макарун с манго',
        quantity: 1,
        price: 1.70,
      },
      {
        image: '3.png',
        name: 'Пирог с ванилью',
        quantity: 1,
        price: 1.70,
      },
      {
        image: '4.png',
        name: 'Пирог с фисташками',
        quantity: 1,
        price: 1.70,
      },
    ];
  }



}
