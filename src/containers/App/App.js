import React, { Component } from 'react'

import './App.css'
import '../../sass/main.sass'
import HueSquare from '../../components/HueSquare'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hue: null,
    }
  }

  handleStartClick(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueSquare hue={this.state.hue} />
          <h1>Blueish</h1>
          <button
            className="button is-light is-outlined is-large"
            onClick={this.handleStartClick}
          >
            Start
          </button>
        </header>
      </div>
    )
  }
}

export default App
