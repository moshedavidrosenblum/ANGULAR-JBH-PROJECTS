import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnBlur]'
})
export class OnBlurDirective {
  private el:HTMLElement

  constructor(private elem:ElementRef) {
    this.el=elem.nativeElement;
   }
   
   @HostListener('onblur') onMouseEnter(){
    alert('dont leave me');
    
  }

}
