import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This string is interpolated!'; //Interpolation
  clientName = 'Gian'; //Property binding
  appliedCSS = 'green'; //Style binding
  notAppliedCSS = false; //
  myColor = 'blue'

  //EVENT BINDNG
  showData($event: any) {
    console.log('Button clicked: ');
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount = 0;
    clickMe() {
      this.clickCount++;
  }
}
