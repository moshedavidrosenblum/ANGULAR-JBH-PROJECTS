import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalPipe } from './pips/capital.pipe';
import { GetFuncPipeComponent } from './comps/get-func-pipe/get-func-pipe.component';
import { ToIsraelDatePipe } from './pips/to-israel-date.pipe';
import { AllCapitalPipe } from './pips/all-capital.pipe';
import { UnCapitalPipe } from './pips/un-capital.pipe';
import { SayHalloPipe } from './pips/say-hallo.pipe';
import { IncresePipe } from './pips/increse.pipe';
import { DecresePipe } from './pips/decrese.pipe';
import { TopTenPipe } from './pips/top-ten.pipe';
import { FilterPipe } from './pips/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalPipe,
    GetFuncPipeComponent,
    ToIsraelDatePipe,
    AllCapitalPipe,
    UnCapitalPipe,
    SayHalloPipe,
    IncresePipe,
    DecresePipe,
    TopTenPipe,
    FilterPipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
