import { Component, Input, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import ICrew from 'src/app/Models/ICrew';
@Component({
  selector: 'app-MainDetails',
  templateUrl: './MainDetails.component.html',
  styleUrls: ['./MainDetails.component.scss'],
})
export class MainDetailsComponent implements OnInit {
  @Input() img: string = '';
  @Input() overview: string = '';
  @Input() facebookId: string = '';
  @Input() instagramId: string = '';
  @Input() twitterId: string = '';
  @Input() crew: ICrew[] = [];

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit() {}

  onFilterCrew(): ICrew[] {
    const filtered = this.crew.filter(
      (x) => x.job === 'Director' || x.job === 'Writer'
    );

    return filtered;
  }
}
