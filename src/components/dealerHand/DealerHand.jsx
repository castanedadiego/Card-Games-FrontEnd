import React, {useState} from 'react'
import Hand from '../hand/Hand'
import {Deck, Dealer} from '../../bj.js'


var d= new Deck();
var h = new Dealer();
var idx=3;
h.add_card(d.draw(1));
h.add_card(d.draw(2));

export default function DealerHand() {

    h.drawn_cards[1].setFaceDown();


    const play  = () => {
        h.play(d, idx);
    }




    const [dealerHand, setDealerHand ] = useState(h);

    return (
        <div>
            <Hand cards= {dealerHand}/>
        </div>
    )
}
