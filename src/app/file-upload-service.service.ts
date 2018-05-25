import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { AppConstantService } from './app-constant.service';


@Injectable()
export class FileUploadServiceService {

  userUploadFileURL = `${this.appconstants.getmainUrl()}/user/userFileUploads`
  constructor(private http: HttpClient, private appconstants : AppConstantService) { }
  public uploadFile(fileToUpload: File) {
  const _formData = new FormData();
  _formData.append('file', fileToUpload, fileToUpload.name);   
  return this.http.post(this.userUploadFileURL, _formData); //note: no HttpHeaders passed as 3d param to POST!
                                           //So no Content-Type constructed manually.
                                           //Angular 4.3/4.x does it automatically.
}

}
