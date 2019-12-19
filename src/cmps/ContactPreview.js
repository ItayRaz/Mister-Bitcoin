import React from 'react';

export function ContactPreview({ contact }) {
    return (
        <div className="contact-prev">
            <img src={`https://robohash.org/${contact.name}`}></img> <span>{contact.name}</span>
        </div>
    )
}