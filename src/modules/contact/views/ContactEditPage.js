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
            return this.setState({ contact: this.props.contact })
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
                <div className="container flex column">
                    <img src={`https://robohash.org/${contact.name}`} alt="" />
                    <form className="edit-form flex column">
                        <label className="flex">
                            <div>Name:</div>
                            <input onChange={this.updateContact} name="name" type="text" value={contact.name} />
                        </label>
                        <label className="flex">
                            <div>Email:</div>
                            <input onChange={this.updateContact} name="email" type="email" value={contact.email} />
                        </label>
                        <label className="flex">
                            <div>Phone:</div>
                            <input onChange={this.updateContact} name="phone" type="number" value={contact.phone} />
                        </label>
                    </form>
                </div>
                <div className="edit-btns flex space-evenly">
                    <button className="save-btn" onClick={this.saveContact}>Save Contact</button>
                    <button className="delete-btn" onClick={this.removeContact}>Delete</button>
                </div>
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