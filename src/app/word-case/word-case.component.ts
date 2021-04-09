import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
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
        text = _.capitalize(text);
        break;
      case TextCase.TitleCase:
        text = _.startCase(_.toLower(text));
        break;
      case TextCase.CamelCase:
        text = _.camelCase(text);
        break;
      case TextCase.PascalCase:
        text = _.camelCase(text);
        text = _.upperFirst(text);
        break;
      case TextCase.SnakeCase:
        text = _.snakeCase(text);
        break;
      case TextCase.KebabCase:
        text = _.kebabCase(text);
        break;
      case TextCase.RandomCase:
        text = this.randomCase(text);
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
