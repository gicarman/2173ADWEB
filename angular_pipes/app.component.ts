import { Component } from '@angular/core';
import { PocketProvider } from 'ethers';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm1';
  presentDate = new Date();
  times$ : Observable<Date>;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  price : number = 20000 ;
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 2.11;

  data : object = {
    name: 'Gian', age: 20, food: 'Cookie',
    languages: [
      {lname: 'Js', level: 'Billie'},
      {lname: 'Java', level: 'Frank'},
      {lname: 'Python', level: 'Grent'},
    ]
  }

  a: number = 0.259;
  b: number = 1.3495;
  c: number = 2.0211;

  constructor() {
    this.times$ = interval(1000).pipe (
      map(() => new Date())
    );
  }
}
