import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmi-rite';
  typeSelect = true;

  public changeType() {
    if (this.typeSelect) {
      this.typeSelect = false;
    } else {
      this.typeSelect = true;
    }
  }
}
