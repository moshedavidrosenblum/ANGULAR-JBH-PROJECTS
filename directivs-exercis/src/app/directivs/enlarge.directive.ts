import { Directive , ElementRef, Input, HostListener} from '@angular/core';


@Directive({
  selector: '[appEnlarge]'
})
export class EnlargeDirective {

@Input('enlarge') myEnlarge:boolean;

private El:HTMLElement;

  constructor(El: ElementRef) {
    this.El=El.nativeElement;
   }

   @HostListener('click')shuki(){
     this.whenClick();
   }

  


   
  num:number=1;
  private whenClick(){
   
    this.El.style.fontSize=this.num+'em';
      this.num++
   }

   /* private whenClick2(){
    this.El.style.visibility="hidden";
   } */
   
   


}
