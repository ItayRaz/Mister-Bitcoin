import React, { Component } from 'react';
import MovePreview from './MovePreview';
import { Link } from 'react-router-dom'


export default function MoveList ({moves}){
    return (
        <section className="move-list">
            {moves.map(move => <Link to={`/contact/${move.toId}`}><MovePreview move={move} key={move.toId}></MovePreview></Link>)}
        </section>
    )
}