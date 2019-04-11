import React, { Component } from 'react';
import './App.css';

import AppFooter from './components/footer/AppFooter';
import AppHeader from './components/header/AppHeader';
import MobileInfo from './components/mobile-info/MobileInfo';
import MobileImage from './components/mobile-image/MobileImage';
import Slider from './components/Slider';

import b1 from './images/b1.png'
import b2 from './images/b2.png'
import b3 from './images/b3.png'

import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'

import y1 from './images/y1.png'
import y2 from './images/y2.png'
import y3 from './images/y3.png'

import bl1 from './images/1.png'
import bl2 from './images/2.png'
import bl3 from './images/3.png'

class App extends Component {

  state = {
    amount: 5,
    colors: [{label: 'blue', value: '#45abeb'}, {label: 'pink', value: '#ce45eb'}, {label: 'yellow', value: '#ebca45'}, {label: 'black', value: '#1a1a1a'}],
    selectedColor: 'blue',
    images: {
      blue: [b1, b2, b3],
      pink: [p1, p2, p3],
      yellow: [y1, y2, y3],
      black: [bl1, bl2, bl3]
    },
    selectedImage: b1,
    imageNum: 1
  }

  changeColor = color => {
    let selectedColor = color;
    let selectedImage = this.state.images[color][0]

    this.setState({
      ...this.state,
      selectedColor,
      selectedImage
    })
  }

  setAmount = e => {
    let amount = document.getElementById('amount').value;
    if (amount !== '') {
      this.setState({...this.state, amount: parseInt(amount)})
    } else {
      this.setState({...this.state, amount: 0})
    }
  }

  changePosition = position => {
    let imageNum = position;
    let selectedImage = this.state.images[this.state.selectedColor][--position]
    this.setState({
      ...this.state,
      selectedImage,
      imageNum
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <AppHeader inCart={this.state.amount}/>

          <div className="mobile-wrapper">
          <div className="mobile">
            <MobileInfo colors={this.state.colors} 
                        selectedColor={this.state.selectedColor} 
                        changeColor={this.changeColor}
                        amount={this.state.amount}
                        setAmount={this.setAmount} />
            <MobileImage selectedImage={this.state.selectedImage}/>
          </div>
          <Slider imageNum={this.state.imageNum} changePosition={this.changePosition}/>
          </div>

          <AppFooter/>
        </div>
      </div>
    );
  }
}

export default App;
