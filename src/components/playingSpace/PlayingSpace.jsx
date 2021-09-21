import React, { useState } from 'react'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Deck, PlayerHand} from '../../bj.js'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

var d= new Deck();
var h = new PlayerHand();
var idx=0;
h.add_card(d.draw(1));
h.add_card(d.draw(2));

export default function PlayingSpace() {



    const [playerHand, setPlayerHand ] = useState(h);

    const forceUpdate = useForceUpdate();

    const hitCard = () => {
        h.add_card(d.draw(idx));
        setPlayerHand(h);
        forceUpdate();
        console.log("test");
        idx++;
    }

    return (
        <div >
            <Hand cards = {playerHand} />
            <ButtonBar onClick= {hitCard} />
        </div>
    )
}
