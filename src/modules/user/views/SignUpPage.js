import React, { Component } from 'react'
import { logIn } from '../actions'
import { connect } from 'react-redux'

class SignUpPage extends React.Component {

    state = {
        user: null
    }


    updateUser = (ev) => {
        const { value, name } = ev.target
        console.log(this.state);
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                    
                }
            }
        })
    }

    saveUser =  (ev) => {
        ev.preventDefault()        
        this.props.logIn(this.state.user);
        this.props.history.push('/')
    }

    render() {
        return (
            <section>
                <form onSubmit= {this.saveUser}>
                    <label> Your Name:
                    <input onChange={this.updateUser} name="name" type="text" />
                    </label>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currUser
    }
}

const mapDispatchToProps = {
    logIn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage)