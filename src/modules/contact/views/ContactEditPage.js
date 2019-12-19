import React, { Component } from 'react'
import ContactService from '../ContactService'
import { loadCurrContact } from '../actions'
import { saveContact } from '../actions'
import { removeContact } from '../actions'
import { connect } from 'react-redux'

class ContactEditPage extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        let contact;
        let { id } = this.props.match.params
        if (id) {
            await this.props.loadCurrContact(id);
            return this.setState({contact: this.props.contact})
        }
        else contact = ContactService.getEmptyContact()
        this.setState({ contact })
    }

    updateContact = (ev) => {
        const { value, name } = ev.target
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [name]: value
                }
            }
        })
    }

    removeContact = async () => {
        const id = this.state.contact._id
        await this.props.removeContact(id)
        this.props.history.push('/contact')
    }

    saveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state;
        return contact && (
            <section className="contact-edit">
                <h2>Edit</h2>
                <form action="" onSubmit={this.saveContact}>
                    <label> Name:
                    <input onChange={this.updateContact} name="name" type="text" value={contact.name} />
                    </label>
                    <label> Email:
                    <input onChange={this.updateContact} name="email" type="email" value={contact.email} />
                    </label>
                    <label> Phone:
                    <input onChange={this.updateContact} name="phone" type="number" value={contact.phone} />
                    </label>
                    <button>
                        Save Contact
                    </button>
                </form>
                <button onClick={this.removeContact}>Delete</button>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact,
    saveContact,
    removeContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditPage)