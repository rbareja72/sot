import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './qa/menu/menu.component';
import { ContentComponent } from './qa/content/content.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { QaComponent } from './qa/qa.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    HeaderComponent,
    MainComponent,
    QaComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
