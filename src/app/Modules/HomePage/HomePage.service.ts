import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IMovie from 'src/app/Models/IMovie';
import IQueryResult from 'src/app/Models/IQueryResult';

const initial: IQueryResult<IMovie> = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private _trendingMovies = new BehaviorSubject<IQueryResult<IMovie>>(initial);
  private baseUrl = 'https://api.themoviedb.org/3';
  readonly trendingMovies = this._trendingMovies.asObservable();

  constructor(private http: HttpClient) {}

  get trendingMovie() {
    return this._trendingMovies.asObservable();
  }

  public fetchMovies() {
    this.http
      .get<IQueryResult<IMovie>>(
        `${this.baseUrl}/trending/all/day?api_key=d58f939339ad09e15d02da6181e38546`
      )
      .subscribe(
        (data) => {
          this._trendingMovies.next(data);
        },
        (error) => console.log('Error')
      );
  }
}
