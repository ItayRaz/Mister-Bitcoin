import React from 'react';

export function ContactFilter({onFilter}) {
    return (
        <input type="text" onChange={(ev)=> onFilter(ev.target.value)} />
    )
}
