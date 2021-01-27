import { MovieSearchInfoComponent } from './Modules/HomePage/HomePage/MovieSearchInfo/MovieSearchInfo.component';
import { GetGenrePipe } from './Shared/Pipes/GetGenre.pipe';
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
import { HeaderComponent } from './Modules/MovieDetails/MovieDetails/Header/Header.component';
import { CreditCardComponent } from './Modules/MovieDetails/MovieDetails/CreditCard/CreditCard.component';
import { MainDetailsComponent } from './Modules/MovieDetails/MovieDetails/MainDetails/MainDetails.component';
import { SubDetailsComponent } from './Modules/MovieDetails/MovieDetails/SubDetails/SubDetails.component';
import { MovieDetailsComponent } from './Modules/MovieDetails/MovieDetails/MovieDetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InputComponent,
    MovieCardComponent,
    ButtonComponent,
    ShortenStringPipe,
    GetGenrePipe,
    MovieSearchInfoComponent,
    MovieDetailsComponent,
    HeaderComponent,
    MainDetailsComponent,
    SubDetailsComponent,
    CreditCardComponent,
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
