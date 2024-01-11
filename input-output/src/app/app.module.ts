import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OficeComponent } from './comps/ofice/ofice.component';
import { ManegerComponent } from './comps/maneger/maneger.component';
import { WorkerComponent } from './comps/worker/worker.component';
import { SecreteryComponent } from './comps/secretery/secretery.component';
import { FactoryComponent } from './c/factory/factory.component';
import { ChoclateComponent } from './c/choclate/choclate.component';
import { CandysComponent } from './c/candys/candys.component';

import { ProfComponent } from './b/prof/prof.component';
import { UniverComponent } from './b/univer/univer.component';

import { TalmidimComponent } from './a/talmidim/talmidim.component';
import { RosYeshivaComponent } from './a/ros-yeshiva/ros-yeshiva.component';
import { RamimComponent } from './a/ramim/ramim.component';
import { MashgichimComponent } from './a/mashgichim/mashgichim.component';
import { MakakComponent } from './a/makak/makak.component';
import { TabachComponent } from './a/tabach/tabach.component';
import { MenakeComponent } from './a/menake/menake.component';
import { MazkiraComponent } from './a/mazkira/mazkira.component';
import { MefakeachComponent } from './a/mefakeach/mefakeach.component';
import { SharatComponent } from './a/sharat/sharat.component';
import { AvrechComponent } from './a/avrech/avrech.component';
import { MadrichChatanimComponent } from './a/madrich-chatanim/madrich-chatanim.component';
import { ShomerComponent } from './a/shomer/shomer.component';
import { AaYeshivaComponent } from './a/aa-yeshiva/aa-yeshiva.component';
import { RabanitComponent } from './a/rabanit/rabanit.component';

@NgModule({
  declarations: [
    AppComponent,
    OficeComponent,
    ManegerComponent,
    WorkerComponent,
    SecreteryComponent,
    FactoryComponent,
    ChoclateComponent,
    CandysComponent,
  
    ProfComponent,
    UniverComponent,
    TalmidimComponent,
    RosYeshivaComponent,
    RamimComponent,
    MashgichimComponent,
    MakakComponent,
    TabachComponent,
    MenakeComponent,
    MazkiraComponent,
    MefakeachComponent,
    SharatComponent,
    AvrechComponent,
    MadrichChatanimComponent,
    ShomerComponent,
    AaYeshivaComponent,
    RabanitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
