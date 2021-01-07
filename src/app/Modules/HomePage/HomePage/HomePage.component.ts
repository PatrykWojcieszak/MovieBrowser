import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../HomePage.service';
import IMovie from 'src/app/Models/IMovie';
import IQueryResult from 'src/app/Models/IQueryResult';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  trendingMovies: IQueryResult<IMovie> | undefined;

  constructor(private homePageService: HomePageService) {
    this.trendingMovies = {
      total_pages: 0,
      results: [],
      total_results: 0,
      page: 0,
    };
  }

  ngOnInit() {
    this.homePageService.fetchMovies();

    this.homePageService.trendingMovie.subscribe((trendingMovies) => {
      this.trendingMovies = trendingMovies;
      console.log(trendingMovies);
    });
  }

  searchInput(searchValue: string) {
    console.log(searchValue);
  }
}
