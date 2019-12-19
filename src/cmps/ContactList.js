import React from 'react';
import { Link } from 'react-router-dom'

import { ContactPreview } from './ContactPreview'


export function ContactList({ contacts }) {
    return (
        <section>
            <ul className="contact-list">
                {contacts.map(contact =>
                    <Link to={`/contact/${contact._id}`} key={contact._id}>
                        <li><ContactPreview contact={contact}></ContactPreview></li>
                    </Link>)}
            </ul>
        </section>
    )
}