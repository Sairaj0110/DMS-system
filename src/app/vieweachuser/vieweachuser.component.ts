import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vieweachuser',
  templateUrl: './vieweachuser.component.html',
  styleUrls: ['./vieweachuser.component.css']
})
export class VieweachuserComponent implements OnInit {
	@Input () name : string;
	@Input () username : string;
	@Input () password : string;
	@Input () id : string;
	@Input () docs = [];
	@Output() editclick : EventEmitter <string> = new EventEmitter <string>() ;
  @Output() deleteclick : EventEmitter <string> = new EventEmitter <string>() ;  
  constructor() { }	

  ngOnInit() {
  }

  getData(){
  	this.editclick.emit(this.id);
  }
  deleteData(){
   this.deleteclick.emit(this.id); 
  }
}
