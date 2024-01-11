import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEvent]'
})
export class InputEventDirective {

  private el:HTMLElement

  constructor(private elem:ElementRef) {
    this.el=elem.nativeElement;
   }

   @HostListener('input') onMouseEnter(){
   console.log(this.elem.nativeElement.value)
   
  }

}
