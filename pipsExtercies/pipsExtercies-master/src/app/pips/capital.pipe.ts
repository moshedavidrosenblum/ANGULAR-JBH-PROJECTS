import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(name: string): string {
    
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
  }

}
