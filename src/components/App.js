import React, {useState} from 'react'

import HueSquare from './HueSquare'

const lowerHue = 250
const upperHue = 270
const numHues = 5 // Number of hues to show including both bounds

const step = (upperHue - lowerHue) / (numHues - 1)
const hues = [...Array(numHues).keys()].map(i => lowerHue + step * i)

const App = () => {
  const [displayHue, setDisplayHue] = useState(null)
  const [huePool, setHuePool] = useState(hues)
  const [choices, setChoices] = useState({})

  const nextHue = () => {
    // Choose a hue that hasn't been displayed yet and display it
    if (huePool.length) {
      const selectedIndex = Math.floor(Math.random() * huePool.length)
      setDisplayHue(huePool[selectedIndex])
      setHuePool(huePool.filter((_, i) => i !== selectedIndex))
    } else {
      setDisplayHue(null)
      setHuePool(hues)
    }
  }

  const handleChoice = choice => () => {
    setChoices({...choices, [displayHue]: choice})
    nextHue()
  }

  const handleRestart = () => {
    setChoices({})
  }

  const Home = () => (
    <div className="container">
      <HueSquare hue={displayHue} />
      <h1>Blueish</h1>
      <button
        className="button is-light is-outlined is-large"
        onClick={nextHue}
      >
        Start
      </button>
    </div>
  )

  const Question = () => (
    <div className="container">
      <HueSquare hue={displayHue} />
      <h1>Is the box blue or purple?</h1>
      <div className="buttons has-addons">
        <button
          className="button is-light is-outlined is-large choice"
          onClick={handleChoice('Blue')}
        >
          Blue
        </button>
        <button
          className="button is-light is-outlined is-large choice"
          onClick={handleChoice('Purple')}
        >
          Purple
        </button>
      </div>
    </div>
  )

  const Results = () => (
    <div className="container">
      <h1>Your answers</h1>
      <div className="columns">
        {hues.map(hue => (
          <div className="column" key={hue}>
            <HueSquare hue={hue} size={20} />
            <p>{choices[hue]}</p>
          </div>
        ))}
      </div>
      <button
        className="button is-light is-outlined is-large"
        onClick={handleRestart}
      >
        Start Again
      </button>
      <p className="text">
        Have you ever disagreed with someone when describing the colour of an
        object?
        <br />
        People assign{' '}
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Color_term"
          target="_blank"
          rel="noopener noreferrer"
        >
          colour terms
        </a>{' '}
        based on their language, culture, and individual perception.
        <br />
        Where do you draw the line between these terms?
      </p>
    </div>
  )

  return (
    <div className="App">
      <header className="App-header container">
        {displayHue === null ? (
          Object.keys(choices).length ? (
            <Results />
          ) : (
            <Home />
          )
        ) : (
          <Question />
        )}
      </header>
    </div>
  )
}

export default App
