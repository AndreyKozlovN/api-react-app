import './Search-wallet.css';
import axios from 'axios';
import { Component } from 'react';
import { CSVLink } from 'react-csv';


class SearchWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: '',
            history: []
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

        render () {
            const { wallet, history } = this.state;

            async function balance () {
                const response = await axios.get('https://chain.api.btc.com/v3/address/' + wallet)
                alert('Баланс на текущий момент ' + response.data.data.balance + ' $')
                history.push(response.data.data)
            }

            return (
                <div className="search-wallet">
                    <input 
                        className="input-search-wallet"
                        type="text" 
                        placeholder="Введите кошелек" 
                        onChange={this.onValueChange} 
                        name="wallet"
                        value={wallet}/>
                    <button className="btn-search-wallet" onClick={balance}>Узнать Баланс</button>
                   <div className="history-download-search-wallet">
                        <CSVLink 
                            className="history-wallet" 
                            data={history}
                            filename="testwork-kozlov-a-historyWallet.csv">
                        Загрузить историю</CSVLink>
                   </div>
                </div>
        )
    }
}

export default SearchWallet;
