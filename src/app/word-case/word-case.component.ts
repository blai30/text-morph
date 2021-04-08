import { Component, OnInit } from '@angular/core';
import { CaseType, TextCase, WordCaseService } from "../services/word-case.service";

@Component({
  selector: 'app-home',
  templateUrl: './word-case.component.html'
})
export class WordCaseComponent implements OnInit {
  inputText = '';
  outputText = '';
  selectedCaseType: TextCase = TextCase.Unchanged;
  caseTypes: CaseType[] = [];

  constructor(
    private wordCaseService: WordCaseService,
  ) {}

  ngOnInit(): void {
    this.caseTypes = this.wordCaseService.getCaseTypes();
  }

  transformText(): void {
    this.outputText = this.inputText.toUpperCase();
  }
}
