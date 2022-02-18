import React from "react";
import Movie from "./movie";
import MovieList from "./movie-list";

export default class Data extends React.Component {

    render() {

        return(
            <div className="card w-75 mb-5">
                <div className="card-title text-center bg-success text-white">
                <h5>{this.props.title}</h5>
                </div>
                <div className="card-body"> 
                {/* <h5>{this.props.title}</h5> */}
                {this.props.image} <br/>
                {this.props.synopsis} <br/>
                {this.props.review}
                </div>
            </div>
        );

    }
}

