import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-SubDetails',
  templateUrl: './SubDetails.component.html',
  styleUrls: ['./SubDetails.component.scss'],
})
export class SubDetailsComponent implements OnInit {
  @Input() budget: number = 0;
  @Input() revenue: number = 0;
  @Input() status: string = '';
  @Input() language: string = '';

  constructor() {}

  ngOnInit() {}
}
