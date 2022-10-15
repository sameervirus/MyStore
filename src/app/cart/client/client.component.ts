import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[id=summary]',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  client = {
    name: '',
    address: '',
    creditCard: '',
  };

  @Input() totalOrder: any;
  @Output() checkouted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  checkout() {
    this.checkouted.emit(this.client);
  }

  creditCardChanged($event: any): void {
    if (isNaN($event)) alert('Allow only numbers');
  }
}
