import React from 'react';
import './ButtonBar.css';

export default function ButtonBar(props) {



    return (
        <div className= "bar">
            {/* <div className= "double">Double</div>
            <div className= "split">Split</div> */}
            <div className= "stand " onClick= {props.done}>Stand</div>
            <div className= "hit" onClick= {props.hitFct}>Hit</div>
        </div>
    )
}
