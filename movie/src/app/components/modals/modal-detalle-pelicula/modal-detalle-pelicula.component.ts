import { Component, OnInit } from '@angular/core';
import { ModalDetallePeliculaService } from './modal-detalle-pelicula.service';
import { IPelicula } from '../../../models/pelicula.interface';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-modal-detalle-pelicula',
  templateUrl: './modal-detalle-pelicula.component.html',
  styleUrls: ['./modal-detalle-pelicula.component.css'],
})
export class ModalDetallePeliculaComponent implements OnInit {
  pelicula: IPelicula;
  constructor(
    private modalDetallePeliculaService: ModalDetallePeliculaService,
    private M: MaterialService
  ) {}

  ngOnInit(): void {
    this.M.autoInit();
    this.modalDetallePeliculaService.peliculaSelected.subscribe(
      (pelicula: IPelicula) => {
        this.pelicula = null;
        this.pelicula = pelicula;
        this.M.openModal('modal-detalle-pelicula');
      }
    );
  }
}
