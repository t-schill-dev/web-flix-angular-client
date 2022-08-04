import { Component, OnInit } from '@angular/core';
import {UserRegistrationFormComponent} from '../user-registration-form/user-registration-form.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }
  //Function to open dialog when signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      //Assigning width
      width: '280px'
    });
  }
//opens dialog of Login Component when button clicked
  openLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '280px'
    });
  }

}
