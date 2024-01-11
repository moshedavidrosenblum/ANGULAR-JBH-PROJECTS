import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChipsComponent } from './comps/chips/chips.component';
import { CoffeComponent } from './comps/coffe/coffe.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { CanActivatChipsService } from './services/guards/can-activat-chips.service';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { LogInComponent } from './comps/log-in/log-in.component';









const routes: Routes = [

//  ש לעשות קישור לדף
  { path: 'coffe', component: CoffeComponent },
  // קישור לדף ולחסום את הגישה לדף
  { path: 'chips', component: ChipsComponent, canActivate:[CanActivatChipsService]  },

  // הנתיב הזה נותן לי לשלוח מפה נתונים לדף
  { path: 'data-title',
    component:DataTitleComponent,
    data:{title:'moshe rosenblum' } 
},

// הנתיב הזה מביא נתונים מהשרת
{path: 'user/:moo', component:JsonAppUserComponent},

//זה הקומפוננטה שתחסום את מי שלא עבר בלוגאין
{path:'login', component:LogInComponent},




// זה גורם לי להיות בדף דיפולטיבי
{ path: '', redirectTo:"/chips", pathMatch:"full"},
{ path: '**', component: ChipsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
