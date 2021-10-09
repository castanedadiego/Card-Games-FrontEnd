import React, { useState } from 'react'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Dealer, Deck, PlayerHand} from '../../bj.js'
import DealerHand from '../dealerHand/DealerHand';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

let idx=0;
var d= new Deck();
var w = new Dealer();
var h = new PlayerHand();
h.add_card(d.draw(idx));
h.add_card(d.draw(idx+1));

w.add_card(d.draw(idx+2));
w.add_card(d.draw(idx+3));

w.drawn_cards[1].flipCard();

idx+=4;

export default function PlayingSpace() {

    const [playerHand, setPlayerHand ] = useState(h);

    const [dealHand, setDealHand] = useState(w);

    const forceUpdate = useForceUpdate();

    const hitCard = () => {
        if (playerHand.num >= 21) return 0;

        h.add_card(d.draw(idx));
        setPlayerHand(h);
        forceUpdate();
        idx++;

        if (h.did_bust()) setTimeout(handlePlayerDone, 500);
    }

    const handlePlayerDone = () => {
        w.play(d, idx);
        setDealHand(w);
        forceUpdate();
        idx++;
    }


    const handleRound = () => {

    }




    return (
        <div >
            <DealerHand cards = {dealHand}/>
            <Hand cards = {playerHand} done = {handlePlayerDone} />
            <ButtonBar hitFct= {hitCard} done= {handlePlayerDone} />
        </div>
    )
}
