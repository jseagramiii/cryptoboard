import React from 'react'

const TradingSignal = ({ signal }) => {
  if (signal.inOutVar === undefined) {
    return <div>Loading</div>
  }
  return (
    <div style={{ fontSize: '1.5em', margin: '1em' }}>
      <p>
        The below trading signal is powered by{' '}
        <a href='intotheblock.com'>
          <u>IntoTheBlock</u>
        </a>
        , an intelligence company that leverages machine learning and advanced
        statistics to extract intelligent signals for crypto-assets.
      </p>
      <span>Latest Trading Signal for Bitcoin is </span>
      <span style={signal.inOutVar.sentiment === 'bearish' ? bearish : bullish}>
        <strong>{signal.inOutVar.sentiment}</strong>
      </span>
    </div>
  )
}
const bearish = {
  color: 'red',
}
const bullish = {
  color: 'green',
}
export default TradingSignal
