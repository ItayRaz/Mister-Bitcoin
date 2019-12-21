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
            <section className="sign-up-page flex column align-center container">
                <img src="https://www.buybitcoinworldwide.com/img/goodicons/doublecoin.png" alt=""/>
                <form className="flex column align-center" onSubmit= {this.saveUser}>
                    <label className="flex column align-center">
                    <div>Please Enter Your Name:</div>   
                    <input onChange={this.updateUser} name="name" type="text" />
                    </label>
                    <button>Sing Up</button>
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