import React, { useState } from 'react'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Deck, PlayerHand} from '../../bj.js'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function PlayingSpace() {
    var d= new Deck();
    var h = new PlayerHand();

    h.add_card(d.draw(1));
    h.add_card(d.draw(2));
    h.add_card(d.draw(3));

    const [playerHand, setPlayerHand ] = useState(h);

    const forceUpdate = useForceUpdate();

    const hitCard = () => {
        h.add_card(d.draw(1))
        setPlayerHand(h);
        forceUpdate();
    }

    return (
        <div >
            <Hand cards = {h} />
            <ButtonBar onClick= {hitCard} />
        </div>
    )
}
