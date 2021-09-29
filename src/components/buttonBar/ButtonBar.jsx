import React from 'react';
import './ButtonBar.css';

export default function ButtonBar(props) {

    const event= new Event('playerStands')


    return (
        <div className= "bar">
            <div className= "double">Double</div>
            <div className= "split">Split</div>
            <div className= "stand">Stand</div>
            <div className= "hit" onClick= {props.hitFct}>Hit</div>
        </div>
    )
}
