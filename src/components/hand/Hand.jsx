import "./Hand.css"
import React, {useState} from 'react';
import Card from '../card/Card';

export default function Hand(props) {

    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const done= new Event('done');

    const [handCards, setHandCards]= useState(
        props.cards.drawn_cards
    );

    const renderCards= ()=> {
        let _cards =[];

        props.cards.drawn_cards.forEach( (card, idx) => {
             _cards.push(
            <Card  face= {card.face_down} value= {card.candyRank} suit= {card._suit} key={idx}/>
        )
    })
        return _cards;
    };

    return (

        <div className= "hand">
            {renderCards()}
            {/* <p>Count: {props.cards.num} </p> */}
        </div>
    )
}
