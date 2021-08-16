import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UserIdleModule.forRoot({ idle: 30, timeout: 30 })
  ],
  declarations: [AppComponent, HomeComponent, HeaderComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
