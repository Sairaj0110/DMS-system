import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
	links = [{'path' : 'signup' , 'label': 'Signup'},{'path' : 'login' , 'label': 'Login'}];
	events = [];
	shouldRun = true;
  constructor() { }

  ngOnInit() {
  }

}
