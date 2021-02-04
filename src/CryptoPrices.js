import React from 'react'
import bitcoin from './bitcoin.png'
import ethereum from './ethereum.png'
import stellar from './stellar.png'

const CryptoPrices = ({ price }) => {
  const cryptpoPics = [stellar, bitcoin, ethereum]
  const today = new Date()

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Crypto Snapshot</h1>
      {Object.keys(price).map((key, index) => (
        <div className='prices-container' key={key}>
          <img
            style={{ marginRight: '1em', paddingTop: '1.5em' }}
            src={cryptpoPics[index]}
            alt='coin'
          />
          <p style={style}>{key}</p>
          <p style={style}> $ {price[key].USD}</p>
          <p style={{ fontSize: '1em' }}>{today.toString()}</p>
        </div>
      ))}
    </div>
  )
}

const style = {
  fontSize: '3.2em',
  padding: '.1em',
}

export default CryptoPrices
