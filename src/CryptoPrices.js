import React from 'react'


const CryptoPrices = ({price, signal}) => {
    

    return (
        <div>
            {Object.keys(price).map((key) => (
            <div className='prices-container' key={key}>
                <span>{key}</span> 
                <span>{price[key].USD}</span>
            </div>
            ))}
            {Object.keys(signal).map((key) => (
            <div>
                <span>hi</span>
            </div>
            ))}
        </div>
    )
}

export default CryptoPrices
