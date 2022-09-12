import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentVal: any;

getVal(val:any)
{
  console.warn(val)
  this.currentVal =val
}
}
