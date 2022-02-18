import React from "react";  
import { FaStar } from "react-icons/fa";

export default class StarRating extends React.Component {
    render()  {

        const setRating = 0;

        return <div>
            {[ ...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return  <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={() => setRating = ratingValue}/>
                    <FaStar className="star" size={25} />
                    </label>;
            })}
            </div>
    }
}