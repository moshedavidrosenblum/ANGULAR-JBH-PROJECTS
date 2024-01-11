import { Directive ,ElementRef,  HostListener } from '@angular/core';

@Directive({
  selector: '[appGeneral]'
})
export class GeneralDirective {
  private el:HTMLElement
  constructor(el:ElementRef) {
    this.el=el.nativeElement;
   }


   @HostListener('mouseenter') onMouseEnter(){
    this.el.style.opacity="0.5";
    
  }

  @HostListener('click') onMouseEnterlog(){
    console.log("הפעלת את הקונסול")
    
  }

  /* @HostListener('mouseenter') onMouseEnter(){
    this.el.style.opacity="0.5";
   
  } */


}
