import { Component, Input, OnInit } from '@angular/core';
import IMovie from 'src/app/Models/IMovie';

@Component({
  selector: 'app-MovieCard',
  templateUrl: './MovieCard.component.html',
  styleUrls: ['./MovieCard.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovie = {
    poster_path: '',
    adult: false,
    overview: '',
    release_date: '',
    genre_ids: [],
    id: 0,
    original_title: '',
    original_language: '',
    title: '',
    name: '',
    backdrop_path: '',
    popularity: 0,
    vote_count: 0,
    video: false,
    vote_average: 0,
  };

  constructor() {}

  ngOnInit() {}
}
