import React from "react"; 
import MovieList from "./movie-list";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
            test: props.test
        };
    }

    render() {

        let movies;
        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }

        return(
            <div>
            {movies}

            <h1 className="container border text-center my-5">{this.props.title}</h1>
            <h3>{this.props.image}</h3>
            <h6>{this.props.synopsis}</h6>

            </div>
        )
    }
}
