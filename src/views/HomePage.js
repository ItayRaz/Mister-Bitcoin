import React from 'react';
import MoveList from '../cmps/MoveList'
import { getLoggedUser } from '../modules/user/actions'
import { connect } from 'react-redux'
import { BitCoinService } from '../services/BitcoinService';


class HomePage extends React.Component {
    state = {
        user: '',
        bitCoinRate: 0
    }

    async componentDidMount() {
        const loggedUser = this.props.getLoggedUser()
        if (!loggedUser.user) this.props.history.push('/signUp')
        let bitCoinRate = await BitCoinService.getRate();
        this.setState({ bitCoinRate })
    }

    signOut = () => {
        localStorage.clear();
        this.props.history.push('/signUp')
    }

    render() {
        const { user } = this.props;
        console.log('user', user);

        const { bitCoinRate } = this.state;
        if (user) return (
            <section>
                <div className="user-details">
                    <h2>Hello {user.name}</h2>
                    <h3><i class="fas fa-coins"></i> Coins: {user.coins}</h3>
                    <h3><i className="fab fa-bitcoin"></i> BTC: {bitCoinRate}</h3>
                    <button onClick={this.signOut}>Sign Out</button>
                </div>
                {user.moves.length > 0 && <h2 className="moves-header">Your Moves:</h2>}
                <MoveList moves={user.moves}></MoveList>
            </section>
        )
        else return <h2>no User</h2>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currUser
    }
}

const mapDispatchToProps = {
    getLoggedUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)