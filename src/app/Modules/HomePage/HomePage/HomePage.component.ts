import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../HomePage.service';
import IEntertainment from 'src/app/Models/IEntertainment';
import IQueryRes from 'src/app/Models/IQueryRes';

const initial = {
  total_pages: 0,
  results: [],
  total_results: 0,
  page: 0,
};

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  trending: IQueryRes<IEntertainment>;
  popular: IQueryRes<IEntertainment>;
  topRated: IQueryRes<IEntertainment>;
  upcoming: IQueryRes<IEntertainment>;
  searchResult: IQueryRes<IEntertainment>;

  trendingDaySelected = true;
  trendingThisWeekSelected = false;

  isSearch = false;

  constructor(private homePageService: HomePageService) {
    this.trending = initial;
    this.popular = initial;
    this.topRated = initial;
    this.upcoming = initial;
    this.searchResult = initial;
  }

  ngOnInit() {
    this.fetchData();

    this.homePageService.getTrending.subscribe((trending) => {
      this.trending = trending;
    });

    this.homePageService.getPopular.subscribe((popular) => {
      this.popular = popular;
    });

    this.homePageService.getTopRated.subscribe((topRated) => {
      this.topRated = topRated;
    });

    this.homePageService.getUpcoming.subscribe((upcoming) => {
      this.upcoming = upcoming;
    });

    this.homePageService.getSearchValue.subscribe((searchRes) => {
      this.searchResult = searchRes;
    });
  }

  fetchData() {
    this.homePageService.fetchTrending('day');
    this.homePageService.fetchTopRated();
    this.homePageService.fetchPopular();
    this.homePageService.fetchUpcoming();
  }

  searchInput(searchValue: string) {
    if (searchValue === '') this.isSearch = false;
    else {
      this.isSearch = true;
      this.homePageService.search(searchValue);
    }
  }

  trendingBtn(timeWindow: string) {
    if (timeWindow === 'day') {
      this.trendingDaySelected = true;
      this.trendingThisWeekSelected = false;
    } else {
      this.trendingDaySelected = false;
      this.trendingThisWeekSelected = true;
    }

    this.homePageService.fetchTrending(timeWindow);
  }
}
