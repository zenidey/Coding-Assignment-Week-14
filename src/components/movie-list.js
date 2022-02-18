import React from "react"; 
import Movie from "./movie";
import StarRating from "./star-rating";
import ReviewForm from "./review-form";


export default class MovieList extends React.Component {
    render() {

        let friesReviews = [
            {
                user:'Sam',
                comment:'So delicious!',
                stars:'5'
            },
            {
                user:'Alejandro',
                comment:'could be better',
                stars:'3'
            },
            {
                user:'Evelyn',
                comment:'Perfectly seasoned, but soggy',
                stars:'3.75'
            }
        ];

        // movies.forEach((movie) => {
        //     console.log(movie.title, movie.image, movie.synopsis, movie.review);
        // });

        return(
            <div className="container">
                <h1>Encanto</h1>
                <Movie {...{reviews: friesReviews, image:'Sweet Potato Fries', synopsis: 'sweet potatoes that are fried'}}  />
                <h1>Moana</h1>
                <Movie {...{title:'Moana', image:'img1', synopsis:'island girl'}} />
                {/* <Movie {...{movies}}/>  */}
                {/* <Movie test="testing"/> */}
                {/* <StarRating/> */}
                {/* <ReviewForm /> */}
                

            </div>
        )
    }
}