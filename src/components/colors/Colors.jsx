import React from 'react'
import './Colors.css'

export default function Colors({colors, selectedColor, changeColor}) {

   let colorsDOM = 
    colors.map(color => {
      let classes = 'color' + (selectedColor === color.label ? ' is-selected' : '');
      return <div className={classes} 
                  style={{backgroundColor: color.value}}
                  onClick={() => changeColor(color.label)}
                  key={color.value}>
              </div>
    })
  

  return (
    <div>
      <h4>Select Color</h4>
      {colorsDOM}
    </div>
  )
}
