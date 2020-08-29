# Movie by RamPonce7

For this project i used: 

```
Angular 7+
Meterializecss
API themoviedb
```

This project was bulding in 8hrs with:

```
HttpClient
Promise
RxJS
@Input
Modals
Material Design
NgModel
*ngXXX
```

I know more things like:

```
@Output
RouterLink
Route
Guard
Sockets
Pipe
and more...
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



## RxJS for send Movie Object to Modal `pelicula-card.component`
to `modal-detalle-pelicula.component`

Using Service `ModalDetallePeliculaService `

```
peliculaSelected: Subject<IPelicula> = new Subject();
```


```
openModal() {
    this.modalDetallePeliculaService.peliculaSelected.next(this.pelicula);
  }

```

```
this.modalDetallePeliculaService.peliculaSelected.subscribe(
      (pelicula: IPelicula) => {
        this.pelicula = null;
        this.pelicula = pelicula;
        this.M.openModal('modal-detalle-pelicula');
      }
    );
```





![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_detail.PNG)


![alt text](https://github.com/RamPonce7/Angular/blob/master/imgs_projects/movies_loader.PNG)

