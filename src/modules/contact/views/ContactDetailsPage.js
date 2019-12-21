import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MoveList from '../../../cmps/MoveList'
import TransferFund from '../../../cmps/TranferFund'
import { loadCurrContact } from '../actions'
import { getLoggedUser } from '../../user/actions'
import { connect } from 'react-redux'

class ContactDetailsPage extends Component {
    state = {
        contact: {},
        moves: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        await this.props.loadCurrContact(id);
        await getLoggedUser();
        console.log('props', this.props);
        this.setState({ moves: this.movesWithContact() })
    }

    movesWithContact = () => {
        const moves = this.props.user.moves;
        const { contact } = this.props;
        return moves.filter(move => move.toId === contact._id)
    }

    render() {
        const { contact } = this.props;
        const { moves } = this.state;
        if (contact) return (
            <section>
                <div className="flex justify-center">
                    <div className="flex space-between action-btns">
                        <Link to="/contact"><button><i className="fas fa-long-arrow-alt-left"></i></button></Link>
                        <Link to={`edit/${contact._id}`}><button><i className="fas fa-user-edit"></i></button></Link>
                    </div>
                </div>
                <div className="contact-details flex column container">
                    <img src={`https://robohash.org/${contact.name}`} alt="" />
                    <div className="flex column space-between main-details">
                        <h3>{contact.name}</h3>
                        <h4>{contact.email}</h4>
                        <h4>{contact.phone}</h4>
                    <TransferFund contact={contact} history={this.props.history}></TransferFund>
                    </div>
                    {moves.length > 0 && <MoveList moves={moves}></MoveList>}
                </div>
            </section>
        )
        else return (<h1>no contact</h1>)
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact,
        user: state.user.currUser

    }
}

const mapDispatchToProps = {
    loadCurrContact,
    getLoggedUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetailsPage)