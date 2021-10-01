import './Coin.css';

const Coin = ({image, name, symbol, price, volume, priceChange, capital}) => {

    const capitalize = () => {
        alert('Капитализация - $ ' + capital)
    }

    return (
        <div className="coin-block">
            <div className="coin-row">
                <div className="coin-item">
                    <img src={image} alt="coin" />
                    <h2>{name}</h2>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 
                        ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
                        : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                    }
                    <button className="coin-capital" onClick={capitalize}>Капитализация</button>
                </div>
            </div>
        </div>
    )
}

export default Coin
