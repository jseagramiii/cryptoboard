import React from 'react'
import bitcoin from './bitcoin.png'
import ethereum from './ethereum.png'
import stellar from './stellar.png'

const CryptoPrices = ({price, signal}) => {
    const cryptpoPics = [stellar, bitcoin, ethereum]

    if(signal.inOutVar === undefined) {
        return (
            <div>
                Loading
            </div>
        )
    }
    return (
        <div>
            {Object.keys(price).map((key, index) => (
                <div className='prices-container' key={key}>
                    <img style={{marginRight: '1em'}} src={cryptpoPics[index]} alt="coin"/>
                    <span style={style}>{key}</span> 
                    <span style={style}> $ {price[key].USD}</span>
                </div>
            ))}
            <div style={{fontSize: '1.5em'}}>
                <p>The below trading signal is powered by <a href='intotheblock.com'><u>IntoTheBlock</u></a>, an intelligence company that leverages machine learning and advanced statistics to extract intelligent signals for crypto-assets.</p>
                <span>Latest Trading Signal for Bitcoin is </span>
                <span style={signal.inOutVar.sentiment === 'bearish' ? bearish : bullish}>
                    <strong>{signal.inOutVar.sentiment}</strong>
                </span>
            </div>
            <hr/>
        </div>
    )
}

const style = {
    fontSize: '2em'
}

const bearish = {
    color: 'red'
}
const bullish = {
    color: 'green'
}
export default CryptoPrices
