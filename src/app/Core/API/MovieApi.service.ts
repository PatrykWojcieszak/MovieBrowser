import { APIService } from './API.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private GET_TRENDING_MOVIES: string = '/trending/all/';
  private GET_POPULAR_MOVIES: string = '/popular';
  private GET_TOP_RATED_MOVIES: string = '/movie/top_rated';
  private GET_UPCOMING_MOVIES: string = '/movie/upcoming';

  constructor(private API: APIService) {}

  public GetTrending(timeWindow: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.GET_TRENDING_MOVIES}${timeWindow}`)
    );
  }

  public GetPopularMovies(type: string) {
    return this.API.Get(
      this.API.BuildAddress(`/${type}${this.GET_POPULAR_MOVIES}`)
    );
  }

  public GetTopRatedMovies() {
    return this.API.Get(this.API.BuildAddress(this.GET_TOP_RATED_MOVIES));
  }

  public GetUpcomingMovies() {
    return this.API.Get(this.API.BuildAddress(this.GET_UPCOMING_MOVIES));
  }
}
