import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increse'
})
export class IncresePipe implements PipeTransform {

  transform(number:number): number {
    return (number + 1);
  }

}
