import { Injectable } from '@angular/core';

import { ConsumerService } from './../../rest/consumer.service';

import { IPelicula } from './../../models/pelicula.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListMoviesConsumerService {
  constructor(private consumerService: ConsumerService) {}

  getListMovies(page: number) {
    return this.consumerService.getApi(
      environment.url + environment.now,
      'page=' + page
    );
  }
}
