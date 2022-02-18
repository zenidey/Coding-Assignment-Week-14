import React from "react"; 
import Data from "./data";
import MovieList from "./movie-list";
import Review from "./review";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
            test: props.test
        };
    }

    render() {

        // let reviews = [];
        // if (this.state.reviews) {
        //     for(let review of this.state.reviews) {
        //         reviews.push(<Data {...review} />);
        //     }
        // }

        let movies;
        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Data key={index} {...movie} />);
        }

        return(
            <div className="container">
                
            {/* <div className="card-body"> 

                <h5>{this.props.title}</h5>
                    {this.props.image} <br/>
                    {this.props.synopsis} <br/>
                    {this.props.review}
        
            </div> */}

                <div>
                    {this.state.test}
                </div>
                <div>
                    {movies}
                </div>
                
            </div>
        )
    }
}


