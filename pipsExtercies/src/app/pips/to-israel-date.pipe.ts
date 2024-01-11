import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIsraelDate'
})
export class ToIsraelDatePipe implements PipeTransform {

  transform(mydate: Date): string {

    return mydate.getDay()+"." + mydate.getMonth() + " ." + mydate.getFullYear() ;
  }

}
