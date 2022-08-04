import { Component, OnInit } from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar'

import {DirectorComponent} from '../director/director.component';
import {GenreComponent} from '../genre/genre.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movies: any[] = [];

  constructor(
    public fetchMovies: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar

    )
     { }

  //Fuction gets called immediately after mounting
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    this.fetchMovies.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      console.log(this.movies)
      return this.movies;
    })
  }
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      // Assign dialog width
      width: '500px'
    });
  }
  openDirectorDialog(name: string, bio: string, birthday: Date): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birthday: birthday,
      },
      // Assign dialog width
      width: '500px'
    });

  }
}
