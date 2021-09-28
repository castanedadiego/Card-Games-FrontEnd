import "./Hand.css"
import React, {useState} from 'react';
import Card from '../card/Card';

export default function Hand(props) {

    const [handCards, setHandCards]= useState(
        props.cards.drawn_cards
    );

    const renderCards= ()=> {
        let _cards =[];

        handCards.forEach( (card, idx) => {
             _cards.push(
            <Card  face= {card.face_down} value= {card.candyRank} suit= {card._suit} key={idx}/>
        )
    })
        return _cards;
    };

    return (
        <div className= "hand">
            {renderCards()}
            <p>Count: {props.cards.num} </p>
        </div>
    )
}
