import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPosts]'
})
export class PostsDirective {

  private el:HTMLElement

  constructor(ref:ElementRef) {
    this.el=ref.nativeElement; 
  }

  @HostListener('mouseenter') onMouse(){
    this.el.style.borderRadius="50%"

    /* this.el.style.fontSize='40em' */
  }

  @HostListener('click') onMo(){
    /* this.el.style. */
  }

}
