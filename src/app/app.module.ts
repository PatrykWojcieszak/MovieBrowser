import { InputComponent } from './Shared/Input/Input.component';
import { HomePageComponent } from './Modules/HomePage/HomePage/HomePage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePageComponent, InputComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
