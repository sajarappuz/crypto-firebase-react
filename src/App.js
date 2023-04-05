import react from "react";
import "../src/App.css"
import { useEffect,useState} from "react";
import axios from "axios";
import Coin from "./components/Coin";

function App(){

    const [coin,setCoin] = useState([]);
    const [search,setSearch] = useState("");
    useEffect(() =>{
      axios.get("http://api.coinstats.app/public/v1/coins?skip=0")
      .then((response)=>{
        setCoin(response.data.coins);
      })
    },[]);

    const filterCoins = coin.filter((coins) =>{
        return coins.name.toLowerCase().includes(search.toLowerCase());
    })

    return(
    <div className="App">
    <div className="header">
        <input type="text" placeholder="search coin....."  onChange={(e) =>{setSearch(e.target.value)}} />
    </div>
    <div className="display">
        {filterCoins.map((coins)=>{
            return <Coin name={coins.name}
             icon={coins.icon} 
            price={coins.price} 
            symbol={coins.symbol}/>
        })}
    </div>
</div>)
}


export default App;