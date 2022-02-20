import React from "react";  
import { FaStar } from "react-icons/fa";


export default class StarRating extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            ratings: 0
        };
        this.handleRating = this.handleRating.bind(this);
    }

    handleRating() {
        this.setState(state => ({ratings: state.ratings + 1}));
    }

    render()  {

        return <div>
            
            {[ ...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            const rating = this.state.ratings;

            console.log(ratingValue);
            console.log(this.state.ratings);

            return  <label className="">
                    <input type="radio" name="rating" value={ratingValue} onClick={this.handleRating}/>
                    <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} key={ratingValue} size={25} />
                    </label>;
                    
            })}

            </div>
    }

}


