import React from "react"; 
import Data from "./data";
import MovieList from "./movie-list";
import Review from "./review";

export default class Movie extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            reviews: props.reviews,
            title: props.title,
            image: props.image,
            synopsis: props.synopsis
        };
    }

    render(){
        let reviews;

        if(this.state.reviews){
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review}/>);
        }

        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{this.props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.image}</p>
                    <p className="card-text">{this.props.synopsis}</p>
                </div>
                <div className="card-footer">
                    {reviews}
                </div>
            </div>
      );
    };
}

// export default class Movie extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: props.movies,
//             test: props.test
//         };
//     }

//     render() {

//         // let reviews = [];
//         // if (this.state.reviews) {
//         //     for(let review of this.state.reviews) {
//         //         reviews.push(<Data {...review} />);
//         //     }
//         // }

//         let movies;
//         if(this.state.movies) {
//             movies = this.state.movies.map((movie, index) => <Data key={index} {...movie} />);
//         }

//         return(
//             <div className="container">
                
//             {/* <div className="card-body"> 

//                 <h5>{this.props.title}</h5>
//                     {this.props.image} <br/>
//                     {this.props.synopsis} <br/>
//                     {this.props.review}
        
//             </div> */}

//                 <div>
//                     {this.state.test}
//                 </div>
//                 <div>
//                     {movies}
//                 </div>
                
//             </div>
//         )
//     }
// }


