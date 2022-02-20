import React from "react";
import Movie from "./movie";

export default class MovieApp extends React.Component {
    render() {

        let movies = [  // an array of objects containing movies and their properties
            {           
                title: 'Encanto',
                image: 'https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg',
                synopsis: 'The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.',
            },
            {
                title: 'Moana',
                image: 'https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg',
                synopsis: 'An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity.',
            },
            {
                title: 'Frozen',
                image: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810',
                synopsis: 'When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna\'s sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter\'s cold grip.',
            }
        ];

    
        console.log({movies});
        // console.log({review});
        
        return (

            <div>
                <Movie {...{movies}} /> 
                {/* Passing in an array of objects(movies) into the component Movie which gives each object a unique key */}
            </div>

        );
    }
}