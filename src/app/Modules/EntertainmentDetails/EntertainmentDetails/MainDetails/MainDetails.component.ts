import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-MainDetails',
  templateUrl: './MainDetails.component.html',
  styleUrls: ['./MainDetails.component.scss'],
})
export class MainDetailsComponent implements OnInit {
  @Input() img: string = '';
  @Input() overview: string = '';

  constructor() {}

  ngOnInit() {}
}
