import { Component, Input, OnInit } from '@angular/core';
import IMovie from 'src/app/Models/IMovie';

@Component({
  selector: 'app-MovieSearchInfo',
  templateUrl: './MovieSearchInfo.component.html',
  styleUrls: ['./MovieSearchInfo.component.scss'],
})
export class MovieSearchInfoComponent implements OnInit {
  @Input() entertainment: IMovie = {
    poster_path: '',
    adult: false,
    overview: '',
    release_date: '',
    first_air_date: '',
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

  getImgPath() {
    if (this.entertainment.backdrop_path)
      return `https://image.tmdb.org/t/p/w500/${this.entertainment.backdrop_path}`;
    else
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png';
  }
}
