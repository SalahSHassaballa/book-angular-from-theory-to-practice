import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {
  dateVal: Date = new Date();
  jsonVal: Object = {moo: 'foo', goo: {too: 'new'}};

  constructor() { }

  ngOnInit() {
  }

}
