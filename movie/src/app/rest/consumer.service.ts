import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { LoaderService } from '../components/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  constructor(
    private httpClient: HttpClient,
    private loaderService: LoaderService
  ) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  getApi(url: string, extra = ''): Promise<object> {
    this.loaderService.activateLoader.next(true);
    url =
      url +
      `?${extra}&api_key=${environment.key}&language=${environment.language}`;
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

  postApi(url: string, data: object): Promise<object> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, data, this.httpOptions).subscribe(
        (data) => {
          resolve(data['results']);
        },
        (error) => {
          this.errorHandler(error);
          reject(error);
        }
      );
    });
  }

  putApi(url: string, data: object): Promise<object> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(url, data, this.httpOptions).subscribe(
        (data) => {
          resolve(data['results']);
        },
        (error) => {
          this.errorHandler(error);
          reject(error);
        }
      );
    });
  }

  deleteApi(url: string, data: object): Promise<object> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(url, this.httpOptions).subscribe(
        (data) => {
          resolve(data['results']);
        },
        (error) => {
          this.errorHandler(error);
          reject(error);
        }
      );
    });
  }

  errorHandler(error) {
    console.log(error);
  }
}
