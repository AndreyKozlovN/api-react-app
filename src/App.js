import './App.css';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import {useState, useEffect} from 'react';
import Coin from './components/coin/Coin.js';
import SearchWallet from './components/search-wallet/Search-wallet';

function App() {
  
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(result => {
        setCoins(result.data);
      })
      .catch(err => console.log(err))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filterCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-title">Evercode LAB</h1>
        <form>
          <input 
            type="text" 
            className="coin-input" 
            placeholder="Найти Монету" 
            onChange={handleChange}/>
        </form>
        <CSVLink 
          className="coin-balance" 
          data={coins} 
          filename="testwork-kozlov-a.csv">
        Загрузить список всех монет</CSVLink>
        <SearchWallet />
      </div>
      {filterCoins.map(coin => {
        return (
          <Coin 
            capital={coin.market_cap}          
            key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}/>
        )
      })}
    </div>
  );
}

export default App;
