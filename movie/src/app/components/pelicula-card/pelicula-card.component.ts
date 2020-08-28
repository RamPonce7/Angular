import { Component, OnInit, Input } from '@angular/core';
import { IPelicula } from '../../models/pelicula.interface';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css'],
})
export class PeliculaCardComponent implements OnInit {
  @Input() pelicula: IPelicula;

  constructor() {}

  ngOnInit(): void {}
}
