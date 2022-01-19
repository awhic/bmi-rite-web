import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridae-content',
  templateUrl: './fridae-content.component.html',
  styleUrls: ['./fridae-content.component.scss']
})
export class FridaeContentComponent implements OnInit {

  method!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.method = false;
  }
}
