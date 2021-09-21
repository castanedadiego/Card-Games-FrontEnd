import "./Hand.css"
import React, {useState} from 'react';
import Card from '../card/Card';

export default function Hand(props) {

    let h= props.cards;

    const [sum, setSum] = useState(
        h.num
    );

    const [handCards, setHandCards]= useState(
        h.drawn_cards
    );

    let cards = [];

    handCards.forEach(card => {
        cards.push(
            <Card value= {card.candyRank} suit= {card._suit}/>
        )

    });

    return (
        <div className= "hand">
            {cards}
            <p>Count: {sum} </p>
        </div>
    )
}
