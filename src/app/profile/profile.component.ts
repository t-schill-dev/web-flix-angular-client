import { Component, OnInit } from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';

import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar'

import {EditProfileComponent} from '../edit-profile/edit-profile.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user: any = {};

  constructor(
public fetchApiData: FetchApiDataService,
public dialog: MatDialog,
public snackBar: MatSnackBar,
public router: Router

  ) { }

  ngOnInit(): void {
  }
//Gets userdata from API
  getUser(): void {
    this.fetchApiData.getUser().subscribe((result: any) => {
      this.user = result;
      return this.user;
    })
  };

  openEditDialog(): void {
this.dialog.open(EditProfileComponent, {
  width: '3oopx'
})
  }

  deleteProfile():void {
    if(confirm('Are you sure you want to delete your profile?')) {
      this.router.navigate(['welcome']). then(()=> {
        this.snackBar.open('Your profile has been deleted', 'OK', {
          duration: 1000
        })
      });
      // API call to delete profile
      this.fetchApiData.deleteUser().subscribe(()=> {
        localStorage.clear()
      })
    }
  }
}
