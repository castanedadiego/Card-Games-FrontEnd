import React, { useEffect, useState } from 'react'
import './PlayingSpace.css'
import ButtonBar from '../buttonBar/ButtonBar'
import Hand from '../hand/Hand'
import {Dealer, Shoe, PlayerHand, Deck} from '../../bj.js'
import DealerHand from '../dealerHand/DealerHand';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

var idx=0;
var w= new Dealer();
var h = new PlayerHand;
var d= new Deck(6);

export default function PlayingSpace() {

    const [playerHand, setPlayerHand ] = useState(h);
    const [dealHand, setDealHand] = useState(w);
    const [bankRoll, setBankRoll]= useState(100);
    const [handCounter, setHandCounter] = useState(0);

    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);


    const hitCard = () => {
        if (playerHand.num >= 21) return 0;

        h.add_card(d.draw(idx));
        setPlayerHand(h);
        forceUpdate();
        idx++;

        if (h.did_bust() || h.num ==21) setTimeout(handlePlayerDone, 1000);
    }

    const handlePlayerDone = () => {
        w.play(d, idx);
        setDealHand(w);
        let roundOutcome = h.gameResult(w);
        setBankRoll(bankRoll+ roundOutcome);

        forceUpdate();
        idx++;

        setTimeout(newRound, 1500)
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

        if (h.num ===21) handlePlayerDone();


    }

        useEffect(() => {

            newRound();

        }, [])

    return (
        <div >
            <div onClick= {newRound}>New</div>
            <DealerHand cards = {dealHand} handkey= {handCounter}/>
            <Hand cards = {playerHand} handkey= {handCounter} />
            <ButtonBar hitFct= {hitCard} done= {handlePlayerDone} />
            <div className= "money">${bankRoll}</div>
        </div>
    )
}
