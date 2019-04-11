import React from 'react'
import './Slider.css'

export default function Slider({imageNum, changePosition}) {
  let arr = [1, 2, 3];
  return (
    <div className="slider">
       {arr.map((el, idx) => {
         console.log(el, imageNum)
        let classes = 'indicator' + ((idx == imageNum - 1) ? ' is-active': '')
        return <div className={classes} onClick={() => changePosition(el)}></div>
       })
       }
    </div>
  )
}
