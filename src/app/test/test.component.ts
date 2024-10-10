import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgClass,NgStyle,FormsModule,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,NgFor,UpperCasePipe,LowerCasePipe,SlicePipe,JsonPipe,DecimalPipe,PercentPipe,CurrencyPipe,DatePipe],
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
  public highlightColor = "Grey";
  public greeting = "";
  public userName = ""; 
  public displayName = true;
  public displayNameSecond = false;
  public switchColor = 'Orange';
  public colorList = ['Red','Blue','Green','Yellow'];
  public pipeName = "Welcome to code evolution";
  public date = new Date();
  @Input() public parentData: string | any;
  @Output() public childEvent = new EventEmitter();


  public messageClass = {
    "test-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  
  public titleStyles = {
    color:"blue",
    fontStyle:"italic"
  }
  public onClick(event: any){
    console.log("Welcom to code evoultion");
    console.log(event);
    this.greeting = "Welcome to code evoultion";
  }

  public logMessage(value:any){
    console.log(value);
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

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
    console.log("button has clicked");
  }
}
