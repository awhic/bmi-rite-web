import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lex-tools';
  themeSelect = false;

  switchColor: ThemePalette = 'primary';

  //TODO: Tooltip to show that dark/light mode under development. Will be removed when completed.
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  changeTheme() {
    if (this.themeSelect) {
      this.themeSelect = false;
    } else {
      this.themeSelect = true;
    }
  }
}
