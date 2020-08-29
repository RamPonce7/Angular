import { Component, OnInit, Input } from '@angular/core';
import { IPelicula } from '../../models/pelicula.interface';
import { ModalDetallePeliculaService } from '../modals/modal-detalle-pelicula/modal-detalle-pelicula.service';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.css'],
})
export class PeliculaCardComponent implements OnInit {
  @Input() pelicula: IPelicula;

  constructor(
    private modalDetallePeliculaService: ModalDetallePeliculaService
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.modalDetallePeliculaService.peliculaSelected.next(this.pelicula);
  }
}
