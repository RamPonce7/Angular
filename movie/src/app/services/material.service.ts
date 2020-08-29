import { Injectable } from '@angular/core';

declare var M;

declare var $;

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor() {}

  M() {
    return M;
  }

  autoInit() {
    M.AutoInit();
  }

  openModal(clase: string) {
    M.Modal.getInstance($('.' + clase)).open();
  }

  initCarousel(clase: string) {
    $('.' + clase).carousel();
  }
}
