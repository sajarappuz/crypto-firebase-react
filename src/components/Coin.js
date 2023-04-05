import React from 'react'

function Coin({name,price,icon,symbol}) {
  return (
    <div>
        <h1>name:{name}</h1>
        <img src={icon}/>
        <h3>price:{price}</h3>
        <h3>symbol:{symbol}</h3>
    </div>
  )
}

export default Coin;