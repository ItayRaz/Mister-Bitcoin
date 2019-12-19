import React from 'react';

import { BitCoinService } from '../services/BitcoinService';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class StatisticPage extends React.Component {

    state = {
        marketPrice: []
    }

    async componentDidMount() {
        let marketPrice = await BitCoinService.getMarketPrice();        
        this.setState({marketPrice})
    }

    render() {
        const {marketPrice} = this.state;
        return (
            <section>
                <h1>Stats</h1>
                <Sparklines data={marketPrice.map(value => value.y)}  width={100} height={20} margin={5}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </section>
        )
    }
}