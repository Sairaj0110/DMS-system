import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {FileUploadModule} from 'ng2-file-upload/ng2-file-upload';   
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { SitehomeComponent } from './sitehome/sitehome.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { VieweachuserComponent } from './vieweachuser/vieweachuser.component';
import { UpdateModal } from './viewuser/viewuser.component';  
import { UserService } from './user.service';
import { AppConstantService }  from './app-constant.service';
import {FileUploadServiceService} from './file-upload-service.service';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
 { path: 'signup', component: SignupComponent },
 { path: 'viewuser', component: ViewuserComponent }
];

@NgModule({
  entryComponents:[UpdateModal],
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    SitehomeComponent,
    FooterComponent,
    SignupComponent,
    ViewComponent,
    ViewuserComponent,
    VieweachuserComponent,
    UpdateModal,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: false }
   ),
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    FileUploadModule,
    PasswordStrengthBarModule
  ],
  providers: [
    UserService,
    AppConstantService,
    FileUploadServiceService
  ],
  bootstrap: [AppComponent],
  exports :[ FileSelectDirective, FileDropDirective, FormsModule,
               FileUploadModule],
})
export class AppModule { }
