import { MovieApiService } from './../../Core/API/MovieApi.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IMovie from 'src/app/Models/IMovie';
import IQueryRes from 'src/app/Models/IQueryRes';

const initial: IQueryRes<IMovie> = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private _trendingMovies = new BehaviorSubject<IQueryRes<IMovie>>(initial);
  private _topRatedMovies = new BehaviorSubject<IQueryRes<IMovie>>(initial);
  private _popularMovies = new BehaviorSubject<IQueryRes<IMovie>>(initial);
  private _upcomingMovies = new BehaviorSubject<IQueryRes<IMovie>>(initial);

  readonly trendingMovies = this._trendingMovies.asObservable();
  readonly topRatedMovies = this._topRatedMovies.asObservable();
  readonly popularMovies = this._popularMovies.asObservable();
  readonly upcomingMovies = this._upcomingMovies.asObservable();

  constructor(private movieApi: MovieApiService) {}

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

  public fetchTrendingMovies(timeWindow: string) {
    this.movieApi.GetTrending(timeWindow).subscribe((res: any) => {
      this._trendingMovies.next(res);
    });
  }

  public fetchUpcomingMovies() {
    this.movieApi.GetUpcomingMovies().subscribe((res: any) => {
      this._upcomingMovies.next(res);
    });
  }

  public fetchTopRatedMovies() {
    this.movieApi.GetTopRatedMovies().subscribe((res: any) => {
      this._topRatedMovies.next(res);
    });
  }

  public fetchPopularMovies(type: string) {
    this.movieApi.GetPopularMovies(type).subscribe((res: any) => {
      this._popularMovies.next(res);
    });
  }
}
