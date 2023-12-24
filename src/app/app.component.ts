import {Component, OnInit} from '@angular/core';
import {MacaroonsType} from "./types/macaroons.type";
import {MacaroonService} from "./services/macaroon.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})



export class AppComponent implements OnInit {

  public title = '';
  public macaroons: MacaroonsType[] = [];
  public selectedProduct: MacaroonsType | null = null;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';

  public showCart: boolean = true;

  constructor(private macaroonService: MacaroonService,
              private cartService: CartService) {
  }

  ngOnInit(){
    this.macaroons = this.macaroonService.getMacaroons();
    this.showCart = this.cartService.quantity !== 0;
  }

  public orderProduct(product: MacaroonsType, target: HTMLElement | null): void {
    this.selectedProduct = product;
    this.inputMacaroonNameToForm(product);
    this.addMacaroonToCart(product);
    this.scrollTo(target);
  }

  public scrollTo(target: HTMLElement | null): void {
    target?.scrollIntoView({behavior: 'smooth'});
  }

  private addMacaroonToCart(product: MacaroonsType): void {
    this.showCart = true;
    this.cartService.quantity++
    this.cartService.price = this.cartService.price + product.price
  }

  private inputMacaroonNameToForm(product: MacaroonsType): void{
    const inputProduct = document.getElementById('inputProduct') as HTMLInputElement;
    if (inputProduct) {
      inputProduct.value = product.name.toUpperCase();
    }
  }

}
