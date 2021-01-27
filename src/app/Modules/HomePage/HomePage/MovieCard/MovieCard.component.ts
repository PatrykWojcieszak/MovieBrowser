import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IEntertainment from 'src/app/Models/IEntertainment';

@Component({
  selector: 'app-MovieCard',
  templateUrl: './MovieCard.component.html',
  styleUrls: ['./MovieCard.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() entertainment: IEntertainment = {
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

  constructor(private router: Router) {}

  ngOnInit() {}

  onCardClick(id: number) {}
}
