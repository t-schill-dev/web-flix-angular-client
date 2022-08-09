import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  user: any = {}
  
  @Input() userData: any = {
    Username: this.user.username,
    Password: this.user.password, 
    Email: this.user.email,
  };

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  
  getUser(): void {
this.fetchApiData.getUser().subscribe((resp: any) => {
  this.user = resp;
  return this.user;
})
  }
  
  editProfile(): void {
    this.fetchApiData.updateUser(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      this.snackBar.open('Sucessfully updated your profile', 'OK', {
        duration: 1000,
      });
    });
    localStorage.clear();
    this.snackBar.open('Please log in with your new credentials', 'OK', {
      duration: 2000
    })
    this.router.navigate(['welcome']);
    
  }
}
