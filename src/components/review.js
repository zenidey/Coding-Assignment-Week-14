import React from "react";  
import $ from "jquery";
import Movie from "./movie";
import ReviewForm from "./review-form";



export default class Review extends React.Component{
    render(){
        return(  

            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    <h4>{this.props.user}</h4>
                </div>
                <div className="card-body">
                    <p>{this.props.comment}</p>
                </div>
                <div className="card-footer">
                    <p>{this.props.stars}/5 Stars</p>
                </div>
            </div>

        );
    }
}
