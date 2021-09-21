import React, { useState } from 'react'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Deck, PlayerHand} from '../../bj.js'

export default function PlayingSpace() {

    var d= new Deck();
    var h = new PlayerHand();


    const [playerHand, setPlayerHand ] = useState(h);

    const hitCard = () => {

        h.add_card(d.draw(3));
        setPlayerHand(h);
    }



    h.add_card(d.draw(1));
    h.add_card(d.draw(2));


    return (
        <div>
            <Hand cards = {playerHand} />
            <ButtonBar hit= {hitCard}/>
        </div>
    )
}
