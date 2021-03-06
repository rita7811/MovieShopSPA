import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MovieDetailsComponent } from './Public/movie-details/movie-details.component';
import { CastDetailsComponent } from './Public/cast-details/cast-details.component';
import { MoviesModule } from './Public/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { GenreModule } from './Public/genre/genre.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
// import { CurrencyPipe } from'@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    CastDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    MoviesModule,
    GenreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
