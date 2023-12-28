import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: string | null): string {
    return value?  value.replace(',', '.') : '';
  }

}
