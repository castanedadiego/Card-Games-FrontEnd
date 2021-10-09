import React, {useState} from 'react'
import Hand from '../hand/Hand'
import {Deck, Dealer} from '../../bj.js'


export default function DealerHand(props) {

    return (
        <div>
            <Hand cards= {props.cards}/>
        </div>
    )
}
