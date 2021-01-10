import { EntertainmentDetailsService } from './../EntertainmentDetails.service';
import { Component, OnInit } from '@angular/core';
import IMovieDetails from 'src/app/Models/IMovieDetails';
import { ActivatedRoute, Params } from '@angular/router';

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

@Component({
  selector: 'app-EntertainmentDetails',
  templateUrl: './EntertainmentDetails.component.html',
  styleUrls: ['./EntertainmentDetails.component.scss'],
})
export class EntertainmentDetailsComponent implements OnInit {
  movieDetails: IMovieDetails = movieDetailsInitial;
  movieId: string = '';

  constructor(
    private dataService: EntertainmentDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: Params) => {
      this.movieId = paramMap.get('id');
    });

    this.dataService.fetchMovieDetails(this.movieId);

    this.dataService.getMovieDetails.subscribe((movieDetails) => {
      console.log(movieDetails);
      this.movieDetails = movieDetails;
    });
  }
}
