import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.scss'],
})
export class InputComponent implements OnInit {
  faSearch = faSearch;

  inputValue: string = '';

  @Input() placeholder: string = '';
  @Input() showIcon: boolean = false;

  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onKeyEnterInput() {
    this.onKeyEnter.emit(this.inputValue);
  }
}
