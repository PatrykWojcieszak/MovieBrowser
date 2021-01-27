import { Injectable } from '@angular/core';
import IMovieDetails from 'src/app/Models/IMovieDetails';
import { BehaviorSubject } from 'rxjs';
import IMovie from 'src/app/Models/IMovie';
import IQueryRes from 'src/app/Models/IQueryRes';
import ICredits from 'src/app/Models/ICredits';
import IExternalIds from 'src/app/Models/IExternalIds';
import { MovieDetailsApiService } from 'src/app/Core/API/MovieDetailsApi.service';

const movieDetailsInitial = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: {},
  budget: 0,
  genres: [],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: '',
  poster_path: '',
  production_companies: [],
  production_countries: [],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const movieInitial: IQueryRes<IMovie> = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const creditsInitial: ICredits = {
  id: 0,
  cast: [],
  crew: [],
};

const externalIdsInitial = {
  imdb_id: '',
  facebook_id: '',
  instagram_id: '',
  twitter_id: '',
  id: 0,
};

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  private _movieDetails = new BehaviorSubject<IMovieDetails>(
    movieDetailsInitial
  );
  private _recommended = new BehaviorSubject<IQueryRes<IMovie>>(movieInitial);
  private _credits = new BehaviorSubject<ICredits>(creditsInitial);
  private _externalIds = new BehaviorSubject<IExternalIds>(externalIdsInitial);

  readonly movieDetails = this._movieDetails.asObservable();
  readonly recommended = this._recommended.asObservable();
  readonly credits = this._credits.asObservable();
  readonly externalIds = this._externalIds.asObservable();

  constructor(private apiService: MovieDetailsApiService) {}

  get getMovieDetails() {
    return this._movieDetails.asObservable();
  }

  get getRecommendations() {
    return this._recommended.asObservable();
  }

  get getCredits() {
    return this._credits.asObservable();
  }

  get getExternalIds() {
    return this._externalIds.asObservable();
  }

  public fetchMovieDetails(id: string) {
    this.apiService.GetDetails(id).subscribe((res: any) => {
      this._movieDetails.next(res);
    });
  }

  public fetchRecommendations(id: string) {
    this.apiService.GetRecommendations(id).subscribe((res: any) => {
      this._recommended.next(res);
    });
  }

  public fetchCredits(id: string) {
    this.apiService.GetCredits(id).subscribe((res: any) => {
      this._credits.next(res);
    });
  }

  public fetchExternalId(id: string) {
    this.apiService.GetExternalIds(id).subscribe((res: any) => {
      this._externalIds.next(res);
    });
  }
}
