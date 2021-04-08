import { Injectable } from '@angular/core';

export interface CaseType {
  value: TextCase,
  label: string,
}

export enum TextCase {
  // Unchanged  = 'Unchanged',
  // UpperCase = 'UPPER CASE',
  // LowerCase = 'lower case',
  // SentenceCase = 'Sentence case',
  // TitleCase = 'Title Case',
  // CamelCase = 'camelCase',
  // PascalCase = 'PascalCase',
  // SnakeCase = 'snake_case',
  // KebabCase = 'kebab-case',
  // RandomCase = 'rAnDOm caSe',
  Unchanged,
  UpperCase,
  LowerCase,
  SentenceCase,
  TitleCase,
  CamelCase,
  PascalCase,
  SnakeCase,
  KebabCase,
  RandomCase,
}

@Injectable({
  providedIn: 'root'
})
export class WordCaseService {
  caseTypes: CaseType[] = [
    {
      value: TextCase.Unchanged,
      label: 'Unchanged',
    },
    {
      value: TextCase.UpperCase,
      label: 'UPPER CASE',
    },
    {
      value: TextCase.LowerCase,
      label: 'lower case',
    },
    {
      value: TextCase.SentenceCase,
      label: 'Sentence case',
    },
    {
      value: TextCase.TitleCase,
      label: 'Title Case',
    },
    {
      value: TextCase.CamelCase,
      label: 'camelCase',
    },
    {
      value: TextCase.PascalCase,
      label: 'PascalCase',
    },
    {
      value: TextCase.SnakeCase,
      label: 'snake_case',
    },
    {
      value: TextCase.KebabCase,
      label: 'kebab-case',
    },
    {
      value: TextCase.RandomCase,
      label: 'rAnDOm caSe',
    },
  ];

  constructor() { }

  getCaseTypes(): CaseType[] {
    return this.caseTypes;
  }
}
