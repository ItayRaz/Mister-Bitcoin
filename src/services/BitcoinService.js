import Axios from 'axios';
var axios = Axios.create({
    // withCredentials: true
});

export const BitCoinService = {
    getRate,
    getMarketPrice
}

function handelErr(err) {
    console.dir(err)
    throw err;
}

async function getRate() {
    const rate =  await axios.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true');    
    return rate.data
}

async function getMarketPrice() {
    const marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true');
    return marketPrice.data.values;
}