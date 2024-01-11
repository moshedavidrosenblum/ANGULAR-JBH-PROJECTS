import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrese'
})
export class DecresePipe implements PipeTransform {

  transform(number: number): number {
    return number-1;
  }

}
