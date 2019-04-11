import React from 'react'
import './MobileInfo.css'
import Colors from '../colors/Colors'

export default function MobileInfo({colors, selectedColor, changeColor, setAmount, amount}) {
  return (
    <div className="mobile-info">
      <div className="title">
        <h1>Apple iPhone X</h1>
        <h1 className="subtitle">Brilliant. In Every Way.</h1>
      </div>

      <div className="info">
       <p>All-screen design. Longest battery life ever in <br/>
        an iPhone. Fastest performance. Water and <br/>
        splash resistant. Studio-quality photos and 4K video. <br/>
        More secure with Face ID. The new <br/>
        iPhone XR. It’s a brilliant upgrade.</p>
      </div>

      <Colors colors={colors} selectedColor={selectedColor} changeColor={changeColor}/>

      <div className="amount">
        <h4>Amount</h4>
        <input type="text" onChange={setAmount} value={amount} id="amount"/>
      </div>
    </div>
  )
}
