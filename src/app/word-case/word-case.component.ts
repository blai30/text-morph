import { Component, OnInit } from '@angular/core';
import { TextCase, WordCaseService } from "../services/word-case.service";

@Component({
  selector: 'app-home',
  templateUrl: './word-case.component.html'
})
export class WordCaseComponent implements OnInit {
  inputText = '';
  outputText = '';
  textCases: TextCase[] = [];
  selectedCaseType: TextCase = TextCase.Unchanged;
  trimWhitespace = true;
  clapItUp = false;
  charLimit? = null;

  constructor(
    private wordCaseService: WordCaseService,
  ) {}

  ngOnInit(): void {
    this.textCases = this.wordCaseService.getTextCases();
  }

  transformText(): void {
    if (!this.inputText) {
      return;
    }

    let text = this.inputText;

    if (this.trimWhitespace) {
      // Trim trailing whitespace.
      text = text.trim();

      // Shrink excess spaces between words.
      let regex = /\s+/g;
      text = text.replace(regex, ' ');
    }

    switch (this.selectedCaseType) {
      case TextCase.UpperCase:
        text = text.toUpperCase();
        break;
      case TextCase.LowerCase:
        text = text.toLowerCase();
        break;
      case TextCase.SentenceCase:
        break;
      case TextCase.TitleCase:
        break;
      case TextCase.CamelCase:
        text = this.toCamelCase(text);
        break;
      case TextCase.PascalCase:
        text = this.toPascalCase(text);
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

    if (this.clapItUp) {
      text = text.replace(' ', ' 👏 ');
    }

    if (this.charLimit != null) {
      text = text.slice(0, this.charLimit);
    }

    this.outputText = text;
  }

  toCamelCase(input: string): string {
    let word = this.toPascalCase(input);
    return word.length > 0 ? word.substring(0, 1).toLowerCase() + word.substring(1) : word;
  }

  toPascalCase(input: string): string {
    return input.replace(/(?:^|_|-| +)(.)/g, (match, capture) => capture.toUpperCase());
  }

  toSentenceCase(input: string): string {
    let word = this.toTitleCase(input);
    return word.length > 0 ? word.substring(0, 1).toLowerCase() + word.substring(1) : word;
  }

  toTitleCase(input: string): string {
    return input.replace(/(?:^|_|-+)(.)/g, (match, capture) => capture.toUpperCase());
  }
}
