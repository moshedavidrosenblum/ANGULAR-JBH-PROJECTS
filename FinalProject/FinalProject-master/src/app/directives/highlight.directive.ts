import { Directive ,ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

@Input('mycolor') myhilitColor:string

private el:HTMLElement

  constructor(el:ElementRef) {
    this.el=el.nativeElement;
    console.log('HighlightDirective');
   }


   @HostListener('mouseenter') onMouseEnter(){ //change clor on hover
    this.el.style.backgroundColor=this.myhilitColor;
    this.el.style.borderRadius="50%"
    
   }
   
    num:number=1;
    @HostListener('click') onMouseclick(){ //enlarge font size on click
    this.el.style.fontSize=this.num+ 'em'
    this.num++
   
  }

 
  /* private whenClick(){
   
    this.El.style.fontSize=this.num+'em';
      this.num++
   } */



   /* @HostListener('mouseenter') onMouseEnter(){
     this.highlight('red')
    
   }
   @HostListener('mouseleave') onMouseleave(){
    this.highlight(this.myhilitColor || 'blue')

   
  }

   private highlight(color:string){
     this.el.style.backgroundColor=color;
    
     
   } */

}
