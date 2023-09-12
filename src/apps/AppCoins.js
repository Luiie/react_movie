import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("");
  const [usd, setUsd] = useState(0);
  const onChange = (event) => {
    if (event.target.value !== "default")
        setCoin(JSON.parse(event.target.value));
  }
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
        setCoins(json);
        setLoading(false);
    });
  },[])
  return (
      <div>
        <h1>The Coins! ({coins.length})</h1>
        {loading ? <strong>Loading...</strong> : 
        <div>
            <select onChange={onChange} defaultValue="default">
                <option value="default" disabled>------</option>
                {coins.map((coin) => (
                    <option key={coin.id} value={JSON.stringify(coin)}>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
                    </option>
                )
                )}
            </select>
            <input value={usd} onChange={(event) => setUsd(event.target.value)} type="number"/>
            <hr/>
            {coin==="" ? null : <strong>{usd} USD = {usd/coin.quotes.USD.price} {coin.name}</strong>}
        </div>
        }
        
      </div>
  );
}

export default App;
