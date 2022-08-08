import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
//Retrieve data from invoced function in movie card component
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: []
    

  ) { }

  ngOnInit(): void {
  }

}
