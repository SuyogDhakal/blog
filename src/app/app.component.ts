import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 //data ="suyog dhakal"
 //parent to child
 objdata =[
  {
    name:'Suyog',
    age:24
   },
   {
    name:'Sankalpa',
    age:24
   },
   {
    name:'Anjal',
    age:28
   }
 ]
 eb=[];

 //child to parent
parentComponent(data:any){
console.warn(data)
this.eb=data;
}
}

