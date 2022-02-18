import React from "react";  
import Movie from "./movie";


export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            review: props.review,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({review: state.review}));
    }

    
    render(){
        return(
            
            <div className="container">

                <form className="form mx-auto m-5"> 

                    <label>Review Form: <input type="text" id="new-text" placeholder="Write your review here"></input></label> <br />
                    
                    <button  
                    id="add"
                    className="btn btn-primary"
                    onClick={this.handleClick}>
                    {this.state.review} Add Review</button>

                </form>

            </div>
        );
    }
    
}


// let button = document.getElementById("btn");
// let content = document.getElementById("content"); 

// let id = 0;

// document.getElementById("add").addEventListener("click", () => {
//     var parent = document.getElementById("paragraphs");
//     var newElement = document.createElement("p");
//     newElement.innerHTML = document.getElementById("new-text").value;
//     newElement.setAttribute("id", id++);
//     parent.appendChild(newElement);
//     document.getElementById("new-text").value = " ";
// });