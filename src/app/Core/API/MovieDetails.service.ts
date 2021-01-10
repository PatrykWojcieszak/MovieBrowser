import { Injectable } from '@angular/core';
import { APIService } from './API.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  private BASE = '/movie/';
  private GET_CREDITS: string = '/credits';
  private GET_RECOMMENDATIONS: string = '/recommendations';
  private GET_KEYWORDS: string = '/keywords';
  private GET_EXTERNAL_IDS: string = '/external_ids';

  constructor(private API: APIService) {}

  public GetDetails(id: string) {
    return this.API.Get(this.API.BuildAddress(`/movie${id}`));
  }

  public GetCredits(id: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.BASE}${id}${this.GET_CREDITS}`)
    );
  }

  public GetRecommendations(id: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.BASE}${id}${this.GET_RECOMMENDATIONS}`)
    );
  }

  public GetKeyWords(id: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.BASE}${id}${this.GET_KEYWORDS}`)
    );
  }

  public GetExternalIds(id: string) {
    return this.API.Get(
      this.API.BuildAddress(`${this.BASE}${id}${this.GET_EXTERNAL_IDS}`)
    );
  }
}
