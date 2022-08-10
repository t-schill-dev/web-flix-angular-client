import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  /**
   * Receives data from invoced openDialog function in movie card component
   * @param data
   * @requires MAT_DIALOG_DATA
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      Plot: string;
    }
  ) {}

  ngOnInit(): void {}
}
