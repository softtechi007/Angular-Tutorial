import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgClass],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public name = "Iqbal";
  public siteUrl: string | undefined;
  public myId = "testId";
  public isdisabled = true;
  public successClass = "test-success";
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "test-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor(){
    if (typeof window !== 'undefined') {
      this.siteUrl = window.location.href;
    } else {
      this.siteUrl = 'Site URL not available in this environment';
    }
  }

  greetUser(){
    return "Hello " + this.name;
  }
}
