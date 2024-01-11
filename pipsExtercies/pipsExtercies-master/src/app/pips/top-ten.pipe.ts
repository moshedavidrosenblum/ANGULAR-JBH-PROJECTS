import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'util';

@Pipe({
  name: 'topTen'
})
export class TopTenPipe implements PipeTransform {


  transform(arr:string[]):string{
    let str= " ";
    
    for (let i = arr.length-1; i > arr.length-10; i--) {
      str=arr[i] +  " "+str;
   
    }
    console.log(str)
    return str;
  }

}
