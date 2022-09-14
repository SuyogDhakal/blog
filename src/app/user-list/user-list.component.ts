import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() hero: any
  @Input() heroobj: any
  
  @Output() parentComponen: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

    //this.parentComponen.emit({name:'Anil',age:30})
    //this.parentComponen.emit('Anil')

  }

  sendData(){
    this.parentComponen.emit({name:'Anil',age:30})
  }

}
