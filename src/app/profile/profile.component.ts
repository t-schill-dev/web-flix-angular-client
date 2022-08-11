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
    this.getMovieData()
  }
 /**
  * GET request to return user data and all movies
  * Filters 
  * @function getUser
  * @return {object} user data
  */
  getUserData(): void {
    this.fetchApiData.getUser().subscribe((result: any) => {
      this.user = result;
      })
      return this.user;
    };
/**
  * GET request to return user data and all movies
  * Filters 
  * @function getAllMovies
  * @returns {object} of movies in the provided array
  * @returns {object} of favorite movies in the provided array
  */
  getMovieData():void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      //Method adds movie object to the array on every matching id on the users favortite movies
      resp.forEach((movie: any) => {
        if (this.user.favoriteMovies.includes(movie._id)) {
          this.favoriteMovies.push(movie)
          console.log('movies', this.favoriteMovies)
        }
      });
  })
}
  // /**
  //  * Validation if movie is marked as favorite
  //  * @function isFav
  //  * @param {string} id
  //  * @returns {boolean}
  //  */
  //  isFav(id: string): boolean {
  //   return this.user.favoriteMovies.includes(id);
  // }
  openEditDialog(): void {
    this.dialog.open(EditProfileComponent, {
      width: '300px',
    });
  }
  /**
  * DELETE request to remove movie to userdata
  * calling function from API
  * @function removeFavorite
  * @param {string} id
  * @returns {object} updated User
  */
  removeFavoriteMovies(id: string): void {
    this.fetchApiData.removeFavorite(id).subscribe((result) => {
      //this.user = result;
      this.ngOnInit();
    });
  }
  /**
   * Confirmation dialog to verify action, delete profile and redirect to welcome screen
   * @function deleteUser call from API
   */
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
