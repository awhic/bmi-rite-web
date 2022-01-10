import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lex-tools';
  themeSelect = false;
  switchColor: ThemePalette = 'primary';

  changeTheme() {
    if (this.themeSelect) {
      this.themeSelect = false;
    } else {
      this.themeSelect = true;
    }
  }
}
