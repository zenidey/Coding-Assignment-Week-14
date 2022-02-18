import React from "react";  
import Movie from "./movie";
import ReviewForm from "./review-form";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
            reviews: [],
            // images: props.images,
            // synopsis: props.synopsis,
            test: props.test
        };
    }

    

    render() {
        
        let reviews = [];
        if (this.state.reviews) {
            for(let review of this.state.reviews) {
                reviews.push(<Movie {...review} />);
            }
        }

        return(
            <div className="card w-75 mb-5">
                {this.state.review}
            </div>
        )
    }
    
}