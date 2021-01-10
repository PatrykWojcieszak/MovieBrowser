import { MovieDetailsService } from './../../Core/API/MovieDetails.service';
import { Injectable } from '@angular/core';
import IMovieDetails from 'src/app/Models/IMovieDetails';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class EntertainmentDetailsService {
  private _movieDetails = new BehaviorSubject<IMovieDetails>(
    movieDetailsInitial
  );

  readonly movieDetails = this._movieDetails.asObservable();

  constructor(private apiService: MovieDetailsService) {}

  get getMovieDetails() {
    return this._movieDetails.asObservable();
  }

  public fetchMovieDetails(id: string) {
    this.apiService.GetDetails(id).subscribe((res: any) => {
      this._movieDetails.next(res);
    });
  }
}
