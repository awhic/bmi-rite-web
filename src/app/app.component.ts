import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmi-rite';
  typeSelect = true;
  themeSelect = true;

  public changeType() {
    if (this.typeSelect) {
      this.typeSelect = false;
    } else {
      this.typeSelect = true;
    }
  }

  public changeTheme() {
    if (this.themeSelect) {
      this.themeSelect = false;
    } else {
      this.themeSelect = true;
    }
  }
}
