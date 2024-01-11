import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShawarmaComponent } from './comps/shawarma/shawarma.component';
import { ChumusComponent } from './comps/chumus/chumus.component';
import { ChamutzimComponent } from './comps/chamutzim/chamutzim.component';
import { ChipsComponent } from './comps/chips/chips.component';

@NgModule({
  declarations: [
    AppComponent,
    ShawarmaComponent,
    ChumusComponent,
    ChamutzimComponent,
    ChipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
