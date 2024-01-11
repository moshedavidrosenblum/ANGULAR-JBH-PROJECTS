import { Directive ,ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

@Input('appHighlight') myhilitColor:string

private el:HTMLElement

  constructor(el:ElementRef) {
    this.el=el.nativeElement;
    console.log('HighlightDirective');
   }
   @HostListener('mouseenter') onMouseEnter(){
     this.highlight(this.myhilitColor || 'red')
    
   }
   @HostListener('mouseleave') onMouseleave(){
    this.highlight(this.myhilitColor || 'blue')

   
  }

   private highlight(color:string){
     this.el.style.backgroundColor=color;
    
     
   }

}
