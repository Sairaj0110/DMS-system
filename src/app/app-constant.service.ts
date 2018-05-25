import { Injectable } from '@angular/core';

@Injectable()
export class AppConstantService {
	 IP : string = "localhost";
	 PORT : number = 3002;
 	 private mainUrl = `http://${this.IP}:${this.PORT}`;

 	 constructor() {
 	  }

 	  setIP(ip:string){
 	  	this.IP = ip;
 	  }

 	  setPORT(port:number){
 	  	this.PORT = port
 	  }
 	  
 	  getmainUrl(){
 	  	return this.mainUrl;
 	  }
}
