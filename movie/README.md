# Movie by RamPonce7

For this project i used: 

```
Angular 7+
Meterializecss
API themoviedb
```


![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_home.PNG)


## Service for API HTTP

Only one service `consumer.service.ts` for API requests using Promise 

```typescript
getApi(url: string): Promise<object> {
    this.loaderService.activateLoader.next(true);
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, this.httpOptions).subscribe(
        (data) => {
          this.loaderService.activateLoader.next(false);
          resolve(data['results']);
        },
        (error) => {
          this.loaderService.activateLoader.next(false);
          this.errorHandler(error);
          reject(error);
        }
      );
    });
  }

```

## @Inputs

Sending movie object with @Input `pelicula-card.component`

```typescript
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

```

```html

<div class="row">
  <div class="col s12 m3 l2" *ngFor="let pelicula of peliculas">
    <app-pelicula-card [pelicula] = pelicula></app-pelicula-card>
  </div>

  <div class="col s12 center">
    <button (click)="loadData()" class="btn-large">Cargar más</button>
  </div>
</div>

```


![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_card.PNG)



![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_detail.PNG)


![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_loader.PNG)







## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
