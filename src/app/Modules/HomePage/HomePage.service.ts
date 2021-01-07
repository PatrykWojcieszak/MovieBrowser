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
  private baseUrl = 'https://api.themoviedb.org/3';

  private _trendingMovies = new BehaviorSubject<IQueryResult<IMovie>>(initial);
  private _topRatedMovies = new BehaviorSubject<IQueryResult<IMovie>>(initial);
  private _popularMovies = new BehaviorSubject<IQueryResult<IMovie>>(initial);
  private _upcomingMovies = new BehaviorSubject<IQueryResult<IMovie>>(initial);

  readonly trendingMovies = this._trendingMovies.asObservable();
  readonly topRatedMovies = this._topRatedMovies.asObservable();
  readonly popularMovies = this._popularMovies.asObservable();
  readonly upcomingMovies = this._upcomingMovies.asObservable();

  constructor(private http: HttpClient) {}

  get getTrendingMovies() {
    return this._trendingMovies.asObservable();
  }

  get getUpcomingMovies() {
    return this._upcomingMovies.asObservable();
  }

  get getPopularMovies() {
    return this._popularMovies.asObservable();
  }

  get getTopRatedMovies() {
    return this._topRatedMovies.asObservable();
  }

  public fetchTrendingMovies() {
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

  public fetchUpcomingMovies() {
    this.http
      .get<IQueryResult<IMovie>>(
        `${this.baseUrl}/movie/upcoming?api_key=d58f939339ad09e15d02da6181e38546`
      )
      .subscribe(
        (data) => {
          this._upcomingMovies.next(data);
        },
        (error) => console.log('Error')
      );
  }

  public fetchTopRatedMovies() {
    this.http
      .get<IQueryResult<IMovie>>(
        `${this.baseUrl}/movie/top_rated?api_key=d58f939339ad09e15d02da6181e38546`
      )
      .subscribe(
        (data) => {
          this._topRatedMovies.next(data);
        },
        (error) => console.log('Error')
      );
  }

  public fetchPopularMovies() {
    this.http
      .get<IQueryResult<IMovie>>(
        `${this.baseUrl}/movie/popular?api_key=d58f939339ad09e15d02da6181e38546`
      )
      .subscribe(
        (data) => {
          this._popularMovies.next(data);
        },
        (error) => console.log('Error')
      );
  }
}
