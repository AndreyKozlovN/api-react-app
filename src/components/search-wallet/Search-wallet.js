import './Search-wallet.css';
import axios from 'axios';
import { Component } from 'react';

class SearchWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    balance = () => {
        axios
        .get('https://chain.api.btc.com/v3/address/' + this.state.wallet)
        .then(result => result.data)
        .then(result => alert(result.data.balance))
        .catch(err => console.log(err))
    }

        render () {
            const { wallet } = this.state;

            return (
                <div className="search-wallet">
                    <input 
                        className="input-search-wallet"
                        type="text" 
                        placeholder="Введите кошелек" 
                        onChange={this.onValueChange} 
                        name="wallet"
                        value={wallet}/>
                    <button className="btn-search-wallet" onClick={this.balance}>Узнать Баланс</button>
                </div>
        )
    }
}

export default SearchWallet;
