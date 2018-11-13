import React from 'react'
import PropTypes from 'prop-types'

import './HueSquare.css'

const HueSquare = ({ hue }) => {
  var style = {}
  if (hue === null) {
    style = {
      background: 'linear-gradient(to right, #40f, #80f)'
    }
  } else {
    style = {
      backgroundColor: `hsl(${hue}, 100%, 50%)`,
    }
  }
  return (
    <div className="hue-square" style={style}>
    </div>
  )
}

HueSquare.propTypes = {
  hue: PropTypes.number,
}

HueSquare.defaultProps = {
  hue: null,
}

export default HueSquare
