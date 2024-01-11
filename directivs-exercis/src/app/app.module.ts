import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './comps/my/my.component';
import { HighlightDirective } from './directivs/highlight.directive';
import { EnlargeDirective } from './directivs/enlarge.directive';
import { VisibilityDirective } from './directivs/visibility.directive';
import { GeneralDirective } from './directivs/general.directive';
import { InputEventDirective } from './directivs/input-event.directive';
import { OnBlurDirective } from './directivs/on-blur.directive';
import { ChangeEventDirective } from './directivs/change-event.directive';
import { TikTokDirective } from './directivs/tik-tok.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HighlightDirective,
    EnlargeDirective,
    VisibilityDirective,
    GeneralDirective,
    InputEventDirective,
    OnBlurDirective,
    ChangeEventDirective,
    TikTokDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
