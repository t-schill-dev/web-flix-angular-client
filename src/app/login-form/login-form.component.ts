import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService} from '../fetch-api-data.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
@Input() userData = {Username: '', Password: ''}

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  //This function is responsible for sending the form inputs to the backend
  loginUser():void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      //Logic for a successful user login
      this.dialogRef.close();//This will close the modal on success
      console.log(result)
      // Add token and username to local Storage
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', result.user.Username);
      this.snackBar.open('Login successful', 'OK', {
        duration: 2000
      });
       // Navigate to movies page defined in app.module
    this.router.navigate(['movies']);
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
   
  }
  }