import { Directive,ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[appHomePage]'
})
export class HomePageDirective {
  private el:HTMLElement

  constructor(ref:ElementRef) {
    this.el=ref.nativeElement; 
  }

  @HostListener('mouseenter') onMouse(){
    this.el.style.backgroundColor="yellow"       /*   borderRadius="50%" */

    /* this.el.style.fontSize='40em' */
  }

  @HostListener('click') onMo(){
    /* this.el.style. */
  }

}
