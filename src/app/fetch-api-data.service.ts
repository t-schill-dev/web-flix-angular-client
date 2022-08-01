import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiURL = 'https://web-flix-movies.herokuapp.com';
@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}
  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiURL + '/users', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

//DEFINING ENDPOINTS
// User Registration
export class userRegistration {
  constructor(private http: HttpClient) {}

  userRegistration(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .post(apiURL + '/users', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Unable to register. Please try again later.');
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
}

//Get all movies
export class getAllMovies {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiURL + '/movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

// Get a single movie
// Expects movie title
export class getOneMovie {
  constructor(private http: HttpClient) {}

  getSingleMovie(title: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiURL + `/movies/${title}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

// Get director
//Expects MovieDirector name

export class getDirector {
  constructor(private http: HttpClient) {}

  getDirector(name: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiURL + `/movies/director/${name}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

//Get genre
//Expects genre name
export class getGenre {
  constructor(private http: HttpClient) {}

  getGenre(name: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiURL + `/movies/genre/${name}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

//Get a single user

export class getUser {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .get(apiURL + `/users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
//get favorite movies of a user
export class getFavoriteMovies {
  constructor(private http: HttpClient) {}

  getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .get(apiURL + `/users/${username}/movies`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

//Add movie to favorite list
// PUT request
export class addFavorite {
  constructor(private http: HttpClient) {}

  addFavorite(movieID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .post(apiURL + `/users/${username}/movies/${movieID}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

// Remove favorite movie
export class removeFavorite {
  constructor(private http: HttpClient) {}

  removeFavorite(movieID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .delete(apiURL + `/users/${username}/movies/${movieID}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
