import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: [],
})
export class PasswordComponent implements OnInit {
  outputPassword = '';
  passwordLength = 14;
  uppercase = true;
  lowercase = true;
  numbers = true;
  special = true;

  constructor() {
  }

  ngOnInit(): void {
    this.generatePassword();
  }

  generatePassword($event?: Event) {
    let characterSet = '';
    let password = '';

    if (this.uppercase) {
      characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (this.lowercase) {
      characterSet += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (this.numbers) {
      characterSet += '0123456789';
    }

    if (this.special) {
      characterSet += '!@#$%^&*';
    }

    for (let i = 0, n = characterSet.length; i < this.passwordLength; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * n));
    }

    this.outputPassword = password;
  }

  copyPassword() {
    navigator.clipboard
      .writeText(this.outputPassword)
      .catch((reason) => {
        console.error(reason);
      });
  }

  checkConditions() {
    if (!this.uppercase && !this.lowercase && !this.numbers && !this.special) {
      this.lowercase = true;
    }
  }
}
