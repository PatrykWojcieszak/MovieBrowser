import { APIService } from './API.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private GET_TRENDING: string = '/trending/all/';
  private GET_POPULAR: string = '/popular';
  private GET_TOP_RATED: string = '/top_rated';
  private GET_UPCOMING: string = '/upcoming';
  private SEARCH: string = '/search/multi';

  constructor(private API: APIService) {}

  public GetTrending(timeWindow: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.GET_TRENDING}${timeWindow}`)
    );
  }

  public GetPopularMovies(type: string) {
    return this.API.Get(this.API.BuildAddress(`/${type}${this.GET_POPULAR}`));
  }

  public GetTopRatedMovies(type: string) {
    return this.API.Get(this.API.BuildAddress(`/${type}${this.GET_TOP_RATED}`));
  }

  public GetUpcomingMovies(type: string) {
    return this.API.Get(this.API.BuildAddress(`/${type}${this.GET_UPCOMING}`));
  }

  public Search(searchValue: string) {
    return this.API.Get(this.API.BuildAddress(this.SEARCH, searchValue));
  }
}
