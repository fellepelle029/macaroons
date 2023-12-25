import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatPipe'
})
export class PhoneNumberFormatPipePipe implements PipeTransform {
  transform(value: string): string {
    if (!value || !/^\d+$/.test(value)) {
      return value;
    }

    const code = value.slice(0, 3);
    const operatorCode = value.slice(3, 5);
    const first = value.slice(5, 8);
    const second = value.slice(8, 10);
    const third = value.slice(10);

    return `+${code} (${operatorCode}) ${first}-${second}-${third}`;
  }
}
