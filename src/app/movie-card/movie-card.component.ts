import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DirectorComponent } from '../director/director.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  user: any = {};
  movies: any[] = [];
  favoriteMovies: any[] = [];


  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  //Fuction gets called immediately after mounting
  ngOnInit(): void {
    this.getMovies();
    this.getUser();
  }
  /**
   * GET request to return user data
   * Using data to filter favorites
   * @function getUser
   * @returns {object}
   */
  getUser(): void {
    this.fetchApiData.getUser().subscribe((result: any) => {
      this.user = result;
      console.log('updated', result)
  })
}
  /**
   * GET request to return all movies and favorite movies of user
   * @returns {array} of movies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      //initiates favorite movies array
      this.favoriteMovies = this.user.favoriteMovies;
      return this.movies;
    });
  }

  /**
   * Open dialog to display director details
   * @param {object} data  passes data to director component
   */
  openDirectorDialog(name: string, bio: string, birth: Date): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birthday: birth,
      },
      // Assign dialog width
      width: '500px',
    });
  }
/**
   * Open dialog to display movie description
   * @param {object} data  passes data to description component
   */
  openDescriptionDialog(title: string, plot: string): void {
    this.dialog.open(DescriptionComponent, {
      data: {
        Title: title,
        Plot: plot,
      },
      width: '500px',
    });
  }
  
  /**
   * Validation if movie is marked as favorite
   * @function isFav
   * @param {string} id
   * @returns {boolean}
   */
  isFav(id: string): boolean {
    return this.favoriteMovies.includes(id);
  }
/**
   * PUT request to add movie to userdata
   * calling function from API
   * @function addFavorite
   * @param {string} id
   */
  addToFavoriteMovies(id: string): void {
    this.fetchApiData.addFavorite(id).subscribe((result) => {
      this.favoriteMovies = result.favoriteMovies;
      this.ngOnInit();
    });
  }
/**
   * DELETE request to remove movie to userdata
   * calling function from API
   * @function removeFavorite
   * @param {string} id
   */
  removeFavoriteMovies(id: string): void {
    this.fetchApiData.removeFavorite(id).subscribe((result) => {
      this.favoriteMovies = result.favoriteMovies;
      this.ngOnInit();
    });
  }
}
