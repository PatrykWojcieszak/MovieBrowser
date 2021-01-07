import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnName: string = '';
  @Input() isSelected: boolean = false;

  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    this.btnClicked.emit(true);
  }
}
