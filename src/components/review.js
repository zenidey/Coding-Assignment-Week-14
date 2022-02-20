import React from "react";  
import ReviewForm from "./review-form";

export default class Review extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }
    
    handleCallback = (reviewData) => { this.setState({reviews: reviewData}) } // retrieves data from ReviewForm 


    render() { 

    let {reviews} = this.state;
    console.log({reviews});

     return( 

         <div>  
            <div>
             {reviews} 
             {/* Displaying the reviews */}
             </div><br/>

             <div>
             <ReviewForm handleCallback = {this.handleCallback}/> 
             {/* Passing the callback function to the ReviewForm as props from the Review */}
            </div> 
         </div> 

     ) 

 } 
} 

