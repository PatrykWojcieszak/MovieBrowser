import { APIService } from './API.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private GET_TRENDING: string = '/trending/movie/';
  private GET_POPULAR: string = '/movie/popular';
  private GET_TOP_RATED: string = '/movie/top_rated';
  private GET_UPCOMING: string = '/movie/upcoming';
  private SEARCH: string = '/search/movie';

  constructor(private API: APIService) {}

  public GetTrending(timeWindow: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.GET_TRENDING}${timeWindow}`)
    );
  }

  public GetPopularMovies() {
    return this.API.Get(this.API.BuildAddress(this.GET_POPULAR));
  }

  public GetTopRatedMovies() {
    return this.API.Get(this.API.BuildAddress(this.GET_TOP_RATED));
  }

  public GetUpcomingMovies() {
    return this.API.Get(this.API.BuildAddress(this.GET_UPCOMING));
  }

  public Search(searchValue: string) {
    return this.API.Get(this.API.BuildAddress(this.SEARCH, searchValue));
  }
}
