import "./Hand.css"
import React, {useState} from 'react'
import Card from '../card/Card'
import {Deck, PlayerHand} from '../../bj.js'

export default function Hand(props) {

    var d= new Deck();
    var h = new PlayerHand();

    h.add_card(d.draw(1));
    h.add_card(d.draw(2));

    let card1= h.drawn_cards[0];
    let card2= h.drawn_cards[1];

    const [sum, setSum] = useState(
        h.num
    );

    const [handCards, setHandCards]= useState(
        h.drawn_cards
    );

    const addNewCard= ()=> {
        h.add_card( d.draw() )
        setSum(h.num);
    }

    let cards = [];

    handCards.forEach(card => {

        cards.push(
            <Card value= {card._rank} suit= {card._suit}/>
        )

    });

    return (
        <div className= "hand">
            {cards}
            <p>Count: {sum} </p>
        </div>
    )
}
