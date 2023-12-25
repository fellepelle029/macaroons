import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reductionPipe'
})
export class ReductionPipePipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 95;
    return value.length <= maxLength ? value : value.substring(0, maxLength) + '...';
  }
}
