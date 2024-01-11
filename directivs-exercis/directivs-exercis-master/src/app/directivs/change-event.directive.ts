import { Directive, ElementRef, HostListener } from '@angular/core';
import { SerlectServiseService } from '../srv/serlect-servise.service';

@Directive({
  selector: '[appChangeEvent]'
})

/* public Svc:SerlectServiseService */
export class ChangeEventDirective {

  private el:HTMLElement

  constructor(el:ElementRef,public Svc:SerlectServiseService) {
    this.el=el.nativeElement
    /* this.el=el.nativeElement */
   }
   @HostListener('change', ['$event'])moshe(eve){
   
  
    this.Svc.selectedTora=eve.target.value
    
   }

}
