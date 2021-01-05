import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.scss'],
})
export class InputComponent implements OnInit {
  faSearch = faSearch;
  constructor() {}

  ngOnInit() {}
}
