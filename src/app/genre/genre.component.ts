import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  /**
   * Receives data from invoced openDialog function in movie card component
   * @param data
   * @requires MAT_DIALOG_DATA
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Movies: any[];
    }
  ) {}

  ngOnInit(): void {}
}
