import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPelicula } from '../../../models/pelicula.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalDetallePeliculaService {
  peliculaSelected: Subject<IPelicula> = new Subject();

  constructor() {}
}
