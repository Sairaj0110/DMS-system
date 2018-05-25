import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import { UserService } from './../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
	
 
  name : string;
  username : string;
  password : string;
  public account = {
        password: <string>null
    };
    public barLabel: string = "Password strength:";
    public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private userService:  UserService,  public snackBar: MatSnackBar, private router: Router) {

 }

  ngOnInit() {
  }

 submittoDB(){
  const userData = {
    "name" : this.name,
    "username" : this.username,
    "password" : this.password
  }

 	this.userService.createUser(userData).subscribe(data =>{
        console.log(data);
        this.snackBar.open(data.message, "" , {
        duration: 2000,
      });
        this.router.navigate(['/viewuser']);
    }, error =>{
        console.error(error);
      });
 }
}
