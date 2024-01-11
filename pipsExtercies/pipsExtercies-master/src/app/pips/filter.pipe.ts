import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( arr: string[],somthing:string):string[] {
   
    return arr.filter((str)=>{str.includes(somthing)});
  }

}
