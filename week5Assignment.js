//	Create a menu app as seen in this week’s video. 
//  What you create is up to you as long as it meets 
//    the following requirements:
//	Use at least one array.
//	Use at least two classes.
//	Your menu should have the options 
//    to create, view, and delete elements.
class Movie {
    constructor(title, director) {
      this.title = title
      this.director = director;
    }
  
    describe() {
      return`The movie, ${this.title}, was directed by ${this.director}.`;
    }
  }
  
  class List {
    constructor() {
      // this.title = title;
      this.movies = [];    
    }
  
    addMovie(movie) {
      if (movie instanceof Movie) {
        this.movies.push(movie);
      } else {
        throw new Error (`You can only add an instance of movie. Argument is not a movie: ${movie}.`);
      }           
    }
      
    displayMovies () {
      let movieList = '';
      for (let i = 0; i < this.movies.length; i++) {
        movieList += `Title: ${this.movies[i].title} \nDirector: ${this.movies[i].director}\n`;
      }
      return movieList;
    }
  }
  
  // 2 new instances of movie for myslef to check
  let movie1 = new Movie('Jurassic Park', 'Steven Spielberg');
  let movie2 = new Movie('How the Grinch Stole Christmas', 'Ron Howard');
  
  // log the movie description
  console.log(movie1.describe());
  console.log(movie2.describe());
  
  // make new instance of class List  for myself to check
  let list = new List;
  list.addMovie(movie1);
  list.addMovie(movie2);
  console.log(list.displayMovies());
  // console.log(displayMovies(movies));
  
  // create menu class with empty variable to push movies
  // set a variable to null for user input later in the menu
  class Menu {
    constructor () {
        this.movieList = [];
        this.selectedMovie = null;
    }
  // use switch cases to allow user to choose number to run methods
    start() {
      // while the user has not chosen '0': case 1-4 and add methods
        let selection = this.showMainMenuOptions;
        while (selection != 0) {
           switch(selection) {
            case '1':
                this.createMovie();
                break;
            case '2':
                this.viewMovie();
                break;
            case '3':
                this.deleteMovie();
                break;
            case '4':
                this.displayMovies();
                break;
            default:
                selection = 0;
           } 
          selection = this.showMainMenuOptions();  
        }
        alert('Goodbye!');
    }
    // create a menu of options for user 0-4 based on switch cases above
    showMainMenuOptions () {
      return prompt(`
        0) exit
        1) create new Movie
        2) view Movie
        3) delete Movie
        4) display all Movies
        `)        
    }
    // menu of options when the to run methods to create/delete 
    showMovieMenuOptions(movieInfo) {
        return prompt(`
        0) back
        1) create
        2) delete
        ----------------------
        ${movieInfo}
        `);
    }
  
    // method to see the movies in a list
    displayMovies () {
       let movieString = '';  
       for (let i = 0; i < this.movieList.length; i++) {
        movieString += i + ' ) ' + this.movieList[i].title + '\n';
       }
       alert(movieString);
    }
    // method to create movie in movie class 
    // promplt user for title and director
    // create new Movie instance and push to the movie List array
    createMovie() {
        let title = prompt('Enter title for new movie:');
        let director = prompt('Enter a director:');
        this.movieList.push(new Movie(title, director));
    }
    
    // method to allow the user to view the movies in the List
    // if the user inputs an idex that is > -1 && < the List length
    // the user input is the list at the index inputed
    viewMovie() {
        let index = prompt('Enter the index of the movie you wish to view:')
        if (index > -1 && index < this.movieList.length) {
            this.selectedMovie = this.movieList[index];
            let description = `Movie Title: ${this.selectedMovie.title}\n        Director: ${this.selectedMovie.director}\n`;
             //for my own reference:
            //iterate over the movie selection inputed and have different description 
            for (let i = 0; i < this.selectedMovie.length; i++) {
                description += i + ') '+ this.selectedMovie.movies[i].title 
                  + ' - ' + this.selectedMovie.movies[i].director + '\n';
            }
            // use switch for case: create, delete
            let selection = this.showMovieMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createMovie();
                    break; 
                case '2':
                    this.deleteMovie();  
            }
        }
    }
    // delete method. user input with index > -1 and < movieList.length
    // splice method to delete index from movie list
    deleteMovie() {
        let index = prompt('Enter the index of the movie you wish to delete;');
        if (index > -1 && index < this.movieList.length) {
            this.movieList.splice(index, 1);
        }
    }

  }
    
  // create a variable to make new instance of menu and invoke .start
  let menu = new Menu();
  menu.start();
  
  
  
  
  
  