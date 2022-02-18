import React from "react";  
import Movie from "./movie";
import ReviewForm from "./review-form";
import $ from 'jquery';


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



// export default class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     display(elementID) {
//         $(`#${elementID}`).text(`${this.firstName} ${this.lastName}`); //changing the DOM
//     }
// }



// export default class Review extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: props.movies,
//             reviews: [],
//             // images: props.images,
//             // synopsis: props.synopsis,
//             test: props.test
//         };
//     }

    

//     render() {

//         let reviews = [];
//         if (this.state.reviews) {
//             for(let review of this.state.reviews) {
//                 reviews.push(<Movie {...review} />);
//             }
//         }

//         return(
//             <div className="card w-75 mb-5">
//                 {this.state.review}
//             </div>
//         )
//     }
    
// }