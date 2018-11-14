import React, { Component } from 'react'

import './App.css'
import '../../sass/main.sass'
import HueSquare from '../../components/HueSquare'

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayHue: null,
      lowerHue: 250,
      upperHue: 270,
      numHues: 5,       // Number of hues to show including both bounds
      hues: [],
      pool: [],         // Hues that haven't been displayed yet
    }

    this.handleStartClick = this.handleStartClick.bind(this)
    this.nextHue = this.nextHue.bind(this)
  }

  handleStartClick(event) {
    event.preventDefault()
    var step = (this.state.upperHue - this.state.lowerHue) / (this.state.numHues - 1)
    var hues = []
    for (let i = this.state.lowerHue; i <= this.state.upperHue; i += step) {
      hues.push(i)
    }
    this.setState({
      hues,
      pool: hues,
    })
    setTimeout(() => this.nextHue(), 0)
  }

  nextHue() {
    // Choose a hue that hasn't been displayed yet and display it
    if (this.state.pool.length) {
      var selected = Math.floor(Math.random() * this.state.pool.length)
      this.setState(state => ({
        displayHue: state.pool[selected],
        pool: state.pool.filter((item, index) => index !== selected),
      }))
    } else {
      this.setState({displayHue: null})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueSquare hue={this.state.displayHue} />
          {(this.state.pool.length &&
            <div>
              <h1>Is the box blue or purple?</h1>
              <div className="buttons has-addons is-centered">
                <button
                  className="button is-light is-outlined is-large choice"
                >
                  Blue
                </button>
                <button
                  className="button is-light is-outlined is-large choice"
                >
                  Purple
                </button>
              </div>
            </div>
          ) ||
            <div>
              <h1>Blueish</h1>
              <button
                className="button is-light is-outlined is-large"
                onClick={this.handleStartClick}
              >
                Start
              </button>
            </div>
          }
        </header>
      </div>
    )
  }
}

export default App
