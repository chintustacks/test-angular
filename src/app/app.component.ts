import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  numbers:Array<any>=[]
  constructor(){
    for(let i=0;i<10;i++){
      this.numbers.push(i)
    }
  }
  

}
