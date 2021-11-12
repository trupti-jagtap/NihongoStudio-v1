import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { MiddleComponent } from './modules/middle/middle.component';
import { UpperComponent } from './modules/upper/upper.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ContactusComponent,
    MiddleComponent,
    UpperComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
