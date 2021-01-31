import { Component, OnInit } from '@angular/core';
import IMovieDetails from 'src/app/Models/IMovieDetails';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IMovie from 'src/app/Models/IMovie';
import IQueryRes from 'src/app/Models/IQueryRes';
import ICredits from 'src/app/Models/ICredits';
import IExternalIds from 'src/app/Models/IExternalIds';
import { MovieDetailsService } from '../MovieDetails.service';

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

const entertainmentInitial: IQueryRes<IMovie> = {
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

@Component({
  selector: 'app-MovieDetails',
  templateUrl: './MovieDetails.component.html',
  styleUrls: ['./MovieDetails.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: IMovieDetails = movieDetailsInitial;
  recommendations: IQueryRes<IMovie> = entertainmentInitial;
  credits: ICredits = creditsInitial;
  externalIds: IExternalIds = externalIdsInitial;
  movieId: string = '';

  constructor(
    private dataService: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: Params) => {
      this.movieId = paramMap.get('id');

      this.dataService.fetchMovieDetails(this.movieId);
      this.dataService.fetchRecommendations(this.movieId);
      this.dataService.fetchCredits(this.movieId);
      this.dataService.fetchExternalId(this.movieId);
    });

    this.dataService.getMovieDetails.subscribe(
      (movieDetails: IMovieDetails) => {
        this.movieDetails = movieDetails;
      }
    );

    this.dataService.getRecommendations.subscribe(
      (recommendations: IQueryRes<IMovie>) => {
        this.recommendations = recommendations;
      }
    );

    this.dataService.getCredits.subscribe((credits: ICredits) => {
      this.credits = credits;
    });

    this.dataService.getExternalIds.subscribe((externalIds: IExternalIds) => {
      this.externalIds = externalIds;
    });
  }
}