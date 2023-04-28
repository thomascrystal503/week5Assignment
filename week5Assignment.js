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
      // describe() {
      //  return`${this.title} has ${this.movies.length} movie(s).`;
      // }       
    }
      
    displayMovies () {
      let movieList = '';
      for (let i = 0; i < this.movies.length; i++) {
        movieList += `Title: ${this.movies[i].title} \nDirector: ${this.movies[i].director}\n`;
      }
      return movieList;
    }
  }
  
  // 2 new instances of movie
  let movie1 = new Movie('Jurassic Park', 'Steven Spielberg');
  let movie2 = new Movie('How the Grinch Stole Christmas', 'Ron Howard');
  
  // log the movie description
  console.log(movie1.describe());
  console.log(movie2.describe());
  
  // 
  let list = new List;
  list.addMovie(movie1);
  list.addMovie(movie2);
  console.log(list.displayMovies());
  // console.log(displayMovies(movies));
  class Menu {
    constructor () {
        this.movieList = [];
        this.selectedMovie = null;
    }
  
    start() {
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
    showMainMenuOptions () {
      return prompt(`
        0) exit
        1) create new Movie
        2) view Movie
        3) delete Movie
        4) display all Movies
        `)        
    }
     
    showMovieMenuOptions(movieInfo) {
        return prompt(`
        0) back
        1) create
        2) delete
        ----------------------
        ${movieInfo}
        `);
    }
  
  
    displayMovies () {
       let movieString = '';  
       for (let i = 0; i < this.movieList.length; i++) {
        movieString += i + ' ) ' + this.movieList[i].title + '\n';
       }
       alert(movieString);
    }
  
    createMovie() {
        let title = prompt('Enter title for new movie:');
        let director = prompt('Enter a director:');
        this.movieList.push(new Movie(title, director));
    }
  
    viewMovie() {
        let index = prompt('Enter the index of the movie you wish to view:')
        if (index > -1 && index < this.movieList.length) {
            this.selectedMovie = this.movieList[index];
            let description = `Movie Title: ${this.selectedMovie.title}\n        Director: ${this.selectedMovie.director}\n`;
  
            for (let i = 0; i < this.selectedMovie.length; i++) {
                description += i + ') '+ this.selectedMovie.movies[i].title 
                  + ' - ' + this.selectedMovie.movies[i].director + '\n';
            }
         
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
    
    deleteMovie() {
        let index = prompt('Enter the index of the movie you wish to delete;');
        if (index > -1 && index < this.movieList.length) {
            this.movieList.splice(index, 1);
        }
    }
  
    createPlayer() {
        let title = prompt('Enter title for new movie:');
        let director = prompt('Enter director for new movie:');
        this.selectedMovie.movies.push(new Movie(title, director));
    }
  
    deletePlayer () {
        let index = prompt('Enter the index of the movie you wish to delete:');
        if (index > -1 && index < this.selectedMovie.movies.length){
            this.selectedMovie.movies.splice(index, 1);            
        }
    }
  }
  
  
  let menu = new Menu();
  menu.start();