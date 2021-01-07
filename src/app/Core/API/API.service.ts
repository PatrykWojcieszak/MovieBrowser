import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

let baseUrl: string = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  public Get(address: string, query?: HttpParams) {
    return this.http.get(address, { params: query });
  }

  public BuildAddress(endpoint: string) {
    return baseUrl + endpoint + '?api_key=d58f939339ad09e15d02da6181e38546';
  }
}
