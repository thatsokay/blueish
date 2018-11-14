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
      choices: {},
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleChoiceCreator = this.handleChoiceCreator.bind(this)
    this.nextHue = this.nextHue.bind(this)
  }

  handleStart(event) {
    event.preventDefault()
    var step = (this.state.upperHue - this.state.lowerHue) / (this.state.numHues - 1)
    var hues = []
    for (let i = this.state.lowerHue; i <= this.state.upperHue; i += step) {
      hues.push(i)
    }
    this.setState({
      hues,
      pool: hues,
      choices: {},
    })
    setTimeout(() => this.nextHue(), 0)
  }

  handleChoiceCreator = choice => event => {
    event.preventDefault()
    this.setState(state => ({
      choices: Object.assign({}, state.choices, {
        [state.displayHue]: choice,
      })
    }))
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
          {(this.state.displayHue === null &&
            <div>
              <h1>Blueish</h1>
              <button
                className="button is-light is-outlined is-large"
                onClick={this.handleStart}
              >
                Start
              </button>
            </div>
          ) ||
            <div>
              <h1>Is the box blue or purple?</h1>
              <div className="buttons has-addons is-centered">
                <button
                  className="button is-light is-outlined is-large choice"
                  onClick={this.handleChoiceCreator('Blue')}
                >
                  Blue
                </button>
                <button
                  className="button is-light is-outlined is-large choice"
                  onClick={this.handleChoiceCreator('Purple')}
                >
                  Purple
                </button>
              </div>
            </div>
          }
        </header>
      </div>
    )
  }
}

export default App
