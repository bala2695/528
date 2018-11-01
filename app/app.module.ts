import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    
    AboutComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'about',component:AboutComponent},
      {path:'new',component:NewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
