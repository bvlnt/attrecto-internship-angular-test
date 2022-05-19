import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 0;

  disabled() {
    if (this.counter == 0) {
      return true;
    } else {
      return false;
    }
  }

  increase() {
    this.counter++;
  }

  decrease() {
    if (this.counter == 0) {
      return;
    } else {
      this.counter--;
    }
  }

}
