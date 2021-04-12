import { Component, OnInit } from '@angular/core';
import * as converter from 'number-to-words';

export enum WordMode {
  Unchanged  = 'Unchanged',
  Ordinal = 'Ordinal',
  Words = 'Words',
  OrdinalWords = 'Ordinal Words',
  RomanNumerals = 'Roman Numerals',
  Metrics = 'Metrics',
}

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {
  inputText = 0;
  outputText = '';
  wordModes: WordMode[] = [];
  selectedWordMode: WordMode = WordMode.Unchanged;

  constructor() { }

  ngOnInit(): void {
    this.wordModes = Object.values(WordMode);
  }

  onTransform(): void {
    if (!this.inputText && this.inputText !== 0) {
      return;
    }

    let text = this.inputText.toString();

    switch (this.selectedWordMode) {
      case WordMode.Ordinal:
        text = converter.toOrdinal(this.inputText);
        break;
      case WordMode.Words:
        text = converter.toWords(this.inputText);
        text = text.replace(/hundred /ig, 'hundred and ');
        break;
      case WordMode.OrdinalWords:
        text = converter.toWordsOrdinal(this.inputText);
        text = text.replace(/hundred /ig, 'hundred and ');
        break;
      case WordMode.RomanNumerals:
        text = this.toRoman(this.inputText);
        break;
      case WordMode.Metrics:
        break;
      case WordMode.Unchanged:
      default:
        break;
    }

    this.outputText = text;
  }

  toRoman(input: number): string {
    if (input < 1 || input > 3999) {
      return 'Input integer limited to 1 through 3,999';
    }

    const numerals = [
      // 1 - 9
      ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
      // 10 - 90
      ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      // 100 - 900
      ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
      // 1000 - 3000
      ['M', 'MM', 'MMM'],
    ];

    const digits = input.toString().split('');
    let position = digits.length - 1;

    return digits.reduce((roman: string, digit: any) => {
      if (digit !== '0') {
        roman += numerals[position][parseInt(digit) - 1];
      }
      position--;
      return roman;
    }, '');
  }
}
