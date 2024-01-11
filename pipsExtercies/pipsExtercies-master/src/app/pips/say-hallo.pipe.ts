import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayHallo'
})
export class SayHalloPipe implements PipeTransform {

  transform(name:string): string {
    return "hello " +name;
  }

}
