import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unCapital'
})
export class UnCapitalPipe implements PipeTransform {

  transform(name: string): string {
    return name[0].toLowerCase() + name.toLowerCase() ;
  }

}
