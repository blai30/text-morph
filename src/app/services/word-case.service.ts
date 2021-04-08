import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class WordCaseService {
  constructor() { }

  getTextCases(): TextCase[] {
    return Object.values(TextCase);
  }
}
