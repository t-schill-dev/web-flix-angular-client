import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
public router: Router
  ) { }

  ngOnInit(): void {
  }

  //navigate to routes as declared in app.module
navigateToMovies():void {
this.router.navigate(['movies'])
}

navigateToProfile():void {
  this.router.navigate(['profile'])
}

logout():void {
  localStorage.clear();
  this.router.navigate(['welcome'])
}

}
