import { Component, Input, OnInit } from '@angular/core';
import ICast from 'src/app/Models/ICast';

const castInitial = {
  adult: false,
  gender: 0,
  id: 0,
  known_for_department: '',
  name: '',
  original_name: '',
  popularity: '',
  profile_path: '',
  cast_id: 0,
  character: '',
  credit_id: '',
  order: 0,
};

@Component({
  selector: 'app-CreditCard',
  templateUrl: './CreditCard.component.html',
  styleUrls: ['./CreditCard.component.scss'],
})
export class CreditCardComponent implements OnInit {
  @Input() credit: ICast = castInitial;

  constructor() {}

  ngOnInit() {}
}
