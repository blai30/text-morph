import { Component, OnInit } from '@angular/core';
import { CaseType, TextCase, WordCaseService } from "../services/word-case.service";

@Component({
  selector: 'app-home',
  templateUrl: './word-case.component.html'
})
export class WordCaseComponent implements OnInit {
  caseTypes: CaseType[] = [];
  inputText = '';
  outputText = '';
  selectedCaseType: TextCase = TextCase.Unchanged;
  trimWhitespace = false;
  clapItUp = false;

  constructor(
    private wordCaseService: WordCaseService,
  ) {}

  ngOnInit(): void {
    this.caseTypes = this.wordCaseService.getCaseTypes();
  }

  transformText(): void {
    let output = this.inputText;

    switch (this.selectedCaseType) {
      case TextCase.UpperCase:
        output = output.toUpperCase();
        break;
      case TextCase.LowerCase:
        output = output.toLowerCase();
        break;
      case TextCase.SentenceCase:
        break;
      case TextCase.TitleCase:
        break;
      case TextCase.CamelCase:
        break;
      case TextCase.PascalCase:
        break;
      case TextCase.SnakeCase:
        break;
      case TextCase.KebabCase:
        break;
      case TextCase.RandomCase:
        break;
      case TextCase.Unchanged:
      default:
        break;
    }

    this.outputText = output;
  }
}
