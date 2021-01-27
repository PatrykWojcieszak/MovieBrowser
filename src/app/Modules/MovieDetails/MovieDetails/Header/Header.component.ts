import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import IGenre from 'src/app/Models/IGenre';
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  @Input() title: string = '';
  @Input() date: string = '';
  @Input() runtime: number = 0;
  @Input() avgVote: number = 0;
  @Input() genres: IGenre[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  onGoBackClick() {
    this.router.navigate(['home']);
  }
}
