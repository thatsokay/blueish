import React, { Component } from 'react'

import './App.css'
import HueSquare from '../../components/HueSquare'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hue: null,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueSquare hue={this.state.hue} />
          <h1>Blueish</h1>
        </header>
      </div>
    )
  }
}

export default App
