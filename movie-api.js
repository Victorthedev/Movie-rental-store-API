class Movie {
  constructor(title, genre, releaseDate) {
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.rating = null;
    this.rented = false;
    this.rentedBy = null;
    this.reviews = [];
  }

  addReview(review) {
    this.reviews.push(review);
  }

  rateMovie(rating) {
    this.rating = rating;
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
    this.users = [];
    this.history = [];
  }

  addMovies(title, genre, releaseDate) {
    const movie = new Movie(title, genre, releaseDate);

    this.movies.push(movie);
  }

  rentMovie(movieTitle, userName) {
    const movie = this.movies.find((movie) => movie.title === movieTitle);

    const user = this.users.find((user) => user.name === userName);

    if (movie && user && !movie.rented) {
      movie.rented = true;
      movie.rentedBy = user;

      user.rentedMovies.push(movie);

      this.history.push({
        movieTitle,
        userName,
      });
      console.log(`${movieTitle} has been rented by ${userName}`);
    }
    
    else {
      console.log("User not found or this movie is currently unavailable");
    }
  }

  returnMovie(movieTitle, userName) {
    const movie = this.movies.find((movie) => movie.title === movieTitle);

    const user = this.users.find((user) => user.name === userName);

    if (movie && user && movie.rented && movie.rentedBy === user) {
      movie.rented = false;
      movie.rentedBy = null;

      user.rentedMovies = user.rentedMovies.filter(
        (m) => m.title !== movieTitle
      );
      console.log(`${userName} returned ${movieTitle}.`);
    }
    
    else {
      console.log("This user did not rent this movie.");
    }
  }

  availableMovies() {
    const availableMovies = this.movies.filter((movie) => !movie.rented);

    console.log("Currently Available:");

    availableMovies.forEach((movie) => {
      console.log(`${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
    });
  }

  searchByName(title) {
    const moviesByTitle = this.movies.filter(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    console.log("Search Results:");

    moviesByTitle.forEach((movie) => {
      console.log(`
                ${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
    });
  }

  searchByGenre(genre) {
    const moviesBygenre = this.movies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
    console.log("Search Results:");

    moviesByTitle.forEach((movie) => {
      console.log(`
                ${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
    });
  }

  rateMovie(movieTitle, rating) {
    const movie = this.movies.find(movie => movie.title === movieTitle);

    if (movie) {
        movie.rateMovie(rating);
        console.log(`${rating} stars rated`);
    }
    
    else {
        console.log('This movie is unavailable');
    }
  }

  addReview(movieTitle, review) {
    const movie = this.movies.find(movie => movie.title === movieTitle);

    if (movie) {
        movie.addReview(review);
        console.log('Thanks for the review!');
    }

    else{
        console.log('This movie is unavailable');
    }
  }

  userDetails(userName) {
    const user = this.users.find(user => user.name === userName);

    if (user) {
        console.log(`Here are your details ${userName}`)
        console.log(`Age: ${user.age}`);
        console.log('Rented movies:');

        user.rentedMovies.forEach(movie => {
            console.log(`${movie.title} - ${movie.genre}`);
        });
    }

    else {
        console.log('User not found');
    }
  }
}

class User {
    constructor(name ,age) {
        this.name = name;
        this.age = age;
        this.rentedMovies = [];
    }
}

const movieStore = new MovieStore();

movieStore.addMovies('Fast and Furious 7', 'Action', '2017');
movieStore.addMovies('Daddy daycare', 'Comedy', '2015');
movieStore.addMovies('Twilight', 'Romance', '2005');
movieStore.addMovies('The Last of Us', 'Drama', '2023');
movieStore.addMovies('Alita the Battle Angel', 'Sci-Fi', '2016');
movieStore.addMovies('Home Alone', 'Comedy', '1986');
movieStore.addMovies('The Maze Runner', 'Action', '2017');

const userOne = new User ('Seven Victor', 19);
const userTwo = new User ('Emeka Ubahakwe', 23);

movieStore.users.push(userOne);
movieStore.users.push(userTwo);

movieStore.rentMovie('Twilight', 'Seven Victor');
movieStore.rentMovie('Home Alone', 'Emeka Ubahakwe');

movieStore.returnMovie('Twilight', 'Seven Victor');

movieStore.addReview('Twilight', 'Quite sad but very lovely watch!')

movieStore.availableMovies();

movieStore.userDetails('Emeka Ubahakwe');