import React from 'react'
import "./Card.css"

export default function Card(props) {

    const getColor= () => {
        const suit= props.suit;

        if (suit ===  "hearts" || suit ==="diamonds"){
            return "text-red";
        }

        else return "text-black";
    }

    const getSuit = () => {
        const suit= props.suit;

        const symb = {
            'hearts': '\u2665',
            "clubs": '\u2663',
            "spades": '\u2660',
            "diamonds": '\u2666'
        }

        return symb[suit];
    }

    return (
        <div>
            <div className= {`outline ${getColor()}` }>
                <div class= "top">
                    <span> {props.value}</span>
                    <span> {getSuit()}</span>
                </div>
                <h1>{getSuit()}</h1>
                <div class ="bottom">
                    <span> {props.value}</span>
                    <span> {getSuit()} </span>
                 </div>
            </div>
        </div>
    )
}
