class Movie {
    details(
        title,
        genre,
        releaseDate
    ) {
        this.title = title;
        this.genre = genre;
        this.releaseDate = releaseDate
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
    details() {
        this.movies = [];
        this.users = [];
        this.history = [];
    }

    addMovies(title,
        genre,
        releaseDate
        ) {
            const movie = new Movie (title, genre, releaseDate);

            this.movies.push(movie);
        }

        rentMovie(movieTitle, userName) {
            const movie = this.movies.find(movie => movie.title === movieTitle);

            const user = this.users.find(user => user.name === userName);

            if (movie && user && !movie.rented) {
                movie.rented = true;
                movie.rentedBy = user;

                user.rentedMovies.push(movie);

                this.rentalHistory.push({
                    movieTitle, userName
                });
                console.log(`${movieTitle} has been rented by ${userName}`);
            }

            else {
                console.log('User not found or this movie is currently unavailable');
            }
        }

        returnMovie(movieTitle, userName) {
            const movie = this.movies.find(movie => movie.title === movieTitle);

            const user = this.users.find(user => user.name === userName);

            if (movie && user && movie.rented && movie.rentedBy === user) {
                movie.rented = false;
                movie.rentedBy = null;

                user.rentedMovies = uder.rentedMovies.filter(
                    m => m.title !== movieTitle
                );
                console.log(`${userName} returned ${movieTitle}.`);
            }

            else{
                console.log('This user did not rent this movie.')
            }
        }

        availableMovies() {
            const availableMovies = this.movies.filter(movie => !movie.rented);

            console.log('Currently Available:');

            availableMovies.forEach(movie => {
                console.log(`${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
            });
        }

        searchByName(title) {
            const moviesByTitle = this.movies.filter(
                movie => movie.title.tolowercase() === title.tolowercase()
            );
            console.log('Search Results:');

            moviesByTitle.forEach(movie => {
                console.log(`
                ${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
            });
        }

        searchByGenre(genre) {
            const moviesBygenre = this.movies.filter(
                movie => movie.genre.tolowercase() === genre.tolowercase()
            );
            console.log('Search Results:');

            moviesByTitle.forEach(movie => {
                console.log(`
                ${movie.title}
                ${movie.genre}
                ${movie.releaseDate}`);
            });
        }

}

