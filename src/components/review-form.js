import React from "react";  
import Movie from "./movie";


export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            review: props.review,
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({count: state.count +1}));
    }

    render(){
        return(
            <div className="container">

                <form className="form mx-auto m-5"> 
                    <h3></h3>

                    <label>Review Form: <input type="text" placeholder="Write your count here"></input></label> <br />
                    

                    <button  
                    className="btn btn-primary"
                    onClick={this.handleClick}>
                    {this.state.review}{this.state.count}</button>
                </form>

            </div>
        );
    }
    
}


