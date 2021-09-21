import "./Hand.css"
import React, {useState} from 'react';
import Card from '../card/Card';

export default function Hand(props) {

    const [sum, setSum] = useState(props.cards.num);

    const [handCards, setHandCards]= useState(
        props.cards.drawn_cards
    );

    const renderCards= ()=> {
        let _cards =[];

        handCards.forEach(card => {
             _cards.push(
            <Card value= {card.candyRank} suit= {card._suit}/>
        )

    })
        return _cards;
    };

    return (
        <div className= "hand">
            {renderCards()}
            <p>Count: {sum} </p>
        </div>
    )
}
