import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(2).replace('.', ',');
  }

}
