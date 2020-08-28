import { Component, OnInit } from '@angular/core';
import { ListMoviesConsumerService } from './list-movies-consumer.service';
import { IPelicula } from '../../models/pelicula.interface';

declare var M;

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  peliculas: IPelicula[];
  page: number = 1;
  constructor(private listMoviesConsumerService: ListMoviesConsumerService) {
    this.loadData();
  }

  loadData() {
    this.listMoviesConsumerService
      .getListMovies(this.page)
      .then((peliculas: IPelicula[]) => {
        this.peliculas = peliculas;
      });
  }

  ngOnInit(): void {
    M.AutoInit();
  }
}
