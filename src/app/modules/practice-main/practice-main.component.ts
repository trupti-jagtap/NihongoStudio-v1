import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: WordList[] = [
  {position: 1, word: 'かぞく', romaji: 'kazoku',meaning: 'family'},
  {position: 2, word: 'ともだち', romaji: 'tomodachi',meaning: 'friend'},
  {position: 3, word: 'ちち', romaji: 'chichi',meaning: '(my) father'},
  {position: 4, word: 'おとうさん ', romaji: 'otousan',meaning: "'someone else's father / dad'"},
  {position: 5, word: 'はは ', romaji: 'haha',meaning: '(my) mother '},
  {position: 6, word: 'おかあさん', romaji: 'okaasan',meaning: "'(someone else's)mother / mom'"},
  {position: 7, word: 'あに ', romaji: 'ani',meaning: '(my) older brother'},
  {position: 8, word: 'おにいさん', romaji: 'oniisan',meaning: "'(someone else's)older brother'"},
  {position: 9, word: 'あね  ', romaji: 'ane',meaning: '(my) older sister'},
  {position: 10, word: 'おねえさん  ', romaji: 'oneesan',meaning: "'(someone else's)older sister'"},
 
];
@Component({
  selector: 'app-practice-main',
  templateUrl: './practice-main.component.html',
  styleUrls: ['./practice-main.component.css']
})


export class PracticeMainComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position','word', 'romaji', 'meaning'];
  dataSource = ELEMENT_DATA;

}
export interface WordList {
  position:number;
  word: string;
  romaji: string;
  meaning:string;
  
}