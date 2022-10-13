import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  storage = localStorage.getItem('order');
  order = this.storage ? JSON.parse(this.storage) : null;

  constructor() {}

  ngOnInit(): void {}
}
