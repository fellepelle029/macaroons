import {Component, OnInit} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {MacaroonsType} from "./types/macaroons.type";
import {MacaroonService} from "./services/macaroon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public macaroons: MacaroonsType[] = [];
  public selectedProduct: MacaroonsType | null = null;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public showPresent: boolean = true;


  constructor(private macaroonService: MacaroonService) {
  }

  ngOnInit(){
    this.macaroons = this.macaroonService.getMacaroons();
  }

  public formatPrice(price: number): string {
    return price.toFixed(2).replace('.', ',');
  }

  public scrollTo(target: HTMLElement | null): void {
    target?.scrollIntoView({behavior: 'smooth'});
  }

  public orderProduct(product: MacaroonsType, target: HTMLElement | null): void {
    this.selectedProduct = product;

    const inputProduct = document.getElementById('inputProduct') as HTMLInputElement;
    if (inputProduct) {
      inputProduct.value = product.name.toUpperCase();
    }

    this.scrollTo(target);
  }

}
