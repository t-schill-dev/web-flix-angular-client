
# Angular Movies App

Using Angular and TypeScript to create a beautiful UI and interact with the REST API  on the backend in the 'web-flix-app'-Repository.


## Installation

### Install dependencies for meet-app with npm

```bash
  git clone https://github.com/t-schill-dev/web-flix-angular-client.git
  cd web-flix-angular-client
  npm install
  
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project to the corresponding GH pages. The build artifacts will be stored in the `dist/` directory.

## Key Features
* Welcome view where users are able to either log in or register an account
* Upon authentication, display a view of all Movies
* Upon clicking on a particular movie, users will be taken to a single movie view, where
additional movie details will be displayed. The single movie view will contain the following additional features:
  * A button that when clicked takes a user to the ​director view,​ where details about the director of that particular movie will be displayed.
  * A button that when clicked takes a user to the ​genre view,​ where details about that particular genre of the movie will be displayed.


### What technology did I use and why?

I chose to create the application using **Angular** due to the following considerations:

I use **Angular Material** to style the UI of my application to make it responsive and take advantage of the ready to use components, such as mat cards.

### What challenges did I face, what did I learn?
* Transferring data from one component to the other (e.g., from movie-card-component to genre-component). Found the solution by 'Injecting' the variables using @Inject(MAT_DIALOG_DATA).

* The application requires a service to get the favorite movies of a user. As this API endpoint was not defined yet, I had to go back to the backend code and add this GET endpoint.

## Development Process for the movies application
### Install Angular
1. Check if Angular is already installed on device
```bash
ng --version
```

2. If not, install Angular
```bash
npm install -g @angular/cli
```

### Create a new Angular project
1. Navigate to folder and create project
```bash
ng new my-project-name
```

2. Navigate to project folder to run project
```bash
ng serve --open
```

### Set up app to load data from movie API
1. Set up Angular HttpClient
  1.1. Go to app.module.ts and add
  ```bash
  import { HttpClientModule } from '@angular/common/http';
  ```

  1.2. Add HttpClientModule to the imports of @NgModule

2. Create Angular Service for Consuming REST API 
  2.1 Create a new Service inside app folder
  ```bash
  ng generate service fetch-api-data
  ```

  2.2. Add import statements to fetch-api-data.service.ts file
  ```bash
  import { catchError } from 'rxjs/internal/operators';
  import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map } from 'rxjs/operators';
  ```

3. Implement services logic to make API calls
* User registration
* User login
* Get all movies
* Get one movie
* Get director
* Get genre
* Get user
* Get favourite movies for a user
* Add a movie to favourite Movies
* Edit user
* Delete user and
* Delete a movie from the favorite movies


### Add Angular Material to application
1. Install project dependency
```bash
$ ng add @angular/material
```

2. Import models from Angular Material to app.module.ts

3. Add modules to imports array to serve to other components

### Create components for user to use application
Using the command:
```bash
$ ng generate component my-component-name
```

Structure of components:
* Welcome screen
  * User registration form (signup)
  * User login form
* Navbar 
* Movie Card View
* Dialogs for Movie Card: 
  * Director
  * Genre
  * Synopsis
* Profile View
  * Edit profile dialog


### Add routing to application
1. Import Angular's built-in router:
```bash
import { RouterModule, Routes } from '@angular/router';
```

2. Add to app.component.html
```bash
<router-outlet></router-outlet> 
```

3. Create routes in app.module.ts

### (Optional) Deploy application on github pages

1. If not done yet: Create github repository for application

2. If also not done yet: Link the new remote repository to the local project folder. To do so, simply run this command from inside your project folder (replace <GitHub-username> and <repository-name> with your own GitHub username and repository name): git remote add origin https://github.com/<GitHub-username>/<repository-name>.git

3. Add angular-cli-ghpages by running 
```bash
ng add angular-cli-ghpages.
```

4. Build your application (i.e., generate static HTML, CSS, and JavaScript files out of your application so that browsers can interpret them without the need to use any extra tools/plugins). To do so, run the following command, replacing <repository-name> with your own repository name:
```bash
 ng deploy --base-href=/<repository-name>/.
```

### Add TypeDoc Documentation
1. Install typedoc (if not yet installed):
```bash
npm install typedoc
```

2. Check that code is commented adhering to best practices

3. Run typedoc to create documentation:
```bash
npx typedoc --entryPointStrategy expand ./src
```




## Documentation

### Dependencies
**For Development**
- Angular Material
- Angular Router
- Http Client Module

## Screenshots

![App Screenshot](https://freeimage.host/i/screenshot-2022-08-10-191754.U4O9bS)
![App Screenshot](https://freeimage.host/i/screenshot-2022-08-10-191828.U4OJz7)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://timon-schill.atwebpages.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/timon-schill/)







