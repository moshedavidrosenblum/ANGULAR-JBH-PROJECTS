import { Directive, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appTikTok]'
})
export class TikTokDirective  implements AfterContentChecked {

  ngAfterContentChecked(): void {




  }

  constructor() { }

}
