import React from "react"; 
import StarRating from "./star-rating";
import Review from "./review";



export default class MovieList extends React.Component {
    render() {

        return(
            <div className="container my-5">
                <div className="card">
                    <h1 className="display-heading text-center mt-4">
                        {this.props.title} <br/>
                    </h1>
                    <div className="card-body text-center">
                    <img src={this.props.image} className="image" height = "500px"/><br/><br/>
                        {this.props.synopsis}
                    </div>
                    <div className="card-footer">
                        <StarRating />
                        <Review />
                    </div>
                </div>
            </div>
        )
    }
}
