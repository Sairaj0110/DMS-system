import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable'
import { AppConstantService } from './app-constant.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private constantService : AppConstantService) { }

  	url = `${this.constantService.getmainUrl()}/user`;

	createUser(userData) : Observable <any> {
		return this.http.post(this.url.concat(`/signup`),userData)
	}

	viewAllUsers() : Observable <any> {
		return this.http.get(this.url.concat(`/read`))
	}
	viewSingleUser(data) : Observable <any> {
		return this.http.get(`${this.url}/singleUser/${data}`)
	}
	updateSingleUser(updateData) : Observable <any>{
		return this.http.put(`${this.url}/singleUpdate` , updateData)	
	}
	deleteSingleUser(data) : Observable <any>{
		return this.http.delete(`${this.url}/singleDelete/${data}`)
	}

}