import React, { Component } from 'react'

import './App.css'
import '../../sass/main.sass'
import HueSquare from '../../components/HueSquare'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hue: null,
      bounds: [250, 270], // Lower and upper hue bounds
      numHues: 5,         // Number of hues to show including both bounds
      pool: [],           // Remaining hues to show
    }

    this.handleStartClick = this.handleStartClick.bind(this)
    this.nextHue = this.nextHue.bind(this)
  }

  handleStartClick(event) {
    event.preventDefault()
    var [lower, upper] = this.state.bounds
    var step = (upper - lower) / (this.state.numHues - 1)
    var pool = []
    for (let i = lower; i <= upper; i += step) {
      pool.push(i)
    }
    this.setState({pool})
    setTimeout(() => this.nextHue(), 0)
  }

  nextHue() {
    if (this.state.pool.length) {
      var selected = Math.floor(Math.random() * this.state.pool.length)
      this.setState({
        hue: this.state.pool[selected],
        pool: this.state.pool.filter((item, index) => index !== selected),
      })
    } else {
      this.setState({
        hue: null,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueSquare hue={this.state.hue} />
          <h1>Blueish</h1>
          {(this.state.pool.length &&
            <div className="buttons has-addons">
              <button
                className="button is-large"
              >
                Blue
              </button>
              <button
                className="button is-large"
              >
                Purple
              </button>
            </div>
          ) ||
            <button
              className="button is-light is-outlined is-large"
              onClick={this.handleStartClick}
            >
              Start
            </button>
          }
        </header>
      </div>
    )
  }
}

export default App
