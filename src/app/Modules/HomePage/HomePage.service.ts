import { MovieApiService } from './../../Core/API/MovieApi.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IEntertainment from 'src/app/Models/IEntertainment';
import IQueryRes from 'src/app/Models/IQueryRes';

const initial: IQueryRes<IEntertainment> = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private _trending = new BehaviorSubject<IQueryRes<IEntertainment>>(initial);
  private _topRated = new BehaviorSubject<IQueryRes<IEntertainment>>(initial);
  private _popular = new BehaviorSubject<IQueryRes<IEntertainment>>(initial);
  private _upcoming = new BehaviorSubject<IQueryRes<IEntertainment>>(initial);
  private _searchResult = new BehaviorSubject<IQueryRes<IEntertainment>>(
    initial
  );

  readonly trendingMovies = this._trending.asObservable();
  readonly topRatedMovies = this._topRated.asObservable();
  readonly popularMovies = this._popular.asObservable();
  readonly upcomingMovies = this._upcoming.asObservable();
  readonly searchResult = this._upcoming.asObservable();

  constructor(private movieApi: MovieApiService) {}

  get getTrending() {
    return this._trending.asObservable();
  }

  get getUpcoming() {
    return this._upcoming.asObservable();
  }

  get getPopular() {
    return this._popular.asObservable();
  }

  get getTopRated() {
    return this._topRated.asObservable();
  }

  get getSearchValue() {
    return this._searchResult.asObservable();
  }

  public fetchTrending(timeWindow: string) {
    this.movieApi.GetTrending(timeWindow).subscribe((res: any) => {
      this._trending.next(res);
    });
  }

  public fetchUpcoming(type: string) {
    this.movieApi.GetUpcomingMovies(type).subscribe((res: any) => {
      this._upcoming.next(res);
    });
  }

  public fetchTopRated(type: string) {
    this.movieApi.GetTopRatedMovies(type).subscribe((res: any) => {
      this._topRated.next(res);
    });
  }

  public fetchPopular(type: string) {
    this.movieApi.GetPopularMovies(type).subscribe((res: any) => {
      this._popular.next(res);
    });
  }

  public search(query: string) {
    this.movieApi.Search(query).subscribe((res: any) => {
      this._searchResult.next(res);
    });
  }
}
