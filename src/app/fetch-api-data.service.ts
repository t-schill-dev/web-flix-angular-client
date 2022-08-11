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
/**
 * Class is grouping public functions to request data from API
 * @constructor http module
 */
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}
  
  /**
 * POST request to API to register new user
 * @function userRegistration
 * @param userDetails
 */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiURL + '/users', userDetails)
      .pipe(catchError(this.handleError));
  }

   /**
 * POST request to API to log in existing user
 * @function userLogin
 * @param userDetails
 */
  public userLogin(userDetails: any): Observable<any>{
    return this.http
    .post(apiURL + '/login', userDetails)
    .pipe(catchError(this.handleError));
    }
    
 /**
 * GET request to API to return all movies
 * @function getAllMovies
 * @returns {array} of movie objects
 */
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

/**
 * GET request to API to return a single movies
 * @function getSingleMovie
 * @param title
 * @returns {object}
 */
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

/**
 * GET request to API to return director details
 * @function getDirector
 * @param name
 * @returns {object}
 */

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

/**
 * GET request to API to return user details
 * @function getUser
 * @returns {object}
 */
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
//! currently unactivated
// /**
//  * GET request to API to return favorite movies to corresponding user
//  * @function getMoviesToGenre
//  * @returns {array}
//  */
//   getFavoriteMovies(): Observable<any> {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('user');

//     return this.http
//       .get(apiURL + `/users/${username}/movies`, {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         }),
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }

/**
 * POST request to API to add favorite movie to user data
 * @function addFavorite
 * @param movieID
 */
  addFavorite(movieID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http
      .post(apiURL + `/users/${username}/movies/${movieID}`, null, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  
/**
 * DELETE request to API to remove favorite movie from user data
 * @function removeFavorite
 * @param movieID
 */
  removeFavorite(movieID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .delete(apiURL + `/users/${username}/movies/${movieID}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
 

/**
 * PUT request to API to update user data
 * @function updateUser
 * @param updateUserDetails
 * @return updatedUser
 */
  updateUser(updateUserDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .put(apiURL + `/users/${username}`, updateUserDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }


/**
 * DELETE request to API to remove user profile
 * @function deleteUser
 */
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    return this.http
      .delete(apiURL + `/users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  //Function to be called by every function above to return data
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
