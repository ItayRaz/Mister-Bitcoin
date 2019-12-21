import React, { Component } from 'react'
import Moment from 'moment';
// import 'moment-timezone';

export default function MovePreview({move}) {
    
    return (
        <div className="move-preview">
            <div>To: {move.to}</div>
            <div>{Moment(move.at).fromNow()}</div>
            <div>{move.amount} <i className="fas fa-coins"></i></div>
        </div>
    )   
} 