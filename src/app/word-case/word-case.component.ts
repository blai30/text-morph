import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './word-case.component.html'
})
export class WordCaseComponent implements OnInit {
  inputText = '';
  outputText = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  morphText(): void {
    this.outputText = this.inputText.toUpperCase();
  }
}
