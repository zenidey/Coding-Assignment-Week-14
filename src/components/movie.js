import React from "react"; 
import MovieList from "./movie-list";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies   // gives access to movies and its properties at current state (although this has been hard-coded)
        };
    }

    render() {

        let movies;
        if(this.state.movies) {
            movies = this.state.movies.map((currentMovie, index) => <MovieList key={index} {...currentMovie} />);
        }
        // setting the elements array index as the key
        // map through the array movies, take the currentMovie and it's index, for each instance of MovieList attach key=index to the currentMovie

        return(

            <div>
            {movies}
            {/* Returning each object(movie) within movies with a unique key*/}
            </div>

        )
    }
}
