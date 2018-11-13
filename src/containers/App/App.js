import React, { Component } from 'react'

import './App.css'
import HueSquare from '../../components/HueSquare'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueSquare hue={280} />
        </header>
      </div>
    )
  }
}

export default App
