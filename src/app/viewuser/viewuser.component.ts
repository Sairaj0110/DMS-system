import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { UserService } from './../user.service';
import {FileUploadServiceService} from './../file-upload-service.service';



@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
	
  docs = [];
  user = {};


  constructor(private userService:  UserService, private dialog: MatDialog, private myFileUploadService : FileUploadServiceService){ 
  	
  }

   openDialog(): void {
    let dialogRef = this.dialog.open(UpdateModal, {
      width: '250px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        this.ngOnInit()
    });
  }

  ngOnInit(){
  	this.userService.viewAllUsers().subscribe((data:any) =>{
  		this.docs = data;
  		console.log(data);
  	},error =>{
        console.error(error);
      });
  }
  viewSingleData(data){
    this.userService.viewSingleUser(data).subscribe((data:any) =>{
      this.user = data;
      console.log(data);
      this.openDialog(); 
    },error =>{
        console.error(error);
      }); 
  }
  deleteSingleData(data){
    this.userService.deleteSingleUser(data).subscribe((data:any)=>{
       this.ngOnInit()
      console.log();
    },error =>{
      console.error(error);
    });

  }

  public fileEvent($event) {
   const fileSelected: File = $event.target.files[0];
   this.myFileUploadService.uploadFile(fileSelected).subscribe( (response) => {
      console.log('set any success actions...');
      return response;
    },
     (error) => {
       console.log('set any error actions...');
     });
}


}

@Component({
  selector: 'updateUser',
  templateUrl: './updateUser.html',
})
export class UpdateModal {
  id : string;
  name : string;
  username : string;
  password : string;
  httpClient : HttpClient;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, public snackBar: MatSnackBar,  private dialogRef: MatDialogRef<UpdateModal>,private userService:  UserService ) {
    this.httpClient= http;
    this.id = data._id;
    this.name =data.name;
    this.username = data.username;
    this.password = data.password;
  }
  updateSingle(){
    const updateData = {
      "_id" : this.id,
      "name" : this.name,
      "username" : this.username,
      "password" : this.password
    } 
   this.userService.updateSingleUser(updateData).subscribe(data =>{
        console.log(data);
        this.snackBar.open("Update  SuccessFull", "" , {
        duration: 2000,
      });
       this.dialogRef.close();  

    }, error =>{
        console.error(error);
      });   
  }
}


