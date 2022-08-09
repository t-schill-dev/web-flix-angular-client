import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  movies: any = []
  favoriteMovies: any = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}
  
  ngOnInit( ): void {
    this.getUserData();
  }
  //Gets userdata from API
  getUserData(): void {
    this.fetchApiData.getUser().subscribe((result: any) => {
      this.user = result;
      this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        this.favoriteMovies.forEach((movie: any) => {
          if (this.user.favoriteMovies.includes(movie._id)) {
            this.favoriteMovies.push(movie)
          }
        });
      })
      return this.user;
    });
  }
  getFavoriteMovies(): void {
    this.fetchApiData.getFavoriteMovies().subscribe((resp: any) => {
      this.favoriteMovies = resp;
      console.log('favorites: ', this.favoriteMovies);
      return this.favoriteMovies;
    });
  }
  openEditDialog(): void {
    this.dialog.open(EditProfileComponent, {
      width: '300px',
    });
  }

  removeFavoriteMovies(id: string): void {
    this.fetchApiData.removeFavorite(id).subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteProfile(): void {
    if (confirm('Are you sure you want to delete your profile?')) {
      // API call to delete profile
      this.fetchApiData.deleteUser().subscribe(() => {
        localStorage.clear();
      });
      this.router.navigate(['welcome']).then(() => {
        this.snackBar.open('Your profile has been deleted', 'OK', {
          duration: 2000,
        });
       });
    }}
}
