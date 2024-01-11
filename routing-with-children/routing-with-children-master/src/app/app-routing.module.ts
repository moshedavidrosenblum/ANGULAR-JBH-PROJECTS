import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShawarmaComponent } from './comps/shawarma/shawarma.component';
import { ChumusComponent } from './comps/chumus/chumus.component';
import { ChamutzimComponent } from './comps/chamutzim/chamutzim.component';
import { ChipsComponent } from './comps/chips/chips.component';


const routes: Routes = [
  {path:'shawrma', component: ShawarmaComponent,
children:[
  {path:'',redirectTo:'./chumus',pathMatch:'full'},
  {path: 'chumus',component:ChumusComponent},
  {path: 'chamutzim',component: ChamutzimComponent},
  {path: 'chips',component: ChipsComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
