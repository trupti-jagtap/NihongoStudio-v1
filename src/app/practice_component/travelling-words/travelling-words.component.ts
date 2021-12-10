import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelling-words',
  templateUrl: './travelling-words.component.html',
  styleUrls: ['./travelling-words.component.css']
})
export class TravellingWordsComponent implements OnInit {

  panelOpenState = false;
  collapsed1 = true;
  collapsed2 = true;
  collapsed3 = true;
  collapsed4 = true;
  collapsed5 = true;
  collapsed6 = true;
  constructor() { }
  ngOnInit(): void {
  }
}
