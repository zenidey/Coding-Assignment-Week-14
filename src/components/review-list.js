import React from "react";
import ReviewForm from "./review-form";


export default class ReviewList extends React.Component{ 

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         review: '',
    //     };

    //     handleCallback = (reviewData) =>{ 
    //     this.setState({review: reviewData}) 
    // }


       state = { 
        review: "", 
       } 

    handleCallback = (reviewData) =>{ 
    this.setState({review: reviewData}) 

    } 


    render(){ 

        const {review} = this.state; 

        return( 

            <div> 
                <ReviewForm parentCallback = {this.handleCallback}/> 
                {review} 
            </div> 

        ) 

    } 
} 
