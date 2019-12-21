import React from 'react';

import {ContactList} from '../../../cmps/ContactList'
import {ContactFilter} from '../../../cmps/ContactFilter'
import { loadContacts } from '../actions'
import { getLoggedUser } from '../../user/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ContactPage extends React.Component {
    state = {
        contacts: [],
        filter: ''
    }
    componentDidMount() {
        const loggedUser = this.props.getLoggedUser();
        if (!loggedUser.user) this.props.history.push('/signUp')
        this.props.loadContacts()
        // let contacts = await ContactService.getContacts();
        // this.setState({ contacts })
    }

    handleFilter = async (value) => {
        let filter = {};
        filter.term = value;
        this.props.loadContacts(filter)
    }
    
    render() {
        const { contacts } = this.props;
        return (
            <section className="contact-page">
                <h1>Contacts</h1>
                <ContactFilter onFilter={this.handleFilter}></ContactFilter>
                <ContactList contacts={contacts}></ContactList>
                <Link to="/contact/edit"><button><i className="fas fa-plus add-btn"></i></button></Link>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
    getLoggedUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)