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
    this.handleStartAgain = this.handleStartAgain.bind(this)
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

  handleStartAgain(event) {
    event.preventDefault()
    this.setState({choices: {}})
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

  renderLanding() {
    return (
      <div className="container">
        <HueSquare hue={this.state.displayHue} />
        <h1>Blueish</h1>
        <button
          className="button is-light is-outlined is-large"
          onClick={this.handleStart}
        >
          Start
        </button>
      </div>
    )
  }

  renderQuestion() {
    return (
      <div className="container">
        <HueSquare hue={this.state.displayHue} />
        <h1>Is the box blue or purple?</h1>
        <div className="buttons has-addons">
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
    )
  }

  renderResults() {
    return (
      <div className="container">
        <h1>Your answers</h1>
        <div className="columns">
          {this.state.hues.map(hue => (
            <div className="column" key={hue}>
              <HueSquare hue={hue} size={20} />
              <p>{this.state.choices[hue]}</p>
            </div>
          ))}
        </div>
        <button
          className="button is-light is-outlined is-large"
          onClick={this.handleStartAgain}
        >
          Start Again
        </button>
        <p className="text">
          Have you ever disagreed with someone when describing the colour of an
          object?
          <br />
          People assign
          {' '}
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Color_term"
            target="_blank"
            rel="noopener noreferrer"
          >
            colour terms
          </a>
          {' '}
          based on their language, culture, and individual perception.
          <br />
          Where do you draw the line between these terms?
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header container">
          {(this.state.displayHue === null && (
            (Object.keys(this.state.choices).length &&
              this.renderResults()
            ) ||
            this.renderLanding()
          )) ||
            this.renderQuestion()
          }
        </header>
      </div>
    )
  }
}

export default App
