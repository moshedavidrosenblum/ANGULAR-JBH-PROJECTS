import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlbumComponent } from './comps/items/album/album.component';
import { HomePageComponent } from './comps/pages/home-page/home-page.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { PostsComponent } from './comps/pages/posts/posts.component';
import { ToDosComponent } from './comps/pages/to-dos/to-dos.component';
import { UsersComponent } from './comps/pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { UserComponent } from './comps/items/user/user.component';
import { HeaderComponent } from './comps/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PostsDirective } from './directives/posts.directive';
import { HomePageDirective } from './directives/home-page.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './modules/material-module';




@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    HomePageComponent,
    LoginComponent,
    PostsComponent,
    ToDosComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    HighlightDirective,
    PostsDirective,
    HomePageDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule ,
    MatModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
