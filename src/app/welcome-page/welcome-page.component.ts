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
  /**
   * Opens dialog to register user
   * @event click Button on HTML template
   * 
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      //Assigning width
      width: '280px'
    });
  }
/**
   * Opens dialog to login user
   * @event click Button on HTML template
   */
  openLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '280px'
    });
  }

}
