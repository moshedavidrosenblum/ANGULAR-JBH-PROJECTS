import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsComponent } from './comps/chips/chips.component';
import { CoffeComponent } from './comps/coffe/coffe.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './comps/log-in/log-in.component';






@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    CoffeComponent,
    DataTitleComponent,
    JsonAppUserComponent,
    LogInComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
