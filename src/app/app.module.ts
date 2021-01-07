import { ShortenStringPipe } from './Shared/Pipes/ShortenString.pipe';
import { MovieCardComponent } from './Modules/HomePage/HomePage/MovieCard/MovieCard.component';
import { HomePageComponent } from './Modules/HomePage/HomePage/HomePage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './Shared/UI/Input/Input.component';
import { ButtonComponent } from './Shared/UI/Button/Button.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InputComponent,
    MovieCardComponent,
    ButtonComponent,
    ShortenStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
