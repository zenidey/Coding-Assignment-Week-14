import React from "react"; 

export default class ReviewForm extends React.Component{ 
    
    onTrigger = (event) => { 
        this.props.handleCallback(event.target.newReview.value); 
        event.preventDefault(); 
    } 

    render(){ 

        return( 

            //ReviewForm calls the Review's callback function using props and passes the data to Review

        <div> 
            <form onSubmit = {this.onTrigger}> 

                <textarea className="form-control" rows="3" type="text" name="newReview" placeholder="Enter Review"/> <br/>
                <button className="btn btn-secondary btn-sm float-right mb-2" type="submit" value="Submit"> post review </button>

            </form> 
            
        </div> 

        ) 

    } 
} 


