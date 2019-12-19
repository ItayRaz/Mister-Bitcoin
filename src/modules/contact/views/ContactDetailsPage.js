import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { loadCurrContact } from '../actions'
import { connect } from 'react-redux'

class ContactDetailsPage extends Component {
    state = {
        contact: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const res = await this.props.loadCurrContact(id);    
    }

    render() {
        const { contact } = this.props;
        if (contact) return (
            <section className="contact-details">
                <h1>{contact.name}</h1>
                <img src={`https://robohash.org/${contact.name}`} alt="" />
                <h4>{contact.email}</h4>
                <h4>{contact.phone}</h4>
                <Link to={`edit/${contact._id}`}><button>Edit</button></Link>
            </section>
        )
        else return (<h1>no contact</h1>)
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetailsPage)