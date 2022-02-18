import React from "react"; 
import Movie from "./movie";
import StarRating from "./star-rating";
import ReviewForm from "./review-form";


export default class MovieList extends React.Component {
    render() {

        let movies = [
        {           
            title: 'Encanto',
            image: 'placeholder1',
            synopsis: 'yada yada1',
            review: 'love this movie'
        },
        {
            title: 'Moana',
            image: 'placeholder2',
            synopsis: 'yada yada2',
            review: 'love this movie'
        },
        {
            title: 'Frozen',
            image: 'placeholder3',
            synopsis: 'yada yada3',
            review: 'love this movie'
        }
        ];

        // let movies;
        // if(this.state.movies) {
        //     movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        // }


        movies.forEach((movie) => {
            console.log(movie.title, movie.image, movie.synopsis, movie.review);
        });

        return(
            <div className="container">
                <Movie />
                <Movie {...{movies}}/> 
                <Movie test="testing"/>
                {/* <StarRating/> */}
                <ReviewForm />
                

            </div>
        )
    }
}