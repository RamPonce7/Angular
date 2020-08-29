import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { PeliculaCardComponent } from './components/pelicula-card/pelicula-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalDetallePeliculaComponent } from './components/modals/modal-detalle-pelicula/modal-detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    PeliculaCardComponent,
    LoaderComponent,
    ModalDetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
