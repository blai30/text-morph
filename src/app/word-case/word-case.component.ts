import { Component, OnInit } from '@angular/core';
import * as voca from 'voca';

export enum TextCase {
  Unchanged  = 'Unchanged',
  UpperCase = 'UPPER CASE',
  LowerCase = 'lower case',
  SentenceCase = 'Sentence case',
  TitleCase = 'Title Case',
  CamelCase = 'camelCase',
  PascalCase = 'PascalCase',
  SnakeCase = 'snake_case',
  KebabCase = 'kebab-case',
  RandomCase = 'rAnDOm caSe',
}

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

  constructor() {}

  ngOnInit(): void {
    this.textCases = Object.values(TextCase);
  }

  isClappable(): boolean {
    switch (this.selectedCaseType) {
      case TextCase.CamelCase:
      case TextCase.PascalCase:
      case TextCase.SnakeCase:
      case TextCase.KebabCase:
        this.clapItUp = false;
        return false;
      default:
        return true;
    }
  }

  onTransform(): void {
    if (!this.inputText) {
      return;
    }

    let text = this.inputText;

    if (this.trimWhitespace) {
      // Trim trailing whitespace and shrink excess whitespace between words.
      text = text.trim().replace(/\s+/g, ' ');
    }

    switch (this.selectedCaseType) {
      case TextCase.UpperCase:
        text = text.toUpperCase();
        break;
      case TextCase.LowerCase:
        text = text.toLowerCase();
        break;
      case TextCase.SentenceCase:
        text = voca.capitalize(text, true);
        break;
      case TextCase.TitleCase:
        text = voca.titleCase(text);
        break;
      case TextCase.CamelCase:
        text = voca.camelCase(text);
        break;
      case TextCase.PascalCase:
        text = voca.capitalize(voca.camelCase(text));
        break;
      case TextCase.SnakeCase:
        text = voca.snakeCase(text);
        break;
      case TextCase.KebabCase:
        text = voca.kebabCase(text);
        break;
      case TextCase.RandomCase:
        text = this.randomCase(text);
        break;
      case TextCase.Unchanged:
      default:
        break;
    }

    if (this.clapItUp) {
      text = text.replace(/ /g, ' 👏 ');
    }

    if (this.charLimit) {
      text = text.slice(0, this.charLimit);
    }

    this.outputText = text;
  }

  randomCase(text: string): string {
    let result = '';

    do {
      const chars = [...text];
      for (const c of chars) {
        const next = Math.floor(Math.random() * 2);
        result += next === 0 ? c.toUpperCase() : c.toLowerCase();
      }
    } while (result == text);

    return result;
  }
}
