import React, { useEffect, useState } from 'react'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Dealer, Deck, PlayerHand} from '../../bj.js'
import DealerHand from '../dealerHand/DealerHand';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

let idx=0;
var w= new Dealer();
var h = new PlayerHand;
var d= new Deck();

export default function PlayingSpace() {

    const [playerHand, setPlayerHand ] = useState(h);
    const [dealHand, setDealHand] = useState(w);
    const [handCounter, setHandCounter] = useState(0);

    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


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

    const newRound = () => {

       w.clear();
       h.clear();

        w.add_card(d.draw(idx));
        h.add_card(d.draw(idx+1));

        w.add_card(d.draw(idx+2));
        h.add_card(d.draw(idx+3));

        setHandCounter(handCounter+1);

        w.drawn_cards[1].flipCard();

        setPlayerHand(h);
        setDealHand(w);

        forceUpdate();

        idx+=4;

    }

        useEffect(() => {

            newRound();

        }, [])



    return (
        <div >
            <div onClick= {newRound}>New</div>
            <DealerHand cards = {dealHand} handkey= {handCounter}/>
            <Hand cards = {playerHand} done = {handlePlayerDone} handkey= {handCounter} />
            <ButtonBar hitFct= {hitCard} done= {handlePlayerDone} />
        </div>
    )
}
