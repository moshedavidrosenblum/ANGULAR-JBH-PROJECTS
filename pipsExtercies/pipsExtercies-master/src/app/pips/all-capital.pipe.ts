import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allCapital'
})
export class AllCapitalPipe implements PipeTransform {
  mashu :string
  transform(name: string): string{
    return name.toUpperCase();
  }

}
