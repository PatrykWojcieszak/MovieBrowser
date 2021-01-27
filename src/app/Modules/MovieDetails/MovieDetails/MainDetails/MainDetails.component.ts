import { Component, Input, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
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

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit() {}
}
