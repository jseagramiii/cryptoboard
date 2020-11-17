import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import CryptoPrices from './CryptoPrices'
import News from './News'

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [cryptoData, setCryptoData] = useState({price: {}, signal: {}, news: []})
  
  useEffect(() => {
    const getCryptoData = async () => {
      const resPrice = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?api_key=${apiKey}&fsyms=XLM,BTC,ETH&tsyms=USD,EUR&`)
      
      const resSignal = await axios.get(`https://min-api.cryptocompare.com/data/tradingsignals/intotheblock/latest?api_key=${apiKey}&fsym=BTC`)
      
      const resNews = await axios.get(`https://min-api.cryptocompare.com/data/v2/news/?api_key=${apiKey}&feeds=cryptocompare,cointelegraph,coindesk`)

      setCryptoData({price: resPrice.data, signal: resSignal.data.Data, news: resNews.data.Data })
  
    }
    getCryptoData()
  }, [])
  console.log(cryptoData.signal.inOutVar)

  return (
    <div className="App">
      <CryptoPrices  
        price={cryptoData.price} 
        signal={cryptoData.signal}
      />
      <News news={cryptoData.news} />
    </div>
  );
}

export default App;
