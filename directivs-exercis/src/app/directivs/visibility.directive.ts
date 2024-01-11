import { Directive ,ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {

  @Input('appHighlight') myhilitColor:string

  private el:HTMLElement

  constructor(el:ElementRef) {
    this.el=el.nativeElement;
   }

   @HostListener('click') onMouseEnter(){
    this.changVisibilty(this.myhilitColor || 'hidden')
   
  }
  private changVisibilty(comand:string){
    this.el.style.visibility=comand;
  }

}
