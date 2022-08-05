import { Component, OnInit } from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar'

import {DirectorComponent} from '../director/director.component';
import {GenreComponent} from '../genre/genre.component';
import {DescriptionComponent} from '../description/description.component'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movies: any[] = [];
  favoriteMovies: any[] = [];
  genres: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar

    )
     { }

  //Fuction gets called immediately after mounting
  ngOnInit(): void {
    this.getMovies();
    this.getFavoriteMovies();
  }
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      console.log(this.movies)
      return this.movies;
    })
  }
  getMovieGenres(title: any): void{
    this.fetchApiData.getGenres(title).subscribe((response:any) => {
      this.genres = response;
      return this.genres;
    })
  }
  openGenreDialog(name: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
      },
      // Assign dialog width
      width: '500px'
    });
  }
  openDirectorDialog(name: string, bio: string, birth: Date): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birthday: birth,
      },
      // Assign dialog width
      width: '500px'
    });
  }

  openDescriptionDialog(title: string, description: string): void{
    this.dialog.open(DescriptionComponent, {
      data: {
        Title: title,
        Description: description
      },
      width: '500px'
    })
  }
  getFavoriteMovies(): void {
    this.fetchApiData.getFavoriteMovies().subscribe((resp: any) => {
      this.favoriteMovies = resp;
      console.log(this.favoriteMovies);
      return this.favoriteMovies;
    });
  }
  isFav(id: string): boolean {
    return this.favoriteMovies.includes(id)
  }
addToFavoriteMovies(id: string): void {
  this.fetchApiData.addFavorite(id).subscribe((result) => {
    this.ngOnInit();
  })
}

removeFavoriteMovies(id: string): void {
  this.fetchApiData.removeFavorite(id).subscribe((result) => {
    this.ngOnInit();
  })
}
}
