import React from 'react';

import {ContactList} from '../../../cmps/ContactList'
import {ContactFilter} from '../../../cmps/ContactFilter'
import { loadContacts } from '../actions'
import { getLoggedUser } from '../../user/actions'
import { connect } from 'react-redux'
import ContactService from '../ContactService'

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
        let contacts = await ContactService.getContacts(filter);
        this.setState({ contacts })
    }
    
    render() {
        const { contacts } = this.props;
        return (
            <section>
                <h1>Contacts</h1>
                <ContactFilter onFilter={this.handleFilter}></ContactFilter>
                <ContactList contacts={contacts}></ContactList>
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