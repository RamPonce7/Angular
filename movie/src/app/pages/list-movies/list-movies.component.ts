import { Component, OnInit } from '@angular/core';
import { ListMoviesConsumerService } from './list-movies-consumer.service';
import { IPelicula } from '../../models/pelicula.interface';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  peliculas: IPelicula[] = [];
  page: number = 0;
  constructor(
    private listMoviesConsumerService: ListMoviesConsumerService,
    private materialService: MaterialService
  ) {
    this.loadData();
  }

  loadData() {
    this.page++;
    this.listMoviesConsumerService
      .getListMovies(this.page)
      .then((peliculas: IPelicula[]) => {
        this.peliculas = this.peliculas.concat(peliculas);
        this.materialService.autoInit();
      });
  }

  ngOnInit(): void {
    this.materialService.autoInit();
  }
}
