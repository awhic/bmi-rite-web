import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator-content',
  templateUrl: './bmi-calculator-content.component.html',
  styleUrls: ['./bmi-calculator-content.component.scss']
})
export class BmiCalculatorContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  typeSelect = true;

  public changeType() {
    if (this.typeSelect) {
      this.typeSelect = false;
    } else {
      this.typeSelect = true;
    }
  }
}
