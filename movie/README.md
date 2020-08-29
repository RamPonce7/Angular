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

Sending movie object with @Input 

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

<div class="card z-depth-2 waves-light" (click)="openModal()">
    <div
      class="w100 portada" style="background: url(https://image.tmdb.org/t/p/w500/{{pelicula.poster_path}});"
    >
    <div class="top-back">

    </div>
      <span class="white-text rating">{{pelicula.vote_average}} <i class="material-icons amber-text">star</i></span>
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
