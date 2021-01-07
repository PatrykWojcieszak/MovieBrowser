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
  trendingMovies: IQueryResult<IMovie>;
  popularMovies: IQueryResult<IMovie>;
  topRatedMovies: IQueryResult<IMovie>;
  upcomingMovies: IQueryResult<IMovie>;

  constructor(private homePageService: HomePageService) {
    this.trendingMovies = {
      total_pages: 0,
      results: [],
      total_results: 0,
      page: 0,
    };
    this.popularMovies = {
      total_pages: 0,
      results: [],
      total_results: 0,
      page: 0,
    };
    this.topRatedMovies = {
      total_pages: 0,
      results: [],
      total_results: 0,
      page: 0,
    };
    this.upcomingMovies = {
      total_pages: 0,
      results: [],
      total_results: 0,
      page: 0,
    };
  }

  ngOnInit() {
    this.homePageService.fetchTrendingMovies();
    this.homePageService.fetchTopRatedMovies();
    this.homePageService.fetchPopularMovies();
    this.homePageService.fetchUpcomingMovies();

    this.homePageService.getTrendingMovies.subscribe((trendingMovies) => {
      this.trendingMovies = trendingMovies;
    });

    this.homePageService.getPopularMovies.subscribe((popularMovies) => {
      this.popularMovies = popularMovies;
    });

    this.homePageService.getTopRatedMovies.subscribe((topRatedMovies) => {
      this.topRatedMovies = topRatedMovies;
    });

    this.homePageService.getUpcomingMovies.subscribe((upcomingMovies) => {
      this.upcomingMovies = upcomingMovies;
    });
  }

  searchInput(searchValue: string) {
    console.log(searchValue);
  }
}
