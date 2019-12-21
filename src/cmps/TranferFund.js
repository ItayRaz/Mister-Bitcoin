import React, { Component } from 'react'
import { transfer } from '../modules/user/actions'
import { connect } from 'react-redux'



class TransferFund extends Component {

    state = {
        transfer: null
    }
    

    updateTransfer = (ev) => {
        const { value, name } = ev.target
        console.log(this.state);
        this.setState(prevState => {
            return {
                transfer: {
                    ...prevState,
                    [name]: +value
                }
            }
        })
    }

    transfer = async (ev) => {
        ev.preventDefault();
        let {contact} = this.props;
        let {transfer} = this.state
        await this.props.transfer(transfer.transfer,contact);
        this.props.history.push('/contact')        
    }

    render() {
        return (
            <section className="transfer-section">
                <input onChange={this.updateTransfer} name="transfer" type="number" />
                <button onClick={this.transfer}>Transfer</button>
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
    transfer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransferFund)