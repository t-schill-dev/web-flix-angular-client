import { Component, OnInit } from '@angular/core';
import {GetAllMovies} from '../fetch-api-data.service'ö
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movies: any[] = [];

  constructor(public fetchMovies: GetAllMovies) { }

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


}
